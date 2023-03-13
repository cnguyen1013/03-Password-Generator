
let letters = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

let options = ['Y', 'N'];
let pw_length; 

let answers = {
  pw_uppercase: false,
  pw_lowercase: false,
  pw_numbers: false,
  pw_specialcharacters: false
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {

    let char_length = prompt("What is the length of the password?");
    let password = "";
  
    if (char_length === null) {
        password = "Your Secure Password";
        return password 

    } else if (Number(char_length) >= 8 && Number(char_length) < 128) {
        pw_length = Number(char_length);

        while (pw_length) { 

            let uppercase_ans = prompt("Do you want UpperCase letters? (Y or N)").toUpperCase();

            if (uppercase_ans === null) {
                return 
            } else if (options.includes(uppercase_ans)) {
                answers.pw_uppercase = (uppercase_ans === "Y") ? true :false;
                
                while (uppercase_ans) {
                    
                    let lowercase_ans = prompt("Do you want LowerCase letters? (Y or N)").toUpperCase();

                    if (lowercase_ans === null) {
                        return
                    } else if (options.includes(lowercase_ans)) {
                        answers.pw_lowercase = (lowercase_ans === "Y") ? true :false;
                        
                        while (lowercase_ans) {

                            let numbers_ans = prompt("Do you want numbers? (Y or N)").toUpperCase(); 

                            if (numbers_ans === null) {
                                return
                            } else if (options.includes(numbers_ans)) {
                                answers.pw_numbers = (numbers_ans === "Y") ? true :false; 
                                
                                while (numbers_ans) {

                                    let ss_ans = prompt("Do you want special characters? (Y or N)").toUpperCase();

                                    if (ss_ans === null) {
                                        return
                                    } else if (options.includes(ss_ans)) {
                                        answers.pw_specialcharacters = (ss_ans === "Y") ? true :false;

                                        alert("The following criteria was selected:" + '\n   ' + 
                                              "Password length: " + pw_length + '\n   ' + 
                                              "UpperCase: " + answers.pw_uppercase + '\n   ' + 
                                              "LowerCase: " + answers.pw_lowercase + '\n   ' + 
                                              "Numbers: " + answers.pw_numbers + '\n   ' +
                                              "Special Characters: " + answers.pw_specialcharacters);
                                        
                                        const results = [];

                                        for (var index in answers) {
                                            if (index === "pw_uppercase") { 
                                                if (answers[index]) {
                                                    results.push(letters.toUpperCase());
                                                }
                                            } else if (index === "pw_lowercase") {
                                                if (answers[index]) {
                                                    results.push(letters);
                                                }
                                            } else if (index === "pw_numbers") {
                                                if (answers[index]) {
                                                    results.push(numbers);
                                                }
                                            } else if (index === "pw_specialcharacters") {
                                                if (answers[index]) {
                                                    results.push(symbols);
                                                }
                                            }
                                        }

                                        let string = results.join('');
      
                                        for (let i = 0; i < pw_length; i++) {
                                            password += string[Math.floor(Math.random() * string.length)];
                                        }

                                        return password

                                    } else {
                                        alert('No option was inputted')
                                    }
                                }
                            } else {
                                alert('No option was inputted')
                            }
                        } 
                    } else {
                        alert('No option was inputted')
                    }
                }
            } else {
                alert('No option was inputted')
            }
        }
    } else {
        alert('Password length must be a number between 8 to 128');
        password = "No password generated. Try again.";
        return password
    }
}