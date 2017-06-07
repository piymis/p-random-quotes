$(function () {
    getQuote();
    $('#new-quote').on('click', function (e) {
        e.preventDefault();
        getQuote();
    });
    $('#tweet-quote').on('click', function(e){
        e.preventDefault();
        tweetQuote = $('#quote-content').text();
        tweetUrl = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=';
        tweetContent = tweetUrl + encodeURIComponent(tweetQuote);
        window.open(tweetContent, '_blank')
    })

    function getQuote() {
        $.ajax({
            url: "http://api.forismatic.com/api/1.0/?",
            data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
            dataType: "jsonp",
            cache: false
        })
            .done(function (responseText) {
                $element = '#quote-content'
                elementContent = responseText.quoteText + '<p>' + responseText.quoteAuthor + '</p>'
                $($element).html(elementContent);
                $('body').css('background-color', COLORS[parseInt(Math.random()*COLORS.length)]);
            });
    }
})

COLORS = ['blue', 'cyan', 'grey', 'red', 'green', 'orange'];
