// Select the 'Add to Cart' button
const addButton = document.querySelector('form button');

// Select the dialog element
const dialog = document.querySelector('dialog');

// Select the 'Close' button inside the dialog
const closeButton = dialog.querySelector('button');

// Show the dialog when 'Add to Cart' is clicked
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  dialog.showModal();
});

// Close the dialog when 'Close' button is clicked
closeButton.addEventListener('click', () => {
  dialog.close();
});
