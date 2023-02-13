const dialogEl = document.getElementById('dialog');

function openDialog(callback) {
dialogEl.showModal();
const form = dialogEl.querySelector('form');

form.onsubmit = e => {
e.preventDefault();
dialogEl.close();
callback(form.text.value);
};

form.onreset = e => {
dialogEl.close();
callback(null);
}
}

