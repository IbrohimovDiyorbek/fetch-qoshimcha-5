fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(response => response.json())
    .then(date => createCards(date))
    .catch(error => console.error('Error fetching date:', error));
function createCards(users) {
    const container = document.getElementById('user-cards-container');

    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';

        const id = document.createElement('h2');
        id.textContent = user.id;
        
        const title = document.createElement('p');
        title.textContent = `Title: ${user.title}`;

        const body = document.createElement('p');
        body.textContent = `Complated: ${user.body}`;

        card.appendChild(id);
        card.appendChild(title);
        card.appendChild(body);

        container.appendChild(card);
    })
}   