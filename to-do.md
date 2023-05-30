Current Main Objective: 
- structuring how the data will be stored


Functionality
- Receive user input
    - name = textbox 
    - race = dropdown menu
    - class = dropdown menu
    - level = number box
    - subclass = dropdown menu | based on class selection
        - [[ FUTURE ]]: appears when level appropriate
    - skills = checkboxes
        - toggle for expertise
            - [[ FUTURE ]] '*' will appear next to skill
        - toggle for advantage
            - an 'adv' or 'a' will appear next to skill
    - stats = number box
        - [[ FUTURE ]] modes: manual, standard array, point buy
    - [[ FUTURE ]] feats = dropdown menu
        - feats based on race, level, and class ASI
    - [[ FUTURE ]] spells = dropdown menu
        - spells based on class
        - later functionality will pull spells from races, feats, etc
- Store user input on local storage
    - allow different user profiles
        - store these user profiles on an array
        - allow new profiles to be added to the array
        - allow slicing of unwanted profiles on the array

        