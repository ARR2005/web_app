document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('postItem');
    const itemTable = document.getElementById('itemTable').getElementsByTagName('tbody')[0];

    //Form submission event handler
    itemForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;
    const type = document.getElementById('type').value;
    const quantity = document.getElementById('quantity').value;
        console.log({ name, color, type, quantity });
        // Send POST request to add a new item
        fetch('http://localhost:3000/api/item', {
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

    //Table event handler
    function fetchItem() {
        fetch('http://localhost:3000/api/item')
        .then(response => response.json())
        .then(item => {
            // Clear the table first
            itemTable.innerHTML = '';

            // Populate the table with  data
            item.forEach(item => {
            const row = itemTable.insertRow();
            row.innerHTML = `
                <td>${item.item_ID}</td>
                <td>${item.Name}</td>
                <td>${item.Color}</td>
                <td>${item.Type}</td>
                <td>${item.Time}</td>
                <td>${item.Quantity}</td>
            `;
            });
        })
        .catch(error => console.error('Error fetching:', error));
    }
    fetchItem();
});


