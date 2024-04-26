function addNewFunc(){
    const firstName = ["Adel", "Mario", "Cain", "Abraham", "Bela"];
    const rFirstName = firstName[Math.floor(Math.random() * firstName.length)];
    
    const lastName = ["Farkas", "Houston", "Gallagar", "Winston", "Schwarzwald"];
    const rLastName = lastName[Math.floor(Math.random() * lastName.length)];
    
    const age = ["18", "22", "25"];
    const rAge = age[Math.floor(Math.random() * age.length)];
    
    const gefuhle = ["glücklich", "traurig", "aufgeregt", "ängstlich", "zufrieden"];
    const rGefuhle = gefuhle[Math.floor(Math.random() * gefuhle.legth)];
    
    
    const insertObj = `<div class="dataHolder">First Name: ${rFirstName}<br>Last Name: ${rLastName}<br>Age: ${rAge}</div>`;
    
    const cardHolder= document.getElementById("cardHolder");
    cardHolder.innerHTML += insertObj;
}

