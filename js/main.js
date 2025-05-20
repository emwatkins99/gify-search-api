$(document).ready(() => {
    $('#search').click(() => {
        alert('Button clicked!');
    });
    $.ajax({
        url: 'https://api.giphy.com',
    })
});