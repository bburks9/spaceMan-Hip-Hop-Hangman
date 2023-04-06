/*------------- constants -------------*/
var words = [ 
    'SNOOP DOGG',
    'RAPSODY',
    'KANYE WEST',
    'DAVE EAST',
    'BIG L',
    'LUDACRISS',
    'FIVIO FOREIGN',
    'LL COOL J',
    'LIL KIM',
    'BIGGIE',
    'JAY Z',
    'SWIZZ BEATZ'

];

/*------------- game's state -------------*/
var secretWord, wrongCount, guess;

/*------------- cached element references -------------*/
var guess = document.getElementById('guess');
//var img = ('#hang-img');
var message = document.getElementById('message');
const letters = document.querySelectorAll(".letter-button");
const wrong = document.querySelector('#wrong')
console.log(wrong)
/*------------- event listeners -------------*/
//('#letters').on('click', handleLetterClick);

   
   

//('#reset').on('click', initialize);

/*------------- functions -------------*/
initialize();

function initialize() {
    wrongCount = 0;
    secretWord = words[getRandomInt(words.length -1)];
console.log(secretWord)
    guess = "";

    letters.forEach(letter => {
        // console.log(letter); 
        letter.addEventListener('click', function(evt){
            let guess = evt.target.innerText
            let letterInWord = secretWord.includes(guess)
            console.log(letterInWord)
        })      
        
    })   
        
    
    for (var i = 0; i < secretWord.length; i++) {
      var currentLetter = secretWord[i];
      if (currentLetter === " ") {
          guess += " "
      } else {
          guess += "_";
      }
    };

   // ('button.letter-button').prop('enabled', false);
    render();
}

function getRandomInt(max) {
    return Math.floor (Math.random() * (max + 1));
}

function render() {
   // guess.html(guess);
    //('#wrong').html(`WRONG GUESSES: {wrongCount}`);
   // img.attr('src', 'images/img' + wrongCount + '.png')

    if (guess === secretWord) {
        message.html("Winner Winner Big Spender!");
        message.fadeIn();
    } else if ( wrongCount === 12) {
        message.html("Sorry Not Sorry! Bing Bong Game Over.");
        message.fadeIn();
    } else {
        message.html("")
        message.hide();
    }
}

function handleClick(evt){
    let testWord = 'BIGGIE'
    let letter = evt.target.innerText
    let letterInWord = testWord.includes(letter)
    console.log(letterInWord)
}


function handleLetterClick (evt) {
    if (wrongCount === 12) return;

    var letter = evt.target.textContent;
    console.log(secretWord);
    if (secretWord.includes(letter)) {
        var pos = secretWord.indexOf(letter);
        while ( pos >= 0) {
            guess = guess.split('');
            guess[pos] = letter;
            guess = guess.join('');
            pos = secretWord.indexOf(letter,pos +1);
        }
    } else {
        if (evt.target.id !== "reset") {
            wrongCount++;
        }
    }
    
    (evt.target).prop('enabled', true);
    ('#reset').prop('enabled', false);
    render();
}
    