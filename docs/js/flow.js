import { state } from './state.js';
import * as Data from './data.js';
import { render, logMessage } from './ui.js';

function playSound(soundName) {
    if (Data.SOUNDS[soundName]) {
        Data.SOUNDS[soundName].currentTime = 0;
        Data.SOUNDS[soundName].play();
    }
}

function floorTransition() {
    const actionsDiv = document.getElementById("actions");
    const currentFloor = Math.floor((state.totalKills -1) / 10) + 1;
    actionsDiv.innerHTML = `<h4>Floor ${currentFloor} Cleared!</h4><p>Preparing to advance.</p>`;
    logMessage(`Floor ${currentFloor} has been cleared.`, 'log-system');
    
    setTimeout(() => {
        shuffleTime(); 
    }, 3000);
}

export function spawnEnemy() {
    let newEnemyTemplate;
    const nextKillNumber = state.totalKills + 1;

    if (nextKillNumber % 10 === 0 && nextKillNumber > 0) {
        const bossIndex = Math.min(Math.floor(state.totalKills / 10), Data.BOSSES.length - 1);
        newEnemyTemplate = Data.BOSSES[bossIndex];
    } else if (nextKillNumber % 5 === 0 && nextKillNumber > 0) {
        newEnemyTemplate = Data.MINI_BOSSES[Math.floor(Math.random() * Data.MINI_BOSSES.length)];
    } else {
        const enemyTier = Math.floor(state.totalKills / 10);
        const floorIndex = Math.min(enemyTier, Data.FLOOR_ENCOUNTERS.length - 1);
        const availableEnemies = Data.FLOOR_ENCOUNTERS[floorIndex];
        
        const chosenEnemyName = availableEnemies[Math.floor(Math.random() * availableEnemies.length)];
        newEnemyTemplate = Data.DEMONS.find(demon => demon.name === chosenEnemyName);
    }
    
    const newEnemy = JSON.parse(JSON.stringify(newEnemyTemplate));
    newEnemy.maxHP = newEnemy.HP; 
    state.enemy = newEnemy;
    logMessage(`A wild ${state.enemy.name} appears!`, 'log-system');
}

export function enemyDefeated() {
    logMessage(`${state.enemy.name} was defeated!`, 'log-system');
    if (state.enemy.isFinalBoss) {
        const actionsDiv = document.getElementById("actions");
        actionsDiv.innerHTML = "<h4>VICTORY!</h4><p>You have conquered the Abyss!</p><button onclick='document.location.reload()'>Play Again</button>";
        logMessage("Congratulations! You have cleared the game.", "log-system");
        return;
    }

    const wasBoss = state.enemy.isBoss || state.enemy.isMiniBoss;
    state.totalKills++;
    const xpGained = wasBoss ? 25 : 10;
    state.xp += xpGained;
    logMessage(`Gained ${xpGained} EXP.`, 'log-system');

    const xpToLevel = state.level * 20;
    if(state.xp >= xpToLevel){
        state.xp -= xpToLevel;
        state.level++;
        state.persona.maxHP += 5; 
        state.persona.maxSP += 2;
        state.persona.HP = state.persona.maxHP;
        state.persona.SP = state.persona.maxSP;
        logMessage(`LEVEL UP! ${state.persona.name} is now Level ${state.level}.`, 'log-critical');
        playSound('heal');
    }
    
    if (state.totalKills > 0 && state.totalKills % 10 === 0) {
        floorTransition();
    } else if (wasBoss) {
        if (Math.random() < 0.5) { 
            skillShuffleTime();
        } else {
            shuffleTime();
        }
    } else {
        shuffleTime();
    }
}

function shuffleTime() {
    const actionsDiv = document.getElementById("actions");
    actionsDiv.innerHTML = "<h4>Shuffle Time! Choose your reward...</h4>";
    logMessage("Shuffle Time! Choose a card.", "log-system");
    const shuffled = [...Data.CARDS].sort(() => 0.5 - Math.random());
    const options = shuffled.slice(0, 3);
    
    options.forEach(card => {
        let btn = document.createElement("button");
        btn.innerHTML = `<strong>${card.name}</strong><br>${card.description}`;
        btn.onclick = () => {
            playSound('select');
            const logMsg = card.apply(state.persona);
            logMessage(logMsg, "log-system");
            spawnEnemy(); 
            handleStartOfTurnPassives();             
            render();                  
        };
        actionsDiv.appendChild(btn);
    });
}

function skillShuffleTime() {
    const actionsDiv = document.getElementById("actions");
    const player = state.persona;
    actionsDiv.innerHTML = "<h4>Skill Time! Your potential has grown...</h4>";
    logMessage("Skill Time! Choose a new power.", "log-system");
    let skillOptions = [];

    player.ABILITY.forEach(skillKey => {
        const skill = Data.SKILLS[skillKey];
        if (skill.evolves_to && Data.SKILLS[skill.evolves_to]) {
            skillOptions.push({
                name: `Upgrade ${skill.name}`,
                description: `${skill.name} -> ${Data.SKILLS[skill.evolves_to].name}`,
                apply: (persona) => {
                    const index = persona.ABILITY.indexOf(skillKey);
                    if (index > -1) {
                        const newSkillKey = skill.evolves_to;
                        persona.ABILITY[index] = newSkillKey;
                        logMessage(`${skill.name} has evolved into ${Data.SKILLS[newSkillKey].name}!`, 'log-system');
                    }
                }
            });
        }
    });
    const learnableSkills = ['dia', 'garu', 'bufu', 'lunge', 'psi', 'kouha'];
    learnableSkills.forEach(skillKey => {
        if (!player.ABILITY.includes(skillKey)) {
            const skill = Data.SKILLS[skillKey];
            skillOptions.push({
                name: `Learn ${skill.name}`,
                description: `Acquire the skill '${skill.name}'.`,
                apply: (persona) => {
                    if (persona.ABILITY.length < 6) {
                        persona.ABILITY.push(skillKey);
                        logMessage(`${persona.name} learned ${skill.name}!`, 'log-system');
                    } else {
                        promptSkillReplacement(skillKey);
                    }
                }
            });
        }
    });
    const learnablePassives = ['invigorate_1', 'resist_phys', 'counter', 'fire_boost', 'apt_pupil'];
    learnablePassives.forEach(pKey => {
        if (!player.PASSIVES || !player.PASSIVES.includes(pKey)) {
            const passive = Data.PASSIVE_SKILLS[pKey];
            skillOptions.push({
                name: `Learn ${passive.name}`,
                description: passive.description,
                apply: (persona) => {
                    if (!persona.PASSIVES) persona.PASSIVES = [];
                    persona.PASSIVES.push(pKey);
                    if (passive.type === 'resistance') {
                        persona.affinities[passive.element] = passive.affinity;
                    }
                    logMessage(`${persona.name} learned the passive skill: ${passive.name}!`, 'log-system');
                }
            });
        }
    });

    const shuffledOptions = skillOptions.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    if (shuffledOptions.length === 0) {
        shuffleTime();
        return;
    }

    shuffledOptions.forEach(card => {
        let btn = document.createElement("button");
        btn.innerHTML = `<strong>${card.name}</strong><br>${card.description}`;
        btn.onclick = () => {
            card.apply(state.persona);
            const needsReplacement = player.ABILITY.length >= 6 && card.name.startsWith("Learn");
            if (!needsReplacement) {
                spawnEnemy();
                handleStartOfTurnPassives();
                render();
            }
        };

        actionsDiv.appendChild(btn);
    });
}

function promptSkillReplacement(newSkillKey) {
    const actionsDiv = document.getElementById("actions");
    const newSkill = Data.SKILLS[newSkillKey];
    actionsDiv.innerHTML = `<h4>Your skill slots are full.</h4><p>Choose a skill to forget to learn <strong>${newSkill.name}</strong>.</p>`;

    state.persona.ABILITY.forEach((currentSkillKey, index) => {
        const currentSkill = Data.SKILLS[currentSkillKey];
        const btn = document.createElement("button");
        btn.innerHTML = `Forget ${currentSkill.name}`;
        btn.onclick = () => {
            logMessage(`${state.persona.name} forgot ${currentSkill.name} and learned ${newSkill.name}!`, 'log-system');
            state.persona.ABILITY[index] = newSkillKey;
            spawnEnemy();
            render();
        };
        actionsDiv.appendChild(btn);
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel (Keep current skills)";
    cancelButton.onclick = () => {
        logMessage(`Declined to learn ${newSkill.name}.`, 'log-system');
        spawnEnemy();
        render();
    };
    actionsDiv.appendChild(cancelButton);
}

export function handleStartOfTurnPassives() {
    if (!state.persona.PASSIVES) return;
    state.persona.PASSIVES.forEach(pKey => {
        const passive = Data.PASSIVE_SKILLS[pKey];
        if (passive && passive.type === 'regen') {
            if (passive.resource === 'HP') {
                const healAmount = Math.floor(state.persona.maxHP * passive.amount);
                state.persona.HP = Math.min(state.persona.maxHP, state.persona.HP + healAmount);
                if (healAmount > 0) logMessage(`${passive.name} restores ${healAmount} HP.`, 'log-healing');
            }
            if (passive.resource === 'SP') {
                const spAmount = passive.amount;
                state.persona.SP = Math.min(state.persona.maxSP, state.persona.SP + spAmount);
                if (spAmount > 0) logMessage(`${passive.name} restores ${spAmount} SP.`, 'log-healing');
            }
        }
    });
}