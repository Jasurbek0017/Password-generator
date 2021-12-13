// Call need items
let input = document.querySelector('input'),
    btn = document.querySelector('#generate'),
    number = document.querySelector('.number');



// Input length of password
btn.addEventListener('click', () => {
        let ii = input.value;
     input.value = generatePassword(number.value);
})
passworLength = number.value

// Generate password
 function generatePassword(length = number.value){
     let chartset = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz1234567890@#$';

     let password = '';

     for(let i = 0; i < length; ++i){
         let as = Math.floor(Math.random() * (chartset.length + 1));

         password += chartset.charAt(as);

     }
     return password;
 }

