// #region ------------------- GAME DATA -------------------
// Persona
const PERSONAS = {
    Orpheus: {
        HP: 70, SP: 30,
        STATS:{STR: 5, MAG:3, END: 4, AGI: 5, LUK: 3},
        ABILITY:["bash", "agi"],
        img:"https://i.imgur.com/83Fpq5u.png",
        affinities: { elec: 'weak', fire: 'resist' }
    },
    Izanagi: {
        HP: 80, SP: 25,
        STATS:{STR: 6, MAG:2, END: 5, AGI: 4, LUK: 3},
        ABILITY:["bash", "zio", "garu"],
        img:"https://i.imgur.com/11n2k5b.png",
        affinities: { wind: 'weak', elec: 'resist' }
    },
    Arsene: {
        HP: 65, SP: 35,
        STATS:{STR: 4, MAG:4, END: 3, AGI: 6, LUK: 5},
        ABILITY:["bash", "bufu"],
        img:"https://i.imgur.com/K33t636.png",
        affinities: { ice: 'weak', phys: 'resist' }
    }
};

// Demon
const DEMONS = [
    // --- Early Game Demons (Floors 1-4) ---
    {
        name:"Pixie", HP: 30, maxHP: 30, SP: 20,
        STATS:{STR: 3, MAG: 5, END: 2, AGI: 6, LUK: 4},
        ABILITY:["zio", "dia"], img:"https://i.imgur.com/FGfb3s7.png",
        affinities: { phys: 'weak', elec: 'resist', wind: 'weak' }
    },
    {
        name:"Slime", HP: 60, maxHP: 60, SP: 10,
        STATS:{STR: 6, MAG: 2, END: 8, AGI: 2, LUK: 2},
        ABILITY:["lunge"], img:"https://i.imgur.com/034q32u.png",
        affinities: { phys: 'resist', fire: 'weak', elec: 'weak' }
    },
    {
        name:"Goblin", HP: 45, maxHP: 45, SP: 15,
        STATS:{STR: 7, MAG: 2, END: 5, AGI: 4, LUK: 3},
        ABILITY:["lunge"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { wind: 'weak', fire: 'resist' }
    },
    {
        name:"Mandrake", HP: 40, maxHP: 40, SP: 22,
        STATS:{STR: 2, MAG: 8, END: 3, AGI: 5, LUK: 7},
        ABILITY:["eiha"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { fire: 'weak', elec: 'resist' }
    },
    {
        name:"Agathion", HP: 50, maxHP: 50, SP: 25,
        STATS:{STR: 5, MAG: 6, END: 5, AGI: 7, LUK: 5},
        ABILITY:["zio", "lunge"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { wind: 'weak', elec: 'resist', dark: 'resist' }
    },
    {
        name:"Bicorn", HP: 55, maxHP: 55, SP: 18,
        STATS:{STR: 8, MAG: 3, END: 6, AGI: 6, LUK: 3},
        ABILITY:["lunge", "garu"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { elec: 'weak', dark: 'null' }
    },
    {
        name:"Angel", HP: 60, maxHP: 60, SP: 35,
        STATS:{STR: 5, MAG: 9, END: 6, AGI: 8, LUK: 6},
        ABILITY:["kouha", "garu", "dia"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { dark: 'weak', light: 'null', elec: 'weak' }
    },
    {
        name:"Jack Frost", HP: 70, maxHP: 70, SP: 40,
        STATS:{STR: 6, MAG: 11, END: 7, AGI: 9, LUK: 8},
        ABILITY:["bufu", "bufula"], img:"https://i.imgur.com/AptB9Zl.png",
        affinities: { fire: 'weak', ice: 'null' }
    },

    // --- Mid-Game Demons (Floors 6-9) ---
    {
        name:"Pyro Jack", HP: 75, maxHP: 75, SP: 45,
        STATS:{STR: 5, MAG: 12, END: 6, AGI: 10, LUK: 9},
        ABILITY:["agi", "agilao"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { ice: 'weak', fire: 'null' }
    },
    {
        name:"Nekomata", HP: 80, maxHP: 80, SP: 35,
        STATS:{STR: 9, MAG: 7, END: 7, AGI: 14, LUK: 10},
        ABILITY:["power_slash", "garula"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { elec: 'weak', psy: 'resist' }
    },
    {
        name:"Orthrus", HP: 90, maxHP: 90, SP: 40,
        STATS:{STR: 12, MAG: 8, END: 9, AGI: 11, LUK: 5},
        ABILITY:["agilao", "assault_dive"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { ice: 'weak', fire: 'resist' }
    },
    {
        name:"Valkyrie", HP: 100, maxHP: 100, SP: 45,
        STATS:{STR: 14, MAG: 9, END: 10, AGI: 12, LUK: 8},
        ABILITY:["power_slash", "bufula"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { fire: 'weak', ice: 'resist', light: 'null' }
    },
    {
        name:"Leanan Sídhe", HP: 85, maxHP: 85, SP: 60,
        STATS:{STR: 7, MAG: 15, END: 8, AGI: 11, LUK: 12},
        ABILITY:["psio", "diarama"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { nuke: 'weak', psy: 'resist' }
    },
    {
        name:"Rakshasa", HP: 110, maxHP: 110, SP: 30,
        STATS:{STR: 16, MAG: 5, END: 12, AGI: 10, LUK: 6},
        ABILITY:["megaton_raid"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { light: 'weak', phys: 'resist', dark: 'null' }
    },
    {
        name:"Queen Mab", HP: 130, maxHP: 130, SP: 90,
        STATS:{STR: 10, MAG: 18, END: 11, AGI: 15, LUK: 13},
        ABILITY:["agidyne"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { nuke: 'weak', fire: 'null', elec: 'resist' }
    },
    {
        name:"Rangda", HP: 150, maxHP: 150, SP: 85,
        STATS:{STR: 12, MAG: 16, END: 13, AGI: 17, LUK: 11},
        ABILITY:["agidyne", "eigaon"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { elec: 'weak', light: 'weak', phys: 'resist', fire: 'resist' }
    },

    // --- Late-Game Demons (Floor 10) ---
    {
        name:"Throne", HP: 160, maxHP: 160, SP: 100,
        STATS:{STR: 13, MAG: 19, END: 14, AGI: 13, LUK: 12},
        ABILITY:["agidyne", "kougaon"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { dark: 'weak', fire: 'null', light: 'null', nuke: 'resist' }
    },
    {
        name:"Barong", HP: 175, maxHP: 175, SP: 95,
        STATS:{STR: 18, MAG: 14, END: 15, AGI: 16, LUK: 10},
        ABILITY:["ziodyne", "megaton_raid"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { psy: 'weak', elec: 'null', phys: 'resist' }
    },
    {
        name:"Abaddon", HP: 200, maxHP: 200, SP: 110,
        STATS:{STR: 20, MAG: 15, END: 18, AGI: 12, LUK: 8},
        ABILITY:["gigantic_fist", "megido"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { nuke: 'weak', phys: 'resist', fire: 'resist', dark: 'resist' }
    },
    {
        name:"Anubis", HP: 140, maxHP: 140, SP: 130,
        STATS:{STR: 11, MAG: 20, END: 12, AGI: 15, LUK: 16},
        ABILITY:["kougaon", "eigaon", "megido"], img:"https://i.imgur.com/jI9a614.png", // Placeholder image
        affinities: { light: 'null', dark: 'null' }
    }
];

// Mini Bosses
const MINI_BOSSES = [
    // #region --- Brute Force Testers ---
    {
        name:"Rampaging Oni", HP: 120, maxHP: 120, SP: 30,
        STATS:{STR: 15, MAG: 5, END: 12, AGI: 7, LUK: 5},
        ABILITY:["assault_dive", "power_slash"], img:"https://i.imgur.com/jI9a614.png", // Placeholder
        affinities: { phys: 'resist', fire: 'resist', elec: 'weak' },
        isMiniBoss: true,
        description: "A physical wall that forces you to use magic." // Gimmick description
    },
    {
        name:"Setanta", HP: 85, maxHP: 85, SP: 40,
        STATS:{STR: 13, MAG: 8, END: 7, AGI: 15, LUK: 12},
        ABILITY:["power_slash", "lunge"], img:"https://i.imgur.com/jI9a614.png", // Placeholder
        affinities: { psy: 'weak', wind: 'resist', fire: 'null' },
        isMiniBoss: true,
        description: "A high-crit attacker that is hard to hit."
    },
    // #endregion

    // #region --- Magic Specialist Testers ---
    {
        name:"Incubus", HP: 90, maxHP: 90, SP: 70,
        STATS:{STR: 6, MAG: 14, END: 7, AGI: 11, LUK: 10},
        ABILITY:["agilao", "eigaon"], img:"https://i.imgur.com/jI9a614.png", // Placeholder
        affinities: { phys: 'weak', fire: 'null', dark: 'resist', ice: 'weak' },
        isMiniBoss: true,
        description: "A glass cannon that hits hard with magic but is weak to physical attacks."
    },
    {
        name:"High Pixie", HP: 90, maxHP: 90, SP: 65,
        STATS:{STR: 6, MAG: 13, END: 7, AGI: 12, LUK: 10},
        ABILITY:["zionga", "diarama"], img:"https://i.imgur.com/jI9a614.png", // Placeholder
        affinities: { nuke: 'weak', wind: 'resist', elec: 'resist' },
        isMiniBoss: true,
        description: "A durable magic user that can heal itself."
    },
    // #endregion

    // #region --- Strategic Challenge Testers ---
    {
        name:"Principality", HP: 110, maxHP: 110, SP: 80,
        STATS:{STR: 9, MAG: 12, END: 9, AGI: 9, LUK: 9},
        ABILITY:["kougaon", "diarama"], img:"https://i.imgur.com/jI9a614.png", // Placeholder
        affinities: { dark: 'weak', light: 'null', wind: 'resist' },
        isMiniBoss: true,
        description: "A battle of attrition that tests your damage output against its healing."
    },
    {
        name:"Kaiwan", HP: 130, maxHP: 130, SP: 60,
        STATS:{STR: 10, MAG: 11, END: 11, AGI: 10, LUK: 8},
        ABILITY:["agilao", "psio", "garula"], img:"https://i.imgur.com/jI9a614.png", // Placeholder
        affinities: { phys: 'weak', psy: 'resist', nuke: 'resist' },
        isMiniBoss: true,
        description: "An all-rounder with multiple resistances, forcing you to find an opening."
    },
    {
        name:"Naga", HP: 95, maxHP: 95, SP: 55,
        STATS:{STR: 9, MAG: 13, END: 8, AGI: 13, LUK: 7},
        ABILITY:["zionga", "lunge"], img:"https://i.imgur.com/jI9a614.png", // Placeholder
        affinities: { wind: 'weak', elec: 'null' },
        isMiniBoss: true,
        description: "An elemental specialist that punishes those with an electric weakness."
    }
    // #endregion
];

// Bosses
const BOSSES = [
    // The All-Out Attacker
    {
        name:"Cerberus", HP: 240, maxHP: 240, SP: 80,
        STATS:{STR: 22, MAG: 8, END: 15, AGI: 14, LUK: 7},
        ABILITY:["gigantic_fist", "brave_blade"], img:"https://i.imgur.com/jI9a614.png", // Placeholder
        affinities: { ice: 'weak', fire: 'null' },
        isBoss: true,
        description: "A relentless physical attacker that tests your endurance and physical defense."
    },
    // The Unbreakable Wall
    {
        name:"Girimehkala", HP: 250, maxHP: 250, SP: 120,
        STATS:{STR: 14, MAG: 16, END: 20, AGI: 8, LUK: 9},
        ABILITY:["megaton_raid", "eigadyne"], img:"https://i.imgur.com/jI9a614.png", // Placeholder
        affinities: { phys: 'null', dark: 'resist', light: 'weak', nuke: 'weak' },
        isBoss: true,
        description: "A defensive fortress that nullifies all physical attacks, forcing a magic-based strategy."
    },
    // The Master Spellcaster
    {
        name:"Belphegor", HP: 220, maxHP: 220, SP: 150,
        STATS:{STR: 10, MAG: 20, END: 14, AGI: 12, LUK: 11},
        ABILITY:["agidyne", "bufudyne"], img:"https://i.imgur.com/jI9a614.png", // Placeholder
        affinities: { fire: 'resist', ice: 'null', elec: 'weak' },
        isBoss: true,
        description: "A powerful mage that barrages you with high-tier elemental spells."
    },
    // The All-Rounder
    {
        name:"Odin", HP: 260, maxHP: 260, SP: 140,
        STATS:{STR: 18, MAG: 18, END: 17, AGI: 16, LUK: 14},
        ABILITY:["ziodyne", "brave_blade"], img:"https://i.imgur.com/jI9a614.png", // Placeholder
        affinities: { wind: 'weak', elec: 'null', light: 'resist' },
        isBoss: true,
        description: "A balanced master of both physical and magical combat with no obvious flaws."
    },
    // The Gimmick Boss
    {
        name:"Trumpeter", HP: 280, maxHP: 280, SP: 200,
        STATS:{STR: 15, MAG: 18, END: 16, AGI: 15, LUK: 15},
        ABILITY:["megidola", "diarahan"], img:"https://i.imgur.com/jI9a614.png", // Placeholder
        affinities: { elec: 'weak', light: 'null', dark: 'null' },
        isBoss: true,
        description: "A strategic nightmare that can fully heal itself and uses Almighty damage that cannot be resisted."
    }
];

// Final Boss
const FINAL_BOSS = {
    name:"Archon of the Abyss", HP: 300, maxHP: 300, SP: 150,
    STATS:{STR: 15, MAG:15, END: 15, AGI: 10, LUK: 10},
    ABILITY:["agilao", "zionga", "bufudyne"], img:"https://i.imgur.com/83Fpq5u.png",
    affinities: { },
    isFinalBoss: true
};

const FLOOR_ENCOUNTERS = [
    // Floor 1
    ['Pixie', 'Goblin'],
    // Floor 2
    ['Slime', 'Mandrake'],
    // Floor 3
    ['Agathion', 'Bicorn'],
    // Floor 4
    ['Angel', 'Jack Frost'],
    // Floor 5 is a Mini-Boss
    [], 
    // Floor 6
    ['Pyro Jack', 'Nekomata'],
    // Floor 7
    ['Orthrus', 'Valkyrie'],
    // Floor 8
    ['Leanan Sídhe', 'Rakshasa'],
    // Floor 9
    ['Queen Mab', 'Rangda'],
    // Floor 10 has the strongest regular demons before the boss
    ['Throne', 'Barong', 'Abaddon', 'Anubis']
];

// Skill
const SKILLS = {
    // #region --- Physical Skills ---
    // Tier 1: Light Damage
    lunge: { name: "Lunge", cost: { hp: 5 }, power: 13, type: "physical", element: "phys", evolves_to: "assault_dive" },
    bash:   { name: "Bash", cost: { hp: 8 }, power: 10, type: "physical", element: "phys", evolves_to: "power_slash" },
    
    // Tier 2: Medium Damage
    assault_dive: { name: "Assault Dive", cost: { hp: 14 }, power: 22, type: "physical", element: "phys", evolves_to: "megaton_raid" },
    power_slash:  { name: "Power Slash", cost: { hp: 18 }, power: 30, type: "physical", element: "phys", evolves_to: "gigantic_fist" },

    // Tier 3: Heavy Damage
    megaton_raid:  { name: "Megaton Raid", cost: { hp: 20 }, power: 40, type: "physical", element: "phys", evolves_to: "gods_hand" },
    gigantic_fist: { name: "Gigantic Fist", cost: { hp: 25 }, power: 45, type: "physical", element: "phys", evolves_to: "brave_blade" },

    // Tier 4: Severe Damage
    gods_hand:    { name: "God's Hand", cost: { hp: 30 }, power: 80, type: "physical", element: "phys" },
    brave_blade:  { name: "Brave Blade", cost: { hp: 32 }, power: 85, type: "physical", element: "phys" },
    primal_force: { name: "Primal Force", cost: { hp: 35 }, power: 100, type: "physical", element: "phys" },
    // #endregion

    // #region --- Elemental & Other Magic Skills ---
    // Fire
    agi:    { name: "Agi", cost: { sp: 4 }, power: 12, type: "magic", element: "fire", evolves_to: "agilao" },
    agilao: { name: "Agilao", cost: { sp: 8 }, power: 25, type: "magic", element: "fire", evolves_to: "agidyne" },
    agidyne:{ name: "Agidyne", cost: { sp: 16 }, power: 50, type: "magic", element: "fire", evolves_to: "inferno" },
    inferno:{ name: "Inferno", cost: { sp: 28 }, power: 90, type: "magic", element: "fire" },

    // Ice
    bufu:   { name: "Bufu", cost: { sp: 4 }, power: 12, type: "magic", element: "ice", evolves_to: "bufula" },
    bufula: { name: "Bufula", cost: { sp: 8 }, power: 25, type: "magic", element: "ice", evolves_to: "bufudyne" },
    bufudyne:{ name: "Bufudyne", cost: { sp: 16 }, power: 50, type: "magic", element: "ice", evolves_to: "diamond_dust" },
    diamond_dust: { name: "Diamond Dust", cost: { sp: 28 }, power: 90, type: "magic", element: "ice" },

    // Electric
    zio:    { name: "Zio", cost: { sp: 4 }, power: 12, type: "magic", element: "elec", evolves_to: "zionga" },
    zionga: { name: "Zionga", cost: { sp: 8 }, power: 25, type: "magic", element: "elec", evolves_to: "ziodyne" },
    ziodyne:{ name: "Ziodyne", cost: { sp: 16 }, power: 50, type: "magic", element: "elec", evolves_to: "thunder_reign" },
    thunder_reign: { name: "Thunder Reign", cost: { sp: 28 }, power: 90, type: "magic", element: "elec" },

    // Wind
    garu:   { name: "Garu", cost: { sp: 4 }, power: 12, type: "magic", element: "wind", evolves_to: "garula" },
    garula: { name: "Garula", cost: { sp: 8 }, power: 25, type: "magic", element: "wind", evolves_to: "garudyne" },
    garudyne:{ name: "Garudyne", cost: { sp: 16 }, power: 50, type: "magic", element: "wind", evolves_to: "panta_rhei" },
    panta_rhei: { name: "Panta Rhei", cost: { sp: 28 }, power: 90, type: "magic", element: "wind" },

    // Psy
    psi:    { name: "Psi", cost: { sp: 5 }, power: 14, type: "magic", element: "psy", evolves_to: "psio" },
    psio:   { name: "Psio", cost: { sp: 10 }, power: 28, type: "magic", element: "psy", evolves_to: "psiodyne" },
    psiodyne:{ name: "Psiodyne", cost: { sp: 18 }, power: 55, type: "magic", element: "psy" },

    // Nuke
    frei:    { name: "Frei", cost: { sp: 5 }, power: 14, type: "magic", element: "nuke", evolves_to: "freila" },
    freila:  { name: "Freila", cost: { sp: 10 }, power: 28, type: "magic", element: "nuke", evolves_to: "freidyne" },
    freidyne:{ name: "Freidyne", cost: { sp: 18 }, power: 55, type: "magic", element: "nuke" },

    // Light
    kouha:    { name: "Kouha", cost: { sp: 5 }, power: 14, type: "magic", element: "light", evolves_to: "kouga" },
    kouga:    { name: "Kouga", cost: { sp: 10 }, power: 28, type: "magic", element: "light", evolves_to: "kougaon" },
    kougaon:  { name: "Kougaon", cost: { sp: 18 }, power: 55, type: "magic", element: "light" },

    // Dark
    eiha:    { name: "Eiha", cost: { sp: 5 }, power: 14, type: "magic", element: "dark", evolves_to: "eigaon" },
    eigaon:  { name: "Eigaon", cost: { sp: 10 }, power: 28, type: "magic", element: "dark", evolves_to: "eigadyne" },
    eigadyne:{ name: "Eigadyne", cost: { sp: 18 }, power: 55, type: "magic", element: "dark" },

    // Almighty
    megido:    { name: "Megido", cost: { sp: 15 }, power: 35, type: "magic", element: "almighty", evolves_to: "megidola" },
    megidola:  { name: "Megidola", cost: { sp: 24 }, power: 55, type: "magic", element: "almighty", evolves_to: "megidolaon" },
    megidolaon:{ name: "Megidolaon", cost: { sp: 38 }, power: 80, type: "magic", element: "almighty" },
    morning_star: { name: "Morning Star", cost: { sp: 54 }, power: 120, type: "magic", element: "almighty" },
    // #endregion

    // #region --- Healing Skills ---
    dia:      { name: "Dia", cost: { sp: 6 }, power: 30, type: "healing", element: "heal", evolves_to: "diarama" },
    diarama:  { name: "Diarama", cost: { sp: 12 }, power: 70, type: "healing", element: "heal", evolves_to: "diarahan" },
    diarahan: { name: "Diarahan", cost: { sp: 24 }, power: 999, type: "healing", element: "heal" }, // power: 999 for full heal
    // #endregion
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

    // --- Resource & Healing Cards ---
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

    // --- Special Effect Cards ---
    {
        name: "X. Wheel of Fortune",
        description: "+3 to a random stat.",
        apply: function(persona) {
            const stats = ["STR", "MAG", "END", "AGI", "LUK"];
            const randomStat = stats[Math.floor(Math.random() * stats.length)];
            persona.STATS[randomStat] += 3;
        }
    },
    {   // MODIFIED CARD
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
    currentFloor: 1,
    totalFloors: 10,
    enemiesDefeated: 0,
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
        floorCounterDiv.innerHTML = `Floor: ${state.currentFloor > state.totalFloors ? 'Final Encounter' : `${state.currentFloor} / ${state.totalFloors}`}`;
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

    let bonusTurn = false; // Flag for "1 More!"

    // Check for Critical Hit
    const critChance = 0.05 + (attacker.STATS.LUK * 0.0075);
    const isCrit = Math.random() < critChance;
    if (isCrit) {
        bonusTurn = true;
    }

    // Check for elemental affinity
    const affinity = target.affinities[skill.element];
    let affinityMultiplier = 1.0;
    if (affinity) {
        showAffinityFeedback(target, affinity);
        if (affinity === 'weak') {
            affinityMultiplier = 1.5;
            bonusTurn = true; // Hitting a weakness also grants a bonus turn
        }
        if (affinity === 'resist') affinityMultiplier = 0.5;
        if (affinity === 'null') {
            affinityMultiplier = 0;
            bonusTurn = false; // Cannot get a bonus turn on a null
        }
    }
    
    const totalDamage = baseDamage - target.STATS.END;
    let finalDamage = Math.floor(Math.max(1, totalDamage) * affinityMultiplier);

    // Apply critical damage and show text if it's a crit (and not nullified)
    if (isCrit && affinity !== 'null') {
        finalDamage = Math.floor(finalDamage * 1.5);
        showCombatText(target, "CRITICAL!", 'critical');
    }
    if (finalDamage > 0) {
        // We add a short delay so it appears *after* WEAK/RESIST text
        setTimeout(() => {
            showCombatText(target, finalDamage, 'damage');
        }, 150);
    }

    // Return an object with both damage and bonus status
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
        showCombatText(state.persona, "1 MORE!", "critical"); // Show "1 More!" feedback
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

    const dodgeChance = (player.STATS.AGI * 0.02) + (player.STATS.LUK * 0.01);
    if (Math.random() < dodgeChance) {
        showCombatText(player, "EVADED!", 'resist');
        return; // Attack is dodged, skip the rest of the enemy's turn.
    }

    const availableSkills = enemy.ABILITY;
    const chosenSkillKey = availableSkills[Math.floor(Math.random() * availableSkills.length)];
    const skill = SKILLS[chosenSkillKey];
    
    // --- FIX IS HERE ---
    if (skill && enemy.SP >= skill.cost.sp && Math.random() < 0.5) {
        enemy.SP -= skill.cost.sp;
        const result = calculateDamage(enemy, player, skill); // Get the result object
        player.HP -= result.damage; // Use the .damage property
    } else {
        const attackSkill = { power: 0, type: 'physical', element: 'phys' };
        const result = calculateDamage(enemy, player, attackSkill); // Get the result object
        player.HP -= result.damage; // Use the .damage property
    }

    if (player.HP <= 0) {
        player.HP = 0;
        render();
        // Display defeat message in the actions div
        document.getElementById('actions').innerHTML = `<h4>DEFEAT...</h4>`; 
        setTimeout(() => document.location.reload(), 2000); 
    }
}
// #endregion

// #region ------------------- GAME FLOW & PROGRESSION -------------------
function spawnEnemy() {
    let newEnemyTemplate;
    const nextEnemyNumber = state.enemiesDefeated + 1;

    // Is it time for the final boss?
    if (state.currentFloor > state.totalFloors) {
        newEnemyTemplate = FINAL_BOSS;
    }
    // Is it time for a major floor boss? (Floor 10 clear)
    else if (state.currentFloor % 10 === 0 && nextEnemyNumber % 10 === 0) {
        newEnemyTemplate = BOSSES[Math.floor(Math.random() * BOSSES.length)];
    }
    // Is it time for a mini-boss? (Floor 5 clear)
    else if (state.currentFloor % 5 === 0 && nextEnemyNumber % 5 === 0) {
        newEnemyTemplate = MINI_BOSSES[Math.floor(Math.random() * MINI_BOSSES.length)];
    }
    // Otherwise, spawn a regular demon based on the current floor.
    else {
        // Get the list of enemy names for the current floor.
        const floorIndex = state.currentFloor - 1;
        const availableEnemies = FLOOR_ENCOUNTERS[floorIndex];
        
        // Pick a random name from that list.
        const chosenEnemyName = availableEnemies[Math.floor(Math.random() * availableEnemies.length)];
        
        // Find the full demon object from the DEMONS array using the chosen name.
        newEnemyTemplate = DEMONS.find(demon => demon.name === chosenEnemyName);
    }
    
    // Create a deep copy of the chosen enemy template to avoid modifying the original data.
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
    state.enemiesDefeated++;
    if (state.enemy.isBoss) {
        state.currentFloor++;
        floorTransition();
        return;
    }
    state.xp += state.enemy.isMiniBoss ? 25 : 10;
    if(state.xp >= state.level * 20){
        state.level++;
        state.persona.maxHP += 5; 
        state.persona.maxSP += 2;
    }

    if (Math.random() < 0.25) {
        skillShuffleTime();
    } else {
        shuffleTime();
    }
}

function floorTransition() {
    const actionsDiv = document.getElementById("actions");
    actionsDiv.innerHTML = `<h4>Floor ${state.currentFloor - 1} Cleared!</h4><p>Preparing to advance.</p>`;
    
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
            card.apply(state.persona);
            spawnEnemy();              
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
            const newSkill = SKILLS[skill.evolves_to];
            skillOptions.push({
                name: `Upgrade ${skill.name}`,
                description: `${skill.name} -> ${newSkill.name}`,
                apply: (persona) => {
                    const index = persona.ABILITY.indexOf(skillKey);
                    if (index > -1) {
                        persona.ABILITY[index] = skill.evolves_to;
                    }
                }
            });
        }
    });

    const learnableSkills = ['dia', 'garu', 'bufu'];
    learnableSkills.forEach(skillKey => {
        if (!player.ABILITY.includes(skillKey)) {
            const skill = SKILLS[skillKey];
            skillOptions.push({
                name: `Learn ${skill.name}`,
                description: `Acquire the skill '${skill.name}'.`,
                apply: (persona) => {
                    if (persona.ABILITY.length < 6) {
                        persona.ABILITY.push(skillKey);
                    }
                }
            });
        }
    });

    const shuffledOptions = skillOptions.sort(() => 0.5 - Math.random()).slice(0, 3);
    shuffledOptions.forEach(card => {
        let btn = document.createElement("button");
        btn.innerHTML = `<strong>${card.name}</strong><br>${card.description}`;
        btn.onclick = () => {
            card.apply(state.persona);
            spawnEnemy();              
            render();                  
        };
        actionsDiv.appendChild(btn);
    });
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
// #endregion

// --- Game Start ---
mainMenu();