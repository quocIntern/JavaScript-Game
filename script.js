// #region ------------------- GAME DATA -------------------

function playSound(soundName) {
    if (SOUNDS[soundName]) {
        SOUNDS[soundName].currentTime = 0;
        SOUNDS[soundName].play();
    }
}

const PERSONAS = {
    Orpheus: {
        name: "Orpheus",
        HP: 75, SP: 30,
        STATS:{STR: 5, MAG: 4, END: 5, AGI: 4, LUK: 3},
        ABILITY:["bash", "agi", "dia"],
        img:"./img/Orpheus.png",
        affinities: { elec: 'weak', fire: 'resist' }
    },
    Izanagi: {
        name: "Izanagi",
        HP: 85, SP: 20,
        STATS:{STR: 7, MAG: 2, END: 6, AGI: 3, LUK: 3},
        ABILITY:["lunge", "bash"],
        img:"./img/Izanagi.png",
        affinities: { wind: 'weak', elec: 'resist', phys: 'resist' }
    },
    Arsene: {
        name: "Arsene",
        HP: 65, SP: 40,
        STATS:{STR: 3, MAG: 6, END: 3, AGI: 6, LUK: 3},
        ABILITY:["eiha", "bufu"],
        img:"./img/Arsene.png",
        affinities: { light: 'weak', dark: 'resist' }
    }
};

const DEMONS = [
    {
        name:"Pixie", HP: 30, maxHP: 30, SP: 20,
        STATS:{STR: 3, MAG: 5, END: 2, AGI: 6, LUK: 4},
        ABILITY:["zio", "dia"], img:"./img/Pixie.webp",
        affinities: { phys: 'weak', elec: 'resist', wind: 'weak' }
    },
    {
        name:"Slime", HP: 60, maxHP: 60, SP: 10,
        STATS:{STR: 6, MAG: 2, END: 8, AGI: 2, LUK: 2},
        ABILITY:["lunge"], img:"./img/Slime.png",
        affinities: { phys: 'resist', fire: 'weak', elec: 'weak' }
    },
    {
        name:"Goblin", HP: 45, maxHP: 45, SP: 15,
        STATS:{STR: 7, MAG: 2, END: 5, AGI: 4, LUK: 3},
        ABILITY:["lunge"], img:"./img/Goblin.webp", 
        affinities: { wind: 'weak', fire: 'resist' }
    },
    {
        name:"Mandrake", HP: 40, maxHP: 40, SP: 22,
        STATS:{STR: 2, MAG: 8, END: 3, AGI: 5, LUK: 7},
        ABILITY:["eiha"], img:"./img/Mandrake.png", 
        affinities: { fire: 'weak', elec: 'resist' }
    },
    {
        name:"Agathion", HP: 50, maxHP: 50, SP: 25,
        STATS:{STR: 5, MAG: 6, END: 5, AGI: 7, LUK: 5},
        ABILITY:["zio", "lunge"], img:"./img/Agathion.webp", 
        affinities: { wind: 'weak', elec: 'resist', dark: 'resist' }
    },
    {
        name:"Bicorn", HP: 55, maxHP: 55, SP: 18,
        STATS:{STR: 8, MAG: 3, END: 6, AGI: 6, LUK: 3},
        ABILITY:["lunge", "garu"], img:"./img/Bicorn.png",
        affinities: { elec: 'weak', dark: 'null' }
    },
    {
        name:"Angel", HP: 60, maxHP: 60, SP: 35,
        STATS:{STR: 5, MAG: 9, END: 6, AGI: 8, LUK: 6},
        ABILITY:["kouha", "garu", "dia"], img:"./img/Angel.png", 
        affinities: { dark: 'weak', light: 'null', elec: 'weak' }
    },
    {
        name:"Jack Frost", HP: 70, maxHP: 70, SP: 40,
        STATS:{STR: 6, MAG: 11, END: 7, AGI: 9, LUK: 8},
        ABILITY:["bufu", "bufula"], img:"./img/Jack_Frost.webp",
        affinities: { fire: 'weak', ice: 'null' }
    },
    {
        name:"Pyro Jack", HP: 75, maxHP: 75, SP: 45,
        STATS:{STR: 5, MAG: 12, END: 6, AGI: 10, LUK: 9},
        ABILITY:["agi", "agilao"], img:"./img/Pyro_Jack.png", 
        affinities: { ice: 'weak', fire: 'null' }
    },
    {
        name:"Nekomata", HP: 80, maxHP: 80, SP: 35,
        STATS:{STR: 9, MAG: 7, END: 7, AGI: 14, LUK: 10},
        ABILITY:["power_slash", "garula"], img:"./img/Nekomata.webp", 
        affinities: { elec: 'weak', psy: 'resist' }
    },
    {
        name:"Orthrus", HP: 90, maxHP: 90, SP: 40,
        STATS:{STR: 12, MAG: 8, END: 9, AGI: 11, LUK: 5},
        ABILITY:["agilao", "assault_dive"], img:"./img/Orthrus.webp", 
        affinities: { ice: 'weak', fire: 'resist' }
    },
    {
        name:"Valkyrie", HP: 100, maxHP: 100, SP: 45,
        STATS:{STR: 14, MAG: 9, END: 10, AGI: 12, LUK: 8},
        ABILITY:["power_slash", "bufula"], img:"./img/Valkyrie.png", 
        affinities: { fire: 'weak', ice: 'resist', light: 'null' }
    },
    {
        name:"Leanan Sídhe", HP: 85, maxHP: 85, SP: 60,
        STATS:{STR: 7, MAG: 15, END: 8, AGI: 11, LUK: 12},
        ABILITY:["psio", "diarama"], img:"./img/Leanan_Sidhe.webp", 
        affinities: { nuke: 'weak', psy: 'resist' }
    },
    {
        name:"Rakshasa", HP: 110, maxHP: 110, SP: 30,
        STATS:{STR: 16, MAG: 5, END: 12, AGI: 10, LUK: 6},
        ABILITY:["megaton_raid"], img:"./img/Rakshasa.png", 
        affinities: { light: 'weak', phys: 'resist', dark: 'null' }
    },
    {
        name:"Queen Mab", HP: 130, maxHP: 130, SP: 90,
        STATS:{STR: 10, MAG: 18, END: 11, AGI: 15, LUK: 13},
        ABILITY:["agidyne"], img:"./img/Queen_Mab.png", 
        affinities: { nuke: 'weak', fire: 'null', elec: 'resist' }
    },
    {
        name:"Rangda", HP: 150, maxHP: 150, SP: 85,
        STATS:{STR: 12, MAG: 16, END: 13, AGI: 17, LUK: 11},
        ABILITY:["agidyne", "eigaon"], img:"./img/Rangda.webp", 
        affinities: { elec: 'weak', light: 'weak', phys: 'resist', fire: 'resist' }
    },
    {
        name:"Throne", HP: 160, maxHP: 160, SP: 100,
        STATS:{STR: 13, MAG: 19, END: 14, AGI: 13, LUK: 12},
        ABILITY:["agidyne", "kougaon"], img:"./img/Throne.webp", 
        affinities: { dark: 'weak', fire: 'null', light: 'null', nuke: 'resist' }
    },
    {
        name:"Barong", HP: 175, maxHP: 175, SP: 95,
        STATS:{STR: 18, MAG: 14, END: 15, AGI: 16, LUK: 10},
        ABILITY:["ziodyne", "megaton_raid"], img:"./img/Barong.png", 
        affinities: { psy: 'weak', elec: 'null', phys: 'resist' }
    },
    {
        name:"Abaddon", HP: 200, maxHP: 200, SP: 110,
        STATS:{STR: 20, MAG: 15, END: 18, AGI: 12, LUK: 8},
        ABILITY:["gigantic_fist", "megido"], img:"./img/Abaddon.webp", 
        affinities: { nuke: 'weak', phys: 'resist', fire: 'resist', dark: 'resist' }
    },
    {
        name:"Anubis", HP: 140, maxHP: 140, SP: 130,
        STATS:{STR: 11, MAG: 20, END: 12, AGI: 15, LUK: 16},
        ABILITY:["kougaon", "eigaon", "megido"], img:"./img/Anubis.webp", 
        affinities: { light: 'null', dark: 'null' }
    }
];

const MINI_BOSSES = [
    {
        name:"Rampaging Oni", HP: 120, maxHP: 120, SP: 30,
        STATS:{STR: 15, MAG: 5, END: 12, AGI: 7, LUK: 5},
        ABILITY:["assault_dive", "power_slash"], img:"./img/Oni.webp", 
        affinities: { phys: 'resist', fire: 'resist', elec: 'weak' },
        isMiniBoss: true,
        description: "A physical wall that forces you to use magic." 
    },
    {
        name:"Setanta", HP: 85, maxHP: 85, SP: 40,
        STATS:{STR: 13, MAG: 8, END: 7, AGI: 15, LUK: 12},
        ABILITY:["power_slash", "lunge"], img:"./img/Setanta.webp", 
        affinities: { psy: 'weak', wind: 'resist', fire: 'null' },
        isMiniBoss: true,
        description: "A high-crit attacker that is hard to hit."
    },
    {
        name:"Incubus", HP: 90, maxHP: 90, SP: 70,
        STATS:{STR: 6, MAG: 14, END: 7, AGI: 11, LUK: 10},
        ABILITY:["agilao", "eigaon"], img:"./img/Incubus.png", 
        affinities: { phys: 'weak', fire: 'null', dark: 'resist', ice: 'weak' },
        isMiniBoss: true,
        description: "A glass cannon that hits hard with magic but is weak to physical attacks."
    },
    {
        name:"High Pixie", HP: 90, maxHP: 90, SP: 65,
        STATS:{STR: 6, MAG: 13, END: 7, AGI: 12, LUK: 10},
        ABILITY:["zionga", "diarama"], img:"./img/High_Pixie.webp",
        affinities: { nuke: 'weak', wind: 'resist', elec: 'resist' },
        isMiniBoss: true,
        description: "A durable magic user that can heal itself."
    },
    {
        name:"Principality", HP: 110, maxHP: 110, SP: 80,
        STATS:{STR: 9, MAG: 12, END: 9, AGI: 9, LUK: 9},
        ABILITY:["kougaon", "diarama"], img:"./img/Principality.webp", 
        affinities: { dark: 'weak', light: 'null', wind: 'resist' },
        isMiniBoss: true,
        description: "A battle of attrition that tests your damage output against its healing."
    },
    {
        name:"Kaiwan", HP: 130, maxHP: 130, SP: 60,
        STATS:{STR: 10, MAG: 11, END: 11, AGI: 10, LUK: 8},
        ABILITY:["agilao", "psio", "garula"], img:"./img/Kaiwan.webp", 
        affinities: { phys: 'weak', psy: 'resist', nuke: 'resist' },
        isMiniBoss: true,
        description: "An all-rounder with multiple resistances, forcing you to find an opening."
    },
    {
        name:"Naga", HP: 95, maxHP: 95, SP: 55,
        STATS:{STR: 9, MAG: 13, END: 8, AGI: 13, LUK: 7},
        ABILITY:["zionga", "lunge"], img:"./img/Naga.webp", 
        affinities: { wind: 'weak', elec: 'null' },
        isMiniBoss: true,
        description: "An elemental specialist that punishes those with an electric weakness."
    }
];

const BOSSES = [
    {
        name:"Cerberus", HP: 240, maxHP: 240, SP: 80,
        STATS:{STR: 22, MAG: 8, END: 15, AGI: 14, LUK: 7},
        ABILITY:["gigantic_fist", "brave_blade"], img:"./img/Cerberus.png", 
        affinities: { ice: 'weak', fire: 'null' },
        isBoss: true,
        description: "A relentless physical attacker that tests your endurance and physical defense."
    },
    {
        name:"Girimehkala", HP: 250, maxHP: 250, SP: 120,
        STATS:{STR: 14, MAG: 16, END: 20, AGI: 8, LUK: 9},
        ABILITY:["megaton_raid", "eigadyne"], img:"./img/Girimekhala.png", 
        affinities: { phys: 'null', dark: 'resist', light: 'weak', nuke: 'weak' },
        isBoss: true,
        description: "A defensive fortress that nullifies all physical attacks, forcing a magic-based strategy."
    },
    {
        name:"Belphegor", HP: 220, maxHP: 220, SP: 150,
        STATS:{STR: 10, MAG: 20, END: 14, AGI: 12, LUK: 11},
        ABILITY:["agidyne", "bufudyne"], img:"./img/Belphegor.png",
        affinities: { fire: 'resist', ice: 'null', elec: 'weak' },
        isBoss: true,
        description: "A powerful mage that barrages you with high-tier elemental spells."
    },
    {
        name:"Odin", HP: 260, maxHP: 260, SP: 140,
        STATS:{STR: 18, MAG: 18, END: 17, AGI: 16, LUK: 14},
        ABILITY:["ziodyne", "brave_blade"], img:"./img/Odin.png", 
        affinities: { wind: 'weak', elec: 'null', light: 'resist' },
        isBoss: true,
        description: "A balanced master of both physical and magical combat with no obvious flaws."
    },
    {
        name:"Trumpeter", HP: 280, maxHP: 280, SP: 200,
        STATS:{STR: 15, MAG: 18, END: 16, AGI: 15, LUK: 15},
        ABILITY:["megidola", "diarahan"], img:"./img/Trumpeter.webp", 
        affinities: { elec: 'weak', light: 'null', dark: 'null' },
        isBoss: true,
        description: "A strategic nightmare that can fully heal itself and uses Almighty damage that cannot be resisted."
    }
];

const FINAL_BOSS = {
    name:"Satan", HP: 300, maxHP: 300, SP: 150,
    STATS:{STR: 15, MAG:15, END: 15, AGI: 10, LUK: 10},
    ABILITY:["agilao", "zionga", "bufudyne"], img:"./img/Satan.webp",
    affinities: { },
    isFinalBoss: true
};

const FLOOR_ENCOUNTERS = [
    ["Pixie", "Slime"],
    ["Pixie", "Slime", "Goblin"],
    ["Goblin", "Mandrake", "Agathion"],
    ["Bicorn", "Angel", "Jack Frost"],
    ["Angel", "Bicorn", "Jack Frost"],
    ["Pyro Jack", "Nekomata"],
    ["Orthrus", "Valkyrie"],
    ["Leanan Sídhe", "Rakshasa"],
    ["Queen Mab", "Rangda"],
    ["Throne", "Barong", "Abaddon", "Anubis"]
];

const SKILLS = {
    lunge: { name: "Lunge", cost: { hp: 5 }, power: 13, type: "physical", element: "phys", evolves_to: "assault_dive" },
    bash:   { name: "Bash", cost: { hp: 8 }, power: 10, type: "physical", element: "phys", evolves_to: "power_slash" },
    assault_dive: { name: "Assault Dive", cost: { hp: 14 }, power: 22, type: "physical", element: "phys", evolves_to: "megaton_raid" },
    power_slash:  { name: "Power Slash", cost: { hp: 18 }, power: 30, type: "physical", element: "phys", evolves_to: "gigantic_fist" },
    megaton_raid:  { name: "Megaton Raid", cost: { hp: 20 }, power: 40, type: "physical", element: "phys", evolves_to: "gods_hand" },
    gigantic_fist: { name: "Gigantic Fist", cost: { hp: 25 }, power: 45, type: "physical", element: "phys", evolves_to: "brave_blade" },
    gods_hand:    { name: "God's Hand", cost: { hp: 30 }, power: 80, type: "physical", element: "phys" },
    brave_blade:  { name: "Brave Blade", cost: { hp: 32 }, power: 85, type: "physical", element: "phys" },
    primal_force: { name: "Primal Force", cost: { hp: 35 }, power: 100, type: "physical", element: "phys" },
    
    agi:    { name: "Agi", cost: { sp: 4 }, power: 12, type: "magic", element: "fire", evolves_to: "agilao" },
    agilao: { name: "Agilao", cost: { sp: 8 }, power: 25, type: "magic", element: "fire", evolves_to: "agidyne" },
    agidyne:{ name: "Agidyne", cost: { sp: 16 }, power: 50, type: "magic", element: "fire", evolves_to: "inferno" },
    inferno:{ name: "Inferno", cost: { sp: 28 }, power: 90, type: "magic", element: "fire" },

    bufu:   { name: "Bufu", cost: { sp: 4 }, power: 12, type: "magic", element: "ice", evolves_to: "bufula" },
    bufula: { name: "Bufula", cost: { sp: 8 }, power: 25, type: "magic", element: "ice", evolves_to: "bufudyne" },
    bufudyne:{ name: "Bufudyne", cost: { sp: 16 }, power: 50, type: "magic", element: "ice", evolves_to: "diamond_dust" },
    diamond_dust: { name: "Diamond Dust", cost: { sp: 28 }, power: 90, type: "magic", element: "ice" },

    zio:    { name: "Zio", cost: { sp: 4 }, power: 12, type: "magic", element: "elec", evolves_to: "zionga" },
    zionga: { name: "Zionga", cost: { sp: 8 }, power: 25, type: "magic", element: "elec", evolves_to: "ziodyne" },
    ziodyne:{ name: "Ziodyne", cost: { sp: 16 }, power: 50, type: "magic", element: "elec", evolves_to: "thunder_reign" },
    thunder_reign: { name: "Thunder Reign", cost: { sp: 28 }, power: 90, type: "magic", element: "elec" },

    garu:   { name: "Garu", cost: { sp: 4 }, power: 12, type: "magic", element: "wind", evolves_to: "garula" },
    garula: { name: "Garula", cost: { sp: 8 }, power: 25, type: "magic", element: "wind", evolves_to: "garudyne" },
    garudyne:{ name: "Garudyne", cost: { sp: 16 }, power: 50, type: "magic", element: "wind", evolves_to: "panta_rhei" },
    panta_rhei: { name: "Panta Rhei", cost: { sp: 28 }, power: 90, type: "magic", element: "wind" },

    psi:    { name: "Psi", cost: { sp: 5 }, power: 14, type: "magic", element: "psy", evolves_to: "psio" },
    psio:   { name: "Psio", cost: { sp: 10 }, power: 28, type: "magic", element: "psy", evolves_to: "psiodyne" },
    psiodyne:{ name: "Psiodyne", cost: { sp: 18 }, power: 55, type: "magic", element: "psy" },

    frei:    { name: "Frei", cost: { sp: 5 }, power: 14, type: "magic", element: "nuke", evolves_to: "freila" },
    freila:  { name: "Freila", cost: { sp: 10 }, power: 28, type: "magic", element: "nuke", evolves_to: "freidyne" },
    freidyne:{ name: "Freidyne", cost: { sp: 18 }, power: 55, type: "magic", element: "nuke" },

    kouha:    { name: "Kouha", cost: { sp: 5 }, power: 14, type: "magic", element: "light", evolves_to: "kouga" },
    kouga:    { name: "Kouga", cost: { sp: 10 }, power: 28, type: "magic", element: "light", evolves_to: "kougaon" },
    kougaon:  { name: "Kougaon", cost: { sp: 18 }, power: 55, type: "magic", element: "light" },

    eiha:    { name: "Eiha", cost: { sp: 5 }, power: 14, type: "magic", element: "dark", evolves_to: "eigaon" },
    eigaon:  { name: "Eigaon", cost: { sp: 10 }, power: 28, type: "magic", element: "dark", evolves_to: "eigadyne" },
    eigadyne:{ name: "Eigadyne", cost: { sp: 18 }, power: 55, type: "magic", element: "dark" },

    megido:    { name: "Megido", cost: { sp: 15 }, power: 35, type: "magic", element: "almighty", evolves_to: "megidola" },
    megidola:  { name: "Megidola", cost: { sp: 24 }, power: 55, type: "magic", element: "almighty", evolves_to: "megidolaon" },
    megidolaon:{ name: "Megidolaon", cost: { sp: 38 }, power: 80, type: "magic", element: "almighty" },
    morning_star: { name: "Morning Star", cost: { sp: 54 }, power: 120, type: "magic", element: "almighty" },
    
    dia:      { name: "Dia", cost: { sp: 6 }, power: 30, type: "healing", element: "heal", evolves_to: "diarama" },
    diarama:  { name: "Diarama", cost: { sp: 12 }, power: 70, type: "healing", element: "heal", evolves_to: "diarahan" },
    diarahan: { name: "Diarahan", cost: { sp: 24 }, power: 999, type: "healing", element: "heal" },
};

const PASSIVE_SKILLS = {
    fire_boost: { name: "Fire Boost", description: "Increases Fire damage by 25%.", type: "damage_boost", element: "fire", multiplier: 1.25 },
    ice_boost:  { name: "Ice Boost", description: "Increases Ice damage by 25%.", type: "damage_boost", element: "ice", multiplier: 1.25 },
    elec_boost: { name: "Elec Boost", description: "Increases Elec damage by 25%.", type: "damage_boost", element: "elec", multiplier: 1.25 },
    wind_boost: { name: "Wind Boost", description: "Increases Wind damage by 25%.", type: "damage_boost", element: "wind", multiplier: 1.25 },
    resist_phys: { name: "Resist Physical", description: "Reduces damage taken from Physical attacks.", type: "resistance", element: "phys", affinity: "resist" },
    counter:     { name: "Counter", description: "15% chance to repel Physical attacks with light damage.", type: "counter", chance: 0.15, power: 10 },
    invigorate_1: { name: "Invigorate 1", description: "Restore 3 SP at the start of your turn.", type: "regen", resource: "SP", amount: 3 },
    regenerate_1: { name: "Regenerate 1", description: "Restore 5% of max HP at the start of your turn.", type: "regen", resource: "HP", amount: 0.05 },
    apt_pupil: { name: "Apt Pupil", description: "Doubles your critical hit rate.", type: "crit_boost", multiplier: 2.0 },
};

const CARDS = [
    {
        name: "0. The Fool",
        description: "+1 to all stats.",
        apply: function(persona) {
            persona.STATS.STR += 1;
            persona.STATS.MAG += 1;
            persona.STATS.END += 1;
            persona.STATS.AGI += 1;
            persona.STATS.LUK += 1;
        }
    },
    {
        name: "I. The Magician",
        description: "Increases Magic by 2.",
        apply: function(persona) { persona.STATS.MAG += 2; }
    },
    {
        name: "IV. The Emperor",
        description: "Increases Endurance by 2.",
        apply: function(persona) { persona.STATS.END += 2; }
    },
    {
        name: "VI. The Lovers",
        description: "Increases Agility and Luck by 1.",
        apply: function(persona) {
            persona.STATS.AGI += 1;
            persona.STATS.LUK += 1;
        }
    },
    {
        name: "VII. The Chariot",
        description: "Increases Strength by 2.",
        apply: function(persona) { persona.STATS.STR += 2; }
    },
    {
        name: "VIII. Strength",
        description: "Increases Strength and Endurance by 1.",
        apply: function(persona) {
            persona.STATS.STR += 1;
            persona.STATS.END += 1;
        }
    },
    {
        name: "IX. The Hermit",
        description: "Increases Luck by 3.",
        apply: function(persona) { persona.STATS.LUK += 3; }
    },
    {
        name: "XI. Justice",
        description: "Increases Strength and Magic by 1.",
        apply: function(persona) {
            persona.STATS.STR += 1;
            persona.STATS.MAG += 1;
        }
    },
    {
        name: "XII. The Hanged Man",
        description: "Increases Agility by 3.",
        apply: function(persona) { persona.STATS.AGI += 3; }
    },
    {
        name: "XV. The Devil",
        description: "Increases Strength by 4.",
        apply: function(persona) { persona.STATS.STR += 4; }
    },
    {
        name: "XVI. The Tower",
        description: "Increases Endurance by 4.",
        apply: function(persona) { persona.STATS.END += 4; }
    },
    {
        name: "XVIII. The Moon",
        description: "Increases Magic and Luck by 2.",
        apply: function(persona) {
            persona.STATS.MAG += 2;
            persona.STATS.LUK += 2;
        }
    },
    {
        name: "XXI. The World",
        description: "+2 to Strength, Magic, and Endurance.",
        apply: function(persona) {
            persona.STATS.STR += 2;
            persona.STATS.MAG += 2;
            persona.STATS.END += 2;
        }
    },
    {
        name: "II. The High Priestess",
        description: "+5 to Max SP and restore 5 SP.",
        apply: function(persona) {
            persona.maxSP += 5;
            persona.SP += 5;
        }
    },
    {
        name: "III. The Empress",
        description: "+10 to Max HP and heal 10 HP.",
        apply: function(persona) {
            persona.maxHP += 10;
            persona.HP += 10;
        }
    },
    {
        name: "V. The Hierophant",
        description: "Restore 50% of your Max SP.",
        apply: function(persona) {
            const spRestore = Math.floor(persona.maxSP * 0.50);
            persona.SP = Math.min(persona.maxSP, persona.SP + spRestore);
        }
    },
    {
        name: "XIII. Death",
        description: "Fully restore HP and SP.",
        apply: function(persona) {
            persona.HP = persona.maxHP;
            persona.SP = persona.maxSP;
        }
    },
    {
        name: "XIV. Temperance",
        description: "Heal 50% of your Max HP.",
        apply: function(persona) {
            const healAmount = Math.floor(persona.maxHP * 0.50);
            persona.HP = Math.min(persona.maxHP, persona.HP + healAmount);
        }
    },
    {
        name: "XVII. The Star",
        description: "+5 Max HP and +5 Max SP.",
        apply: function(persona) {
            persona.maxHP += 5;
            persona.maxSP += 5;
            persona.HP += 5;
            persona.SP += 5;
        }
    },
    {
        name: "XX. Judgement",
        description: "Increase Max HP and Max SP by 10%.",
        apply: function(persona) {
            const hpBonus = Math.floor(persona.maxHP * 0.10);
            const spBonus = Math.floor(persona.maxSP * 0.10);
            persona.maxHP += hpBonus;
            persona.maxSP += spBonus;
            persona.HP += hpBonus;
            persona.SP += spBonus;
        }
    },
    {
        name: "X. Wheel of Fortune",
        description: "+3 to a random stat.",
        apply: function(persona) {
            const stats = ["STR", "MAG", "END", "AGI", "LUK"];
            const randomStat = stats[Math.floor(Math.random() * stats.length)];
            persona.STATS[randomStat] += 3;
        }
    },
    {
        name: "XIX. The Sun",
        description: "+1 to all stats and restore 50% of HP & SP.",
        apply: function(persona) {
            persona.STATS.STR += 1;
            persona.STATS.MAG += 1;
            persona.STATS.END += 1;
            persona.STATS.AGI += 1;
            persona.STATS.LUK += 1;
            const healAmount = Math.floor(persona.maxHP * 0.50);
            const spRestore = Math.floor(persona.maxSP * 0.50);
            persona.HP = Math.min(persona.maxHP, persona.HP + healAmount);
            persona.SP = Math.min(persona.maxSP, persona.SP + spRestore);
        }
    },
];
// #endregion

// #region ------------------- GAME STATE -------------------
let state = {
    playerName:null,
    enemy:null,
    xp:0,
    level:1,
    persona:null,
    totalKills:0,
};
// #endregion

// #region ------------------- SETUP & INITIALIZATION -------------------
function mainMenu() {
    const div = document.getElementById("start-screen");
    let newButton = document.createElement("button");
    newButton.textContent = "New Game";
    newButton.onclick =() => personaSelect();
    div.appendChild(newButton);
    let loadButton = document.createElement("button");
    loadButton.textContent = "Load Save";
    loadButton.onclick = () => loadGame();
    div.appendChild(loadButton);
}

function personaSelect() {
    localStorage.removeItem('personaSaveFile');
    const div = document.getElementById("start-screen");
    div.innerHTML = "<h4>Choose your Persona</h4>";
    Object.keys(PERSONAS).forEach (c => {
        let btn = document.createElement("button");
        btn.innerHTML=`<img src='${PERSONAS[c].img}' class='icon'> ${c}`;
        btn.onclick = () => startGame(c);
        div.appendChild(btn);
    })
}

function startGame(personaName) {
    const base = PERSONAS[personaName];
    state.persona = JSON.parse(JSON.stringify(base));
    state.persona.name = personaName;
    state.persona.maxHP = base.HP;
    state.persona.maxSP = base.SP;
    document.getElementById("start-screen").style.display = 'none';
    document.getElementById("game-screen").style.display = 'grid';
    spawnEnemy();
    handleStartOfTurnPassives();
    render();
    const exitContainer = document.getElementById("exit-container");
    exitContainer.style.display = 'block';
    exitContainer.innerHTML = '';
    const exitButton = document.createElement("button");
    exitButton.textContent = "Exit to Menu";
    exitButton.onclick = () => {
        if (confirm("Are you sure you want to exit? Unsaved progress will be lost.")) {
            document.location.reload();
        }
    };
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save Game";
    saveButton.onclick = () => saveGame();
    exitContainer.innerHTML = '';
    exitContainer.appendChild(exitButton);
    exitContainer.appendChild(saveButton);
}
// #endregion

// #region ------------------- UI & RENDERING -------------------
function render() {
    if (!state.persona) return;
    const playerStatsDiv = document.getElementById("player-stats");
    let p = state.persona;
    const hpPercent = (p.HP / p.maxHP) * 100;
    const spPercent = (p.SP / p.maxSP) * 100;
    playerStatsDiv.innerHTML = `
        <div class="feedback-text" id="player-feedback"></div>
        <h3>${p.name} -- Lvl.${state.level}</h3>
        <img src='${p.img}' class='icon'>
        <p>HP: ${p.HP} / ${p.maxHP}</p>
        <div class="stat-bar"><div class="hp-fill" style="width: ${hpPercent}%;"></div></div>
        <p>SP: ${p.SP} / ${p.maxSP}</p>
        <div class="stat-bar"><div class="sp-fill" style="width: ${spPercent}%;"></div></div>
        <ul>
            <li>STR: ${p.STATS.STR}</li><li>MAG: ${p.STATS.MAG}</li>
            <li>END: ${p.STATS.END}</li><li>AGI: ${p.STATS.AGI}</li>
            <li>LUK: ${p.STATS.LUK}</li>
        </ul>`;
        if (p.PASSIVES && p.PASSIVES.length > 0) {
        playerStatsDiv.innerHTML += `
            <div class="passives-list">
                <strong>Passives:</strong>
                <ul>
                    ${p.PASSIVES.map(pKey => `<li>${PASSIVE_SKILLS[pKey].name}</li>`).join('')}
                </ul>
            </div>`;
    }

    const enemyDisplayDiv = document.getElementById("enemy-display");
    if (state.enemy) {
        let e = state.enemy;
        const enemyHpPercent = (e.HP / e.maxHP) * 100;
        enemyDisplayDiv.innerHTML = `
            <div class="feedback-text" id="enemy-feedback"></div>
            <h3>${e.name}</h3>
            <img src='${e.img}' class='icon'>
            <p>HP: ${e.HP} / ${e.maxHP}</p>
            <div class="stat-bar"><div class="hp-fill" style="width: ${enemyHpPercent}%;"></div></div>`;
    }

    const actionsDiv = document.getElementById("actions");
    actionsDiv.innerHTML = `<button onclick="attack()">Attack</button>`;
    
    p.ABILITY.forEach(skillKey => {
        const skill = SKILLS[skillKey];
        if (!skill) return;
        let costDisplay = skill.cost.hp ? `${skill.cost.hp} HP` : `${skill.cost.sp} SP`;
        let skillButton = document.createElement("button");
        skillButton.innerHTML = `${skill.name} <br> (${costDisplay})`;
        skillButton.onclick = () => useAbility(skillKey);
        const hasEnoughSp = !skill.cost.sp || p.SP >= skill.cost.sp;
        const hasEnoughHp = !skill.cost.hp || p.HP > skill.cost.hp;
        if (!hasEnoughSp || !hasEnoughHp) {
            skillButton.disabled = true;
            skillButton.style.opacity = "0.5";
        }
        actionsDiv.appendChild(skillButton);
    });
    
    const floorCounterDiv = document.getElementById("floor-counter");
    if (state.enemy) {
        const currentFloor = Math.floor(state.totalKills / 10) + 1;
        
        floorCounterDiv.innerHTML = `
            Floor: ${currentFloor}<br>
            Kill Count: ${state.totalKills}
        `;
    }

}
// #endregion

// #region ------------------- COMBAT LOGIC -------------------
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
        } else if (affinity === 'resist') {
            affinityMultiplier = 0.5;
        } else if (affinity === 'null') {
            affinityMultiplier = 0;
            bonusTurn = false;
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
    }

    if (finalDamage > 0) {
        playSound('hit');
        setTimeout(() => {
            showCombatText(target, finalDamage, 'damage');
        }, 150);
    }

    return { damage: finalDamage, bonus: bonusTurn };
}

function attack() {
    const attackSkill = { power: 0, type: 'physical', element: 'phys' };
    const result = calculateDamage(state.persona, state.enemy, attackSkill);
    state.enemy.HP -= result.damage;

    if (state.enemy.HP <= 0) {
        enemyDefeated();
        return;
    }

    if (result.bonus) {
        showCombatText(state.persona, "1 MORE!", "critical");
    } else {
        enemyTurn();
    }
    render();
}

function useAbility(skillKey){
    const skill = SKILLS[skillKey];
    const player = state.persona;
    if ((skill.cost.sp && player.SP < skill.cost.sp) || (skill.cost.hp && player.HP <= skill.cost.hp)) {
        return;
    }
    if (skill.cost.sp) player.SP -= skill.cost.sp;
    if (skill.cost.hp) player.HP -= skill.cost.hp;

    if (skill.type === 'healing') {
        const healAmount = skill.power + player.STATS.MAG;
        player.HP = Math.min(player.maxHP, player.HP + healAmount);
        showCombatText(player, `+${healAmount}`, 'healing');
        playSound('heal');
    } else {
        const result = calculateDamage(player, state.enemy, skill);
        state.enemy.HP -= result.damage;
        
        if (state.enemy.HP <= 0) {
            enemyDefeated();
            return;
        }

        if (result.bonus) {
            showCombatText(state.persona, "1 MORE!", "critical");
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
        if(skill.cost.sp) enemy.SP -= skill.cost.sp;
        if(skill.cost.hp) enemy.HP -= skill.cost.hp;
        
        const result = calculateDamage(enemy, player, skill);
        player.HP -= result.damage;

        if (skill.type === 'physical') {
            wasPhysicalAttack = true;
        }
    } else {
        const attackSkill = { power: 0, type: 'physical', element: 'phys' };
        const result = calculateDamage(enemy, player, attackSkill);
        player.HP -= result.damage;
        wasPhysicalAttack = true; 
    }
    
    if (wasPhysicalAttack && player.PASSIVES && player.PASSIVES.includes('counter')) {
        const counterPassive = PASSIVE_SKILLS.counter;
        if (Math.random() < counterPassive.chance) {
            setTimeout(() => {
                showCombatText(player, 'COUNTER!', 'critical');
                const counterSkill = { power: counterPassive.power, type: 'physical', element: 'phys' };
                const counterResult = calculateDamage(player, enemy, counterSkill);
                enemy.HP -= counterResult.damage;
                if (enemy.HP <= 0) enemyDefeated();
                render();
            }, 500);
        }
    }

    if (player.HP <= 0) {
        player.HP = 0;
        render();
        document.getElementById('actions').innerHTML = `<h4>DEFEAT...</h4>`; 
        setTimeout(() => document.location.reload(), 2000); 
    } else {
        handleStartOfTurnPassives();
        render();
    }
}
// #endregion

// #region ------------------- GAME FLOW & PROGRESSION -------------------
function spawnEnemy() {
    let newEnemyTemplate;
    const nextKillNumber = state.totalKills + 1;

    if (nextKillNumber % 10 === 0) {
        newEnemyTemplate = BOSSES[Math.floor(Math.random() * BOSSES.length)];
    } else if (nextKillNumber % 5 === 0) {
        newEnemyTemplate = MINI_BOSSES[Math.floor(Math.random() * MINI_BOSSES.length)];
    } else {
        const enemyTier = Math.floor(state.totalKills / 10);
        const floorIndex = Math.min(enemyTier, FLOOR_ENCOUNTERS.length - 1);
        const availableEnemies = FLOOR_ENCOUNTERS[floorIndex];
        
        if (!availableEnemies || availableEnemies.length === 0) {
            const lastTier = FLOOR_ENCOUNTERS[FLOOR_ENCOUNTERS.length - 1];
            const chosenEnemyName = lastTier[Math.floor(Math.random() * lastTier.length)];
            newEnemyTemplate = DEMONS.find(demon => demon.name === chosenEnemyName);
        } else {
            const chosenEnemyName = availableEnemies[Math.floor(Math.random() * availableEnemies.length)];
            newEnemyTemplate = DEMONS.find(demon => demon.name === chosenEnemyName);
        }
    }
    
    const newEnemy = JSON.parse(JSON.stringify(newEnemyTemplate));
    newEnemy.maxHP = newEnemy.HP; 
    state.enemy = newEnemy;
}

function enemyDefeated(){
    if (state.enemy.isFinalBoss) {
        const actionsDiv = document.getElementById("actions");
        actionsDiv.innerHTML = "<h4>VICTORY!</h4><p>You have conquered the Abyss!</p><button onclick='document.location.reload()'>Play Again</button>";
        return;
    }

    const wasBoss = state.enemy.isBoss || state.enemy.isMiniBoss;
    state.totalKills++;
    state.xp += wasBoss ? 25 : 10;

    const xpToLevel = state.level * 20;
    if(state.xp >= xpToLevel){
        state.xp -= xpToLevel;
        state.level++;
        state.persona.maxHP += 5; 
        state.persona.maxSP += 2;
        state.persona.HP = state.persona.maxHP;
        state.persona.SP = state.persona.maxSP;
    }

    if (wasBoss) {
        if (Math.random() < 0.5) { 
            skillShuffleTime();
        } else {
            shuffleTime();
        }
    } else {
        shuffleTime();
    }
}

function floorTransition() {
    const actionsDiv = document.getElementById("actions");
    actionsDiv.innerHTML = `<h4>Floor ${state.currentFloor} Cleared!</h4><p>Preparing to advance.</p>`;
    
    setTimeout(() => {
        spawnEnemy();
        render();
    }, 3000);
}
// #endregion

// #region ------------------- REWARD SYSTEMS -------------------
function shuffleTime() {
    const actionsDiv = document.getElementById("actions");
    actionsDiv.innerHTML = "<h4>Shuffle Time! Choose your reward...</h4>";
    const shuffled = [...CARDS].sort(() => 0.5 - Math.random());
    const options = shuffled.slice(0, 3);
    
    options.forEach(card => {
        let btn = document.createElement("button");
        btn.innerHTML = `<strong>${card.name}</strong><br>${card.description}`;
        btn.onclick = () => {
            playSound('select');
            card.apply(state.persona);
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
    let skillOptions = [];

    player.ABILITY.forEach(skillKey => {
        const skill = SKILLS[skillKey];
        if (skill.evolves_to && SKILLS[skill.evolves_to]) {
            skillOptions.push({
                name: `Upgrade ${skill.name}`,
                description: `${skill.name} -> ${SKILLS[skill.evolves_to].name}`,
                apply: (persona) => {
                    const index = persona.ABILITY.indexOf(skillKey);
                    if (index > -1) persona.ABILITY[index] = skill.evolves_to;
                    spawnEnemy();
                    render();
                }
            });
        }
    });

    const learnableSkills = ['dia', 'garu', 'bufu', 'lunge', 'psi', 'kouha'];
    learnableSkills.forEach(skillKey => {
        if (!player.ABILITY.includes(skillKey)) {
            const skill = SKILLS[skillKey];
            skillOptions.push({
                name: `Learn ${skill.name}`,
                description: `Acquire the skill '${skill.name}'.`,
                apply: (persona) => {
                    if (persona.ABILITY.length < 6) {
                        persona.ABILITY.push(skillKey);
                        spawnEnemy();
                        render();
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
            const passive = PASSIVE_SKILLS[pKey];
            skillOptions.push({
                name: `Learn ${passive.name}`,
                description: passive.description,
                apply: (persona) => {
                    if (!persona.PASSIVES) persona.PASSIVES = [];
                    persona.PASSIVES.push(pKey);
                    if (passive.type === 'resistance') {
                        persona.affinities[passive.element] = passive.affinity;
                    }
                    spawnEnemy();
                    render();
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
        btn.onclick = () => card.apply(state.persona);
        actionsDiv.appendChild(btn);
    });
}

function promptSkillReplacement(newSkillKey) {
    const actionsDiv = document.getElementById("actions");
    const newSkill = SKILLS[newSkillKey];
    actionsDiv.innerHTML = `<h4>Your skill slots are full.</h4><p>Choose a skill to forget to learn <strong>${newSkill.name}</strong>.</p>`;

    state.persona.ABILITY.forEach((currentSkillKey, index) => {
        const currentSkill = SKILLS[currentSkillKey];
        const btn = document.createElement("button");
        btn.innerHTML = `Forget ${currentSkill.name}`;
        btn.onclick = () => {
            state.persona.ABILITY[index] = newSkillKey;
            spawnEnemy();
            render();
        };
        actionsDiv.appendChild(btn);
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel (Keep current skills)";
    cancelButton.onclick = () => {
        spawnEnemy();
        render();
    };
    actionsDiv.appendChild(cancelButton);
}
// #endregion

// #region ------------------- UTILITY & FEEDBACK -------------------
function showCombatText(target, text, className) {
    const feedbackDiv = (target === state.persona) ? document.getElementById('player-feedback') : document.getElementById('enemy-feedback');
    if (feedbackDiv) {
        feedbackDiv.textContent = text;
        feedbackDiv.className = `feedback-text ${className}`;
        feedbackDiv.classList.add('show');
        setTimeout(() => {
            feedbackDiv.classList.remove('show');
        }, 1000);
    }
}

function showAffinityFeedback(target, affinity) {
    showCombatText(target, affinity.toUpperCase() + "!", affinity);
}

function handleStartOfTurnPassives() {
    if (!state.persona.PASSIVES) return;

    state.persona.PASSIVES.forEach(pKey => {
        const passive = PASSIVE_SKILLS[pKey];
        if (passive && passive.type === 'regen') {
            if (passive.resource === 'HP') {
                const healAmount = Math.floor(state.persona.maxHP * passive.amount);
                state.persona.HP = Math.min(state.persona.maxHP, state.persona.HP + healAmount);
            }
            if (passive.resource === 'SP') {
                state.persona.SP = Math.min(state.persona.maxSP, state.persona.SP + passive.amount);
            }
        }
    });
}

function triggerScreenShake() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.classList.add('shake');
    setTimeout(() => gameContainer.classList.remove('shake'), 300);
}
// #endregion

// #region ------------------- SAVE & LOAD -------------------
function saveGame() {
    const saveFile = JSON.stringify(state);
    localStorage.setItem('personaSaveFile', saveFile);
    alert("Game Saved!");
}

function loadGame() {
    const savedState = localStorage.getItem('personaSaveFile');
    if (savedState) {
        state = JSON.parse(savedState);
        document.getElementById("start-screen").style.display = 'none';
        document.getElementById("game-screen").style.display = 'grid';
        render();
        alert("Game Loaded!");
    } else {
        alert("No save file found!");
    }
}

const SOUNDS = {
    hit: new Audio('./sfx/hit.mp3'),
    crit: new Audio('./sfx/crit.mp3'),
    heal: new Audio('./sfx/heal.mp3'),
    select: new Audio('./sfx/select.mp3'),
};
// #endregion

mainMenu();