// inputs - wins losses guesssingLeft
let wins = 0;
let losses = 0;
let guessLeft = 9;
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let gueses = [];
let guessLetter;

// Generate random letter
let randomN = Math.floor((Math.random() * 26) + 1);
let randomLetter = letters[randomN];

//Yeniden basla
let restart = function() {
	guessLeft = 10;
	gueses = [];
	randomLetter = letters[Math.floor(Math.random() * letters.length)];
}

//Guess the letter
window.addEventListener('keyup', function(e){
    guessLeft--;

    guessLetter = e.key;
    gueses.push(guessLetter);
    document.querySelector('#sofarguess').innerText = gueses;

    this.document.querySelector('#guessLeft').innerText = guessLeft;

    if (guessLetter === randomLetter){
        wins++;
        document.querySelector('#wins').innerText = wins;
        restart();
    }
    else if(guessLeft === 0){
        losses++;
        this.document.querySelector('#losses').innerText = losses;
        restart();
    }
})

