// global variables 
var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharactersArray = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ',', '^', '_', '`', '{', '}', '|', '~', '"'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var superArray = []; // this is gonna contain whatever the user chooses (yes not no) into one giant array that concatinates from the other arrays
var generateBtn = document.querySelector('#generate');

// function that grabs our main function, generatePassword(), and spits out the value of the function return to that div with id="passwod" in our index.html
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}

// now that generatePassword() function is ready to be returned and printed on our div box with the id #password, listen to a mouse click from user on taht button and invoke aka "call" the function and return it's vale
generateBtn.addEventListener('click', writePassword);

// here's our main function where all the magic happens
// this series of promps and confirms that require action from the user will store the users input in variables which will let us know the following:
// 1. how long they want the password to be 
// 2. if password should include lowercase, uppercase, numbers, and/or special characters
// 3. then concat the true boolean responses into our superArray 
// 4. randomly grab characters from our customized superArray and customized length of characters specified by the user
// 5. finally, print that randomized superArray as text to the div with id="password" (the box just above the button that calls the function generatePassword)
function generatePassword() {
    // welcome pop up - confirm boolean 
    var welcomeMsg = confirm('welcome to password generator wizard! you will be selecting at least 1 character type, ready to begin?');
    console.log(welcomeMsg);
    if (welcomeMsg === true) {
        console.log('yes they love my wizard and want to start');
    } else {
        console.log('your loss');
        alert('your loss');
        window.close;
    }
    // length pop up -  prompt for user to enter a number
    var lengthMsg = parseInt(prompt('please enter the length of characters you would like for your password, it must be between 9 and 128'));
    console.log(lengthMsg);
    if ((lengthMsg >= 9 && lengthMsg <= 128) && (!isNaN(lengthMsg))) {
        console.log('success! this number is approved by dev wizard jessamyn');
    } else if (isNaN(lengthMsg)) {
        console.log('wrong, try again');
        alert('this needs to be a number, not a wingding, also it needs to be between 9 and 128 please submit again or I\'ll close your window');
        parseInt(prompt('lets try this again, how many characters would you like? enter a number between 9 and 128 characters please'));
    } else {
        console.log('what are you doing, this wizard can\'t wizard itself...')
    }

    // lowercase pop up - confirm boolean
    var lowercaseMsg = confirm('do you want to include lowercase characters in your password?');
    console.log(lowercaseMsg);
    if (lowercaseMsg === true) {
        console.log('cool add in lowercase characters');
        superArray = superArray.concat(lowercaseArray);
    } else {
        console.log('too bad, lowercase is cool');
    }

    // logging the superarray to see whatsup
    console.log('this is superArray after the lowercase: ', superArray);

    // uppercase pop up - confirm boolean
    var uppercaseMsg = confirm('do you want to include UPPERCASE characters in your password?');
    console.log(uppercaseMsg);
    if (uppercaseMsg === true) {
        console.log('cool add in UPPERCASE characters');
        superArray = superArray.concat(uppercaseArray);
    } else {
        console.log('too bad, UPPERCASE is cool');
    }

    // logging the superarray to see whatsup
    console.log('this is superArray after the uppercase: ', superArray);

    // number pop up - confirm boolean
    var numberMsg = confirm('do you want to include numbers in your password?');
    console.log(numberMsg);
    if (numberMsg === true) {
        console.log('cool add in numbers');
        superArray = superArray.concat(numberArray);
    } else {
        console.log('too bad, numbers are cool');
    }

    // logging the superarray to see whatsup
    console.log('this is superArray after the numbers: ', superArray);

    // special character pop up - confirm boolean
    var specialCharMsg = confirm('do you want to include special !@#$%^&*() characters in your password?');
    console.log(specialCharMsg);
    if (specialCharMsg === true) {
        console.log('cool add in special !@#$%^&*() characters');
        superArray = superArray.concat(specialCharactersArray);
    } else {
        console.log('too bad, special !@#$%^&*() are really cool');
    }

    // if all booleans return false aka user says no/cancel to every option do this:
    if ((lowercaseMsg && uppercaseMsg && numberMsg && specialCharMsg) === false) {
        alert('you gotta choose something ya ding dong! let\'s try this again...')

    }

    // logging the superarray to see whatsup
    console.log('this is superArray after the special characters !@#$%^&*()?!@#: ', superArray);

    // bring it home with an empty password, this is gonna store the users actual random password once it's generated by our loop;
    var password = '';

    for (var index = 0; index < lengthMsg; index++) {
        var randomNumber = Math.floor(Math.random() * superArray.length); // so it's 0 t 1 (aka 0% to 100%)
        password += superArray[randomNumber];
        console.log('this is the superArray in the loop', superArray)
    };

    return password;
}

// password generator sudo code out each step - goal is to create a new secure password

// USER clicks button to generate password
// prompt pops up:
// “welcome to password generator wizard! you will be selecting length and at least 1 character type, ready to begin? yes / no 
// USER selects yes and new prompt appears:
// “please enter the length of characters you would like for your password, it must be more than 8 and less than 128
// clicks submit button on prompt
// if accepted, new prompt and store info
// else: error validation message if: not number / less than 8 / more than 128 and request to submit again
// prompt for lowercase boolean yes or no button to click
// prompt for uppercase boolean yes or no button to click
// prompt for numeric boolean yes or no button to click
// prompt for special characters boolean yes or no button to click to check validation answer for each choice should be validated (set to true or false) and at least 1 char type should be selected:
// if yes/true to at least one, function to generate random password with yes criteria:
// password is generated that matches the selected criteria
// when password is generated display in alert or on webpage in html
// if no/false to all, validation message “I’m sorry, you must choose at least one character type, would you like to run the password generator wizard again?”
// yes (reset to welcome screen) button to click
// no (hide prompt and reset to main) button to click
// timeout function if wizard is incomplete that asks if they need more time
// yes? reset timeout function
// no? reset password generator