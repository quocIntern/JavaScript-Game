import { state } from './state.js';
import { SKILLS, PASSIVE_SKILLS, SOUNDS, DEMONS } from './data.js';
import { render, showCombatText, showAffinityFeedback, triggerScreenShake, logMessage } from './ui.js';
import { enemyDefeated, handleStartOfTurnPassives } from './flow.js';

function playSound(soundName) {
    if (SOUNDS[soundName]) {
        SOUNDS[soundName].currentTime = 0;
        SOUNDS[soundName].play();
    }
}

function calculateDamage(attacker, target, skill) {
    let baseDamage = 0;
    if (skill.type === 'physical') {
        baseDamage = skill.power + attacker.STATS.STR;
    } else if (skill.type === 'magic') {
        baseDamage = skill.power + attacker.STATS.MAG;
    }

    let bonusTurn = false;
    let affinityMultiplier = 1.0;
    let damageMultiplier = 1.0;
    let critMultiplier = 1.0;
    const attackerPassives = attacker.PASSIVES || [];

    const affinity = target.affinities[skill.element];
    if (affinity) {
        showAffinityFeedback(target, affinity);
        if (affinity === 'weak') {
            affinityMultiplier = 1.5;
            bonusTurn = true;
            logMessage(`The attack was Super Effective!`, 'log-critical');
        } else if (affinity === 'resist') {
            affinityMultiplier = 0.5;
            logMessage(`The attack was Resisted...`, 'log-resist');
        } else if (affinity === 'null') {
            affinityMultiplier = 0;
            bonusTurn = false;
            logMessage(`The attack was Nullified!`, 'log-resist');
        }
    }
    
    attackerPassives.forEach(pKey => {
        const passive = PASSIVE_SKILLS[pKey];
        if (passive && passive.type === 'damage_boost' && passive.element === skill.element) {
            damageMultiplier *= passive.multiplier;
        }
    });
    
    let critChance = 0.05 + (attacker.STATS.LUK * 0.0075);
    if (attackerPassives.includes('apt_pupil')) {
        critChance *= 2.0;
    }
    const isCrit = Math.random() < critChance;
    if (isCrit && affinity !== 'null') {
        critMultiplier = 1.5;
        bonusTurn = true;
    }
    
    const modifiedDamage = baseDamage * affinityMultiplier * damageMultiplier * critMultiplier;
    const totalDamage = modifiedDamage - target.STATS.END;
    let finalDamage = Math.floor(Math.max(0, totalDamage));
    
    if (affinity !== 'null' && finalDamage === 0 && modifiedDamage > 0) {
        finalDamage = 1;
    }

    if (isCrit && affinity !== 'null') {
        playSound('crit');
        if (target === state.enemy) triggerScreenShake();
        showCombatText(target, "CRITICAL!", 'critical');
        logMessage(`A CRITICAL HIT!`, 'log-critical');
    }

    if (finalDamage > 0) {
        playSound('hit');
        setTimeout(() => {
            showCombatText(target, finalDamage, 'damage');
        }, 150);
    }

    return { damage: finalDamage, bonus: bonusTurn };
}
export function attack() {
    if (state.persona.HP <= 0) return;

    logMessage(`${state.persona.name} performs a basic attack.`, 'log-player');
    const attackSkill = { power: 0, type: 'physical', element: 'phys' };
    const result = calculateDamage(state.persona, state.enemy, attackSkill);
    state.enemy.HP -= result.damage;
    logMessage(`${state.enemy.name} takes ${result.damage} damage.`, 'log-enemy');

    if (state.enemy.HP <= 0) {
        enemyDefeated();
        return;
    }

    if (result.bonus) {
        showCombatText(state.persona, "1 MORE!", "critical");
        logMessage(`An opening! ${state.persona.name} gets another turn!`, 'log-critical');
    } else {
        enemyTurn();
    }
    render();
}
export function useAbility(skillKey){
    if (state.persona.HP <= 0) return;
    const skill = SKILLS[skillKey];
    const player = state.persona;
    if ((skill.cost.sp && player.SP < skill.cost.sp) || (skill.cost.hp && player.HP <= skill.cost.hp)) {
        return;
    }
    
    logMessage(`${player.name} uses ${skill.name}!`, 'log-player');
    if (skill.cost.sp) player.SP -= skill.cost.sp;
    if (skill.cost.hp) player.HP -= skill.cost.hp;

    if (skill.type === 'healing') {
        const healAmount = skill.power + player.STATS.MAG;
        player.HP = Math.min(player.maxHP, player.HP + healAmount);
        showCombatText(player, `+${healAmount}`, 'healing');
        logMessage(`${player.name} recovers ${healAmount} HP.`, 'log-healing');
        playSound('heal');
        enemyTurn();
    } else {
        const result = calculateDamage(player, state.enemy, skill);
        state.enemy.HP -= result.damage;
        logMessage(`${state.enemy.name} takes ${result.damage} damage.`, 'log-enemy');
        
        if (state.enemy.HP <= 0) {
            enemyDefeated();
            return;
        }

        if (result.bonus) {
            showCombatText(state.persona, "1 MORE!", "critical");
            logMessage(`An opening! ${state.persona.name} gets another turn!`, 'log-critical');
        } else {
            enemyTurn();
        }
    }
    render();
}
function enemyTurn() {
    const enemy = state.enemy;
    const player = state.persona;
    let wasPhysicalAttack = false; 

    const dodgeChance = (player.STATS.AGI * 0.02) + (player.STATS.LUK * 0.01);
    if (Math.random() < dodgeChance) {
        showCombatText(player, "EVADED!", 'resist');
        logMessage(`${player.name} evaded the attack!`, 'log-player');
        handleStartOfTurnPassives();
        render();
        return;
    }

    const availableSkills = enemy.ABILITY;
    const chosenSkillKey = availableSkills[Math.floor(Math.random() * availableSkills.length)];
    const skill = SKILLS[chosenSkillKey];
    
    const canUseSkill = skill && ((skill.cost.sp && enemy.SP >= skill.cost.sp) || (skill.cost.hp && enemy.HP > skill.cost.hp));
    const wantsToUseSkill = Math.random() < 0.75;

    if (canUseSkill && wantsToUseSkill) {
        logMessage(`${enemy.name} uses ${skill.name}!`, 'log-enemy');
        if(skill.cost.sp) enemy.SP -= skill.cost.sp;
        if(skill.cost.hp) enemy.HP -= skill.cost.hp;
        
        const result = calculateDamage(enemy, player, skill);
        player.HP -= result.damage;
        logMessage(`${player.name} takes ${result.damage} damage.`, 'log-player-dmg');

        if (skill.type === 'physical') {
            wasPhysicalAttack = true;
        }
    } else {
        logMessage(`${enemy.name} attacks!`, 'log-enemy');
        const attackSkill = { power: 0, type: 'physical', element: 'phys' };
        const result = calculateDamage(enemy, player, attackSkill);
        player.HP -= result.damage;
        logMessage(`${player.name} takes ${result.damage} damage.`, 'log-player-dmg');
        wasPhysicalAttack = true; 
    }
    
    if (wasPhysicalAttack && player.PASSIVES && player.PASSIVES.includes('counter')) {
        const counterPassive = PASSIVE_SKILLS.counter;
        if (Math.random() < counterPassive.chance) {
            setTimeout(() => {
                showCombatText(player, 'COUNTER!', 'critical');
                logMessage(`${player.name} counters the attack!`, 'log-critical');
                const counterSkill = { power: counterPassive.power, type: 'physical', element: 'phys' };
                const counterResult = calculateDamage(player, enemy, counterSkill);
                enemy.HP -= counterResult.damage;
                logMessage(`${enemy.name} takes ${counterResult.damage} from the counter.`, 'log-enemy');
                if (enemy.HP <= 0) enemyDefeated();
                render();
            }, 500);
        }
    }

    if (player.HP <= 0) {
        player.HP = 0;
        logMessage(`${player.name} has fallen...`, 'log-player-dmg');
        render();
        document.getElementById('actions').innerHTML = `<h4>DEFEAT...</h4>`; 
        setTimeout(() => document.location.reload(), 3000); 
    } else {
        handleStartOfTurnPassives();
        render();
    }
}