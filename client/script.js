// URL till servern där användardata finns
const url = 'http://localhost:3000/users';

// Funktion för att hämta användare
async function fetchUsers() {
    try {
        // Skicka en begäran till servern
        const response = await fetch(url);

        // Om svaret inte är OK (status 200), kasta ett fel
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Omvandla svaret till JSON
        const users = await response.json();

        // Skriv ut användarna till konsolen
        console.log(users);
    } catch (error) {
        // Om något går fel, skriv ut felet till konsolen
        console.log('Det uppstod ett fel:', error);
    }
}

// Anropa funktionen för att hämta användare
fetchUsers();

// Funktion för att hämta och visa användare
async function fetchAndDisplayUsers() {
    try {
        // Skicka en begäran till servern
        const response = await fetch(url);

        // Om svaret inte är OK (status 200), kasta ett fel
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Omvandla svaret till JSON
        const users = await response.json();

        // Skapa ett nytt ul-element
        const ul = document.createElement('ul');

        // För varje användare, skapa ett li-element och lägg till det i ul-elementet
        users.forEach(user => {
            const li = document.createElement('li');

            // Sätt textinnehållet i li-elementet till användarens namn och användarnamn
            li.textContent = `${user.firstName} ${user.lastName} (${user.username})`;

            // Sätt bakgrundsfärgen på li-elementet till användarens favoritfärg
            li.style.backgroundColor = user.color;

            // Lägg till li-elementet i ul-elementet
            ul.appendChild(li);
        });

        // Lägg till ul-elementet i body-elementet
        document.body.appendChild(ul);
    } catch (error) {
        // Om något går fel, skriv ut felet till konsolen
        console.log('Det uppstod ett fel:', error);
    }
}

// Anropa funktionen för att hämta och visa användare
fetchAndDisplayUsers();
