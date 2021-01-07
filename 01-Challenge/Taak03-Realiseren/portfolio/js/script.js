
        
let persoon = {
    voornaam : prompt("Wat is je naam?"),
    achternaam : prompt("Wat is je achternaam?"),
    leeftijd : prompt("Wat is je leeftijd?"),
    woonplaats: prompt("waar is je woonplaats?")
};

let menu = {
    about : "menu-item",
    projects : "menu-item",
    interests : "menu-item",
    contact: "menu-item",
    
    select(S) {
    this.about="menu-item";
    this.projects="menu-item";
    this.interests="menu-item";
    this.contact="menu-item";
    
    if(S="about")this.about="menu-item-selected";
    if(S="projects")this.about="menu-item-selected";
    if(S="interests")this.about="menu-item-selected";
    if(S="contact")this.about="menu-item-selected";
    }

    
};


