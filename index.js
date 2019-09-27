const inquirer = require('inquirer');

var easy = ['jam', 'rob', 'pull', 'rice', 'take', 'show', 'near', 'goat', 'bet', 'feet'];

var medium = ['flavor', 'letter', 'import', 'drawer', 'savor', 'collar', 'boring', 'empty', 'shot', 'babies', 'wealth'];

var hard = ['harmony', 'attention', 'tiresome', 'distribution', 'sanction', 'gruesome', 'unwritten', 'splendid', 'ambitious', 'quixotic', 'steadfast', 'probable'];


// console.log(randomWords[randIndex]);

var questions = [
    {
        type: 'list',
        name: 'start',
        message: 'How difficult?',
        choices: [
            'Easy',
            'Medium',
            'Hard'
        ]
    }
]

var guess = {
    type: 'input',
    name: 'guessing',
    message: 'Make your guess!'
}


inquirer.prompt(questions)
    .then(function (answers) {
        switch (answers.start) {
            case 'Easy':
                easyHang();
                break;
            case 'Medium':
                mediumHang();
                break;
            case 'Hard':
                hardHang();
                break;
            default:
                break;
        }
    });

function easyHang() {
    var randIndex = Math.floor((Math.random() * 10) + 1);
    var easyWord = easy[randIndex];
    var hangMan = easyWord.split('');
    var tempHang = easyWord.split('');

    function randomFunc() {
        for (var i = 0; i < hangMan.length; i++) {
            hangMan[i] = '_';
        }
    }
    hangMan.forEach(randomFunc);
    console.log(hangMan);
    easyPrompt();
    var man = 0;
    function easyPrompt() {

        inquirer.prompt(guess)
            .then(function (answers) {
                if (answers.guessing === '') {
                    console.log('Must enter a letter.')
                    mediumHang();
                }
                if (easyWord.includes(answers.guessing)) {
                    console.log('Nice');
                    var firstGuess = answers.guessing;
                    var ind = tempHang.indexOf(firstGuess);
                    // console.log(ind);
                    hangMan[ind] = firstGuess;
                    console.log(hangMan);
                    easyPrompt();
                } else {
                    man++;
                    console.log(6 - man + " trys left");
                    console.log('try again');
                    console.log(hangMan);
                    easyPrompt();
                } if (man === 6) {
                    console.log("Game Over");
                } if (!hangMan.includes('_')) {
                    console.log('You win!');
                }
            });
    };
};

function mediumHang() {
    var randIndex = Math.floor((Math.random() * 11) + 1);
    var mediumWord = medium[randIndex];
    var hangMan = mediumWord.split('');
    var tempHang = mediumWord.split('');


    function randomFunc() {
        for (var i = 0; i < hangMan.length; i++) {
            hangMan[i] = '_';
        }
    }
    hangMan.forEach(randomFunc);
    console.log(hangMan);
    var man = 0;
    mediumPrompt();
    function mediumPrompt() {
        inquirer.prompt(guess)
            .then(function (answers) {
                if (answers.guessing === '') {
                    console.log('Must enter a letter.')
                    mediumHang();
                }
                if (mediumWord.includes(answers.guessing)) {
                    console.log('Nice');
                    var firstGuess = answers.guessing;
                    var ind = tempHang.indexOf(firstGuess);
                    // console.log(ind);
                    hangMan[ind] = firstGuess;
                    console.log(hangMan);
                    mediumPrompt();
                } else {
                    man++;
                    console.log(6 - man + " trys left");
                    console.log('try again');
                    console.log(hangMan);
                    mediumPrompt();
                } if (man === 6) {
                    console.log("Game Over");
                } if (!hangMan.includes('_')) {
                    console.log('You win!');
                }
            });
    };
};

function hardHang() {
    var randIndex = Math.floor((Math.random() * 12) + 1);
    var hardWord = hard[randIndex];
    var hangMan = hardWord.split('');
    var tempHang = hardWord.split('');
    console.log(hangMan);

    function randomFunc() {
        for (var i = 0; i < hangMan.length; i++) {
            hangMan[i] = '_';
        }
    }
    hangMan.forEach(randomFunc);
    console.log(hangMan);
    hardPrompt();
    var man = 0;
    function hardPrompt() {

        inquirer.prompt(guess)
            .then(function (answers) {
                if (answers.guessing === '') {
                    console.log('Must enter a letter.')
                    hardHang();
                } if (hardWord.includes(answers.guessing)) {
                    console.log('Nice');
                    var firstGuess = answers.guessing;
                    var ind = tempHang.indexOf(firstGuess);
                    // console.log(ind);
                    hangMan[ind] = firstGuess;
                    console.log(hangMan);
                    hardPrompt();
                } else {
                    man++;
                    console.log(6 - man + " trys left");
                    console.log('try again');
                    console.log(hangMan);
                    hardPrompt();
                } if (man === 6) {
                    console.log("Game Over");
                    hardHang();
                } if (!hangMan.includes('_')) {
                    console.log('You win!');
                }
            });
    };
};
