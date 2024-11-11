const contacts = [
    { id: 1, name: "Alishba Fahim", gmail: "alishbafahim112@gmail.com" },
    { id: 1, name: "Hina Fahim", gmail: "hinafahim765@gmail.com" },
    { id: 2, name: "Tayyaba Fahim", gmail: "tayyabafahim@gmail.com" },
    { id: 2, name: "Sheraz Ahmed", gmail: "Sheraz12@gmail.com" },
    { id: 3, name: "Ayaz Ahmed", gmail: "pmayazahmed@gmail.com" },
];

function renderContacts(filteredContacts) {
    const contactList = document.getElementById("Contact-list");
    contactList.innerHTML = ""; 
    for (const contact of filteredContacts) {
        const contactDiv = document.createElement("div");
        contactDiv.className = "contact-item";
        contactDiv.innerHTML = `
            <b>${contact.name}</b>
            <p>${contact.gmail}</p>
        `;
        contactList.appendChild(contactDiv);
    }   
}

renderContacts(contacts);

const filterInput = document.getElementById("filter_input"); 
const filterButton = document.getElementById("filter-button"); 

filterButton.addEventListener("click", () => {
    const filterValue = filterInput.value.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue)
    );
    renderContacts(filteredContacts);
});
