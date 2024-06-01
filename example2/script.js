document.getElementById('add-user-btn').addEventListener('click', function() {
    document.getElementById('add-user-modal').style.display = 'block';
    document.body.classList.add('blur');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('add-user-modal').style.display = 'none';
    document.body.classList.remove('blur');
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('add-user-modal')) {
        document.getElementById('add-user-modal').style.display = 'none';
        document.body.classList.remove('blur');
    }
});
