document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('postItem');  
    //modal
    const openModalButton = document.getElementById('openModal');
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('closeModal');

    openModalButton.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    //Form submission event handler
    itemForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;
    const type = document.getElementById('type').value;
    const quantity = document.getElementById('quantity').value;
        console.log({ name, color, type, quantity });
        // Send POST request to add a new item
        fetch('https://web-app-1c4i.onrender.com/api/item', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, color, type, quantity })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(item => {
            // Clear the form
            itemForm.reset();
            console.log('Item added:', item);
        })
        .catch(error => {
            console.error('Error adding item:', error);
            alert('Failed to add item. Please try again.');
        });
    });

        // Fetch items from the API
    function fetchItems() {
        fetch('https://web-app-1c4i.onrender.com/api/item')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(items => {
            const itemTable = document.getElementById('itemTable');
            itemTable.innerHTML = ''; // Clear existing rows
            items.forEach((item, index) => {
                const rowClass = index % 2 === 0 ? 'bg-gray-500 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-70' : 'bg-gray-400 bg-opacity-50 hover:bg-gray-500 hover:bg-opacity-70';
                const row = `
                    <tr class="${rowClass}">
                        <td class="py-2 px-3 border-b text-sm">${item.item_ID}</td>
                        <td class="py-2 px-3 border-b text-sm">${item.Name}</td>
                        <td class="py-2 px-3 border-b text-sm">${item.Color}</td>
                        <td class="py-2 px-3 border-b text-sm">${item.Type}</td>
                        <td class="py-2 px-3 border-b text-sm">${item.Time}</td>
                        <td class="py-2 px-3 border-b text-sm">${item.Quantity}</td>
                        <td class="py-2 px-3 border-b text-sm"></td>
                    </tr>
                `;
                itemTable.innerHTML += row;
            });
        })
        .catch(error => console.error('Error fetching items:', error));
    }
    // Call the fetch function to load items
    fetchItems();
});


