let input = document.querySelector('input'),
    btn = document.querySelector('#generate');



    btn.addEventListener('click', () => {
        let ii = input.value;
     input.value = generatePassword(8);
 })

 function generatePassword(length = 8){
     let chartset = 'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz1234567890@#$';

     let password = '';

     for(let i = 0; i < length; ++i){
         let as = Math.floor(Math.random() * (chartset.length + 1));

         password += chartset.charAt(as);

     }
     return password;

 }

