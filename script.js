fetch('resources/menu.json')
    .then(response => response.json())
    .then(data => {
        const menuContainer = document.getElementById('menu');

        data.sections.forEach(section => {
            // Create section element
            const sectionElement = document.createElement('section');
            const sectionTitle = document.createElement('h2');
            sectionTitle.textContent = section.title;
            sectionElement.appendChild(sectionTitle);

            // Add menu items
            section.items.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';

                const itemName = document.createElement('h3');
                itemName.textContent = item.name;
                menuItem.appendChild(itemName);

                const itemDescription = document.createElement('p');
                itemDescription.innerHTML = `${item.description} <span>${item.price}</span>`;
                menuItem.appendChild(itemDescription);

                sectionElement.appendChild(menuItem);
            });

            menuContainer.appendChild(sectionElement);
        });
    })
    .catch(error => console.error('Error loading menu:', error));
