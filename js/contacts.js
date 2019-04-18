/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme




// contact 

const contactList = [];

class Contact {

    constructor(lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;

    }

    toString() {
        return `Nom : ${this.lastName}, Prénom : ${this.firstName}`;
    }

}


function addContact() {

    const newContactLastName = prompt("Ajouter le nom de votre contact");
    const newContactFirstName = prompt("Ajouter le prénom de votre contact");
    return new Contact(newContactLastName, newContactFirstName);

}

function handleCommand(command) {

    switch (command) {
        case "1":
            displayContacts(contactList);
            break;
        case "2":
            const newContact = addContact();
            contactList.push(newContact);
            console.log("Nouveau contact ajouté :")
            displayContacts(contactList);
            break;
        case "h":
            displayInstructions();
            break;
        default:
            console.log("votre entrée n'est pas valide, merci de taper uniquement '1' '2' '3' ou 'h'");

    }

}

function displayInstructions() {
    console.log("Bienvenue dans le gestionnaire de contact");
    console.log("Tapez 1 pour afficher la liste des contacts");
    console.log("Tapez 2 pour créer un contact");
    console.log("tapez 3 pour quiter le gestionaire de contact");
    console.log("tapez h pour réafficher les instructions");

}


function displayContacts(contacts) {

    const displaycontacts = contacts.map(function (contact) { return contact.toString(); }).join("\n");

    console.log(displaycontacts);


}


function startApp() {

    // ajout de deux contacts dans la liste des  contact 

    contactList.push(new Contact("Lévisse", "Carole"));
    contactList.push(new Contact("Nelsonne", "Mélodie"));


    // message d'instruction et de bievenue de la console
    displayInstructions()

    while (true) {

        let command = prompt("Choisissez une option");

        if (["3", null].includes(command)) {
            break;
        }

        handleCommand(command);



    }


}

startApp();




