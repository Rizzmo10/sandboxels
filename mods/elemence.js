elements.silicon = {
    color: "#67947d",
    behavior: behaviors.SUPPORT,
    category: "land",
    state: "solid",
    density: 2330,
    reactions: {
        "oxygen": { elem1: "sand" },
    },
};

elements.phosporous = {
    color: "#8a384b",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 2340,
    tempHigh: 44.1,
    stateHigh: "molten_glass",
};

elements.argon = {
    color: "#999999",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 1.78,
    tempLow: -189.4,
    stateLow: "liquid_argon",
};

elements.liquid_argon = {
    color: "#999999",
    behavior: behaviors.LIQUID,
    category: "states",
    viscosity: 0.0024,
    state: "liquid",
    density: 1.78,
    tempHigh: -189.4,
    stateHigh: "argon",
    hidden: true
};


//Eh, I'll add more later.//
