document.addEventListener('DOMContentLoaded', function() {
    // Define the array of author data
    const authors = [
        {
            imgSrc: "assets/img/jarbas.png",
            title: "Jarbas Martins",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati maxime repellat consectetur aperiam porro suscipit nulla placeat vero eius sed perferendis, unde nesciunt voluptates aliquam dolorum sapiente autem quas molestiae?",
            price: "R$ 35,00"
        },
        
        {
            imgSrc: "assets/img/jarbas.png",
            title: "Jarbas Martins",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati maxime repellat consectetur aperiam porro suscipit nulla placeat vero eius sed perferendis, unde nesciunt voluptates aliquam dolorum sapiente autem quas molestiae?",
            price: "R$ 35,00"
                
         }
    ];

    // Find the container where we want to add the cards
    const container = document.querySelector('.row');

    // Function to create a card for an author
    function createAuthorCard(author) {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-sm-6 col-md-4 col-lg-4 mb-4 mt-5';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.style.width = '18rem';

        const img = document.createElement('img');
        img.src = author.imgSrc;
        img.className = 'card-img-top';
        img.alt = '...';

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = author.title;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerHTML = `${author.text} <br><br> ${author.price}`;

        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(cardText);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);

        colDiv.appendChild(cardDiv);

        return colDiv;
    }

    // Loop through each author and add a card to the container
    authors.forEach(author => {
        const card = createAuthorCard(author);
        container.appendChild(card);
    });
});
