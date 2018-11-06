"use strict"; {
    const getQuote = function(){
        const quotes = [
            "Winning isn't everything but wanting to win is. - Vince Lombardi",
            "The score never interested me, only the game. - Mae West",
            "Never let the fear of striking out keep you from playing the game - Babe Ruth",
            "A good hockey player plays where the puck is. A great hockey player plays where the puck is going to be. - Wayne Gretzky"
        ];

        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        return randomQuote;
    }

    module.exports = {
        getQuote
    }
}