var savingThrows = [false, false, false, false, false, false];

// Consolidated database of all available options
var dnd = {
    dndSources: ["PHB", "XGTE", "TCOE"], //this will be an array of sourcebooks (PHB, XGTE, TCOE...)
    dndClassesPHB: ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", 
                "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"],
    dndClassesTCOE: ["Artificer"],
    dndClasses: [],
    dndRacesPHB: ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"],
    dndRaces: [], //append all the other sourcebook races to this array
    dndStats: [],
    dndAbilityScores: ["Strength", "Dexterity","Constitution", "Intelligence", "Wisdom", "Charisma"],
    dndStatIds: ["STR", "DEX", "CON", "INT", "WIS", "CHA"], // 6 stats
    dndStatsStandard: [15, 14, 13, 12, 10, 8],
    dndSaveIds: ["saveSTR", "saveDEX", "saveCON", "saveINT", "saveWIS", "saveCHA"],
    dndSkills: ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", 
                "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", 
                "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"], // 18 skills | official only
    //will need to pre-load skillIds in the future based on dndSkills.length
    dndSkillIds: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s14", "s15", "s16", "s17", "s18"],
    dndLanguages: ["Abyssal", "Celestial", "Common", "Deep Speech", "Draconic", "Druidic", "Dwarvish", "Elvish", "Giant",
                    "Gnomish", "Goblin", "Gnoll", "Halfling", "Infernal", "Orc", "Primordial", "Sylvan", "Undercommon"], // 18 languages | official only
    dndTools: []
} //END Libraries

var profile = {
    username: "",
    password: ""
}

// The character being generated
var character = {
    myName: "Coolio NoFoolio",
    myClass: "Earth",
    mySubclass: "Normie",
    myRace: "Homosapien",
    myMovement: 100,
    mySaves: null,
    mySkills: null,
    myExpertise: null,
    myAdv: null,

    myTotalLevel: 100,

    myStats: [100, 100, 100, 100, 100, 100],
    myHP: 1000000000,
    myInit: 100,

    myWeapons: null,
    myArmor: null,
    myLanguages: null,
    myTools: null,

    myFeats: null
}

// Barbarian Class
var barbarian = {
    mySaves: null, //STR and CON saves
    subclassPHB: ["Path of the Berserker", "Path of the Totem Warrior"],
    mySkillsOptions: [],
    myExpertiseOptions: null
}

//begins the program
function init(){
    compileLibraries(); //this function will be moved after a future feature
    filterOptions(); //this function will be moved after a future feature
    generateOptions(dnd.dndRaces, "race");
    generateOptions(dnd.dndClasses, "class");

    //generates stats in their respective dropdown bars
    for(var i = 0; i < dnd.dndStatIds.length; i++){
        generateOptions(dnd.dndStats, dnd.dndStatIds[i]);
    }
    generateCheckboxes(dnd.dndAbilityScores, "saves", dnd.dndSaveIds);
    generateCheckboxes(dnd.dndSkills, "skills", dnd.dndSkillIds);
}



//start program
init();

// function that concats arrays of all sourcebooks into a single array
// function also organizes each library's contents alphabetically
function compileLibraries(){
    dnd.dndClasses = dnd.dndClassesTCOE.concat(dnd.dndClassesPHB);
    dnd.dndClasses.sort();
    dnd.dndRaces = dnd.dndRacesPHB;
    dnd.dndRaces.sort();
    dnd.dndStats = dnd.dndStatsStandard;
    dnd.dndStats.sort();
}


// creates a dropdown menu and a label element for the select element based on parameters
// parameters: array, id string of element to generate options for a dropdown menu
function generateOptions(options, parentId){
    var generateOptions = []; //variable for HTML option elements
    
    for (var i = 0; i < options.length; i++){
        //create elements into the array
        generateOptions.push(document.createElement("option"));

        //put elements on the page
        document.getElementById(parentId).appendChild(generateOptions[i]);

        //fill the elements with text
        generateOptions[i].textContent = options[i];
    }
}

//generates checkboxes to the UI
//generateCheckboxes(Array of label text, String id of parent element, Array of ids to associate to labels)
function generateCheckboxes(checkboxes, parentId, childIds){
    var generateCheckboxes = []; //array of input elements
    var parentElement = document.getElementById(parentId);
    
    for(var i = 0; i < checkboxes.length; i++){
        generateCheckboxes.push(document.createElement("input"));
        generateCheckboxes[i].setAttribute("type", "checkbox");
        generateCheckboxes[i].setAttribute("id", childIds[i]);
        parentElement.appendChild(generateCheckboxes[i]);
        generateCheckboxes[i].textContent = checkboxes[i];

        generateLabels(checkboxes, parentId, childIds, i);
        parentElement.appendChild(document.createElement("br"));
    }
    //get div element containing our inputs
    //create elements into an array
    //for loop to populate UI
}

function generateLabels(labels, parentId, childIds, i){
    var generateLabels = document.createElement("label");
    var parentElement = document.getElementById(parentId);

    generateLabels.setAttribute("for", childIds[i]);
    parentElement.appendChild(generateLabels);
    generateLabels.textContent = labels[i];
}

function dndCheckClass(){
    //if I select a class
    //the subclasses label and its respective dropdown menu will populate the screen
}


//this function will create arrays based on user-input filters
function filterOptions(){

}


function calcAbilityScore(stat){
    return Math.floor((stat-10)/2);
}

function calcProficiencyBonus(){
    return Math.floor(((character.myTotalLevel - 10)/2)+1);
}

// function calcArmorClass(){

// }


// function saveProfile(){

// }


// function loadProfile(){

// }



// ===== CODE GRAVEYARD =====

/* 
    ORIGIN: generateOptions();
    USE: HTML Label and Select generator based on passed params

    var idFirstLetter = id.charAt(0).toUpperCase();
    var section = document.getElementById("character-info");
    var select = document.createElement("select");

    //creates a label in the HTML and displays it for the user with the appropriate text
    label.setAttribute("for", id);
    section.appendChild(label);
    label.textContent = idUpperCase;

    //append to element form (section variable) with id character-info
    select.setAttribute("id", id);
    section.appendChild(select);

*/// ===== END Labels and Select generator =====