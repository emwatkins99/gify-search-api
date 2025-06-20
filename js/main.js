const { use } = require("react");

$(document).ready(() => {
    $('#searchBtn').click(() => {
        let userInput = $('#searchInput').val();
        alert(userInput);
         $.ajax({
        url: 'https://api.giphy.com'
        })
    });
});

