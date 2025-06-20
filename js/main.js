const { use } = require("react");

$(document).ready(() => {
    $('#searchBtn').click(() => {
        let userInput = $('#searchInput').val();
        alert(userInput);
         $.ajax({
        url: 'https://api.giphy.com/${userInput}',
        })
        .done((res)=> {
            let gifs = res.Search;
            $.each(gifs, (i, e) => {
                let gif = e.gif;
                console.log("gif", gif);
                $("body").append(`<img src="${gif}" alt="gif"/>`)
            })
            console.log("res", res.Search)
        })
    });
});

