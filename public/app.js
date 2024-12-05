document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('postItem');

    itemForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

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
});