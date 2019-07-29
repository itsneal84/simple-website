/*You can usually omit semicolons in JavaScript; it's a good idea to brush up on when semicolons are necessary.
There's a bit of debate about this topic in the JavaScript community. If your preference is to end statements with
a semicolon 'use strict';, feel free to add them.*/
'use strict'

//retrieve a new date from the built-in JavaScript object
let today = new Date()
//transform the date format by using toDateString()
let formatDate = today.toDateString()
//retrieve an element using getElementById('date')
let selectElement = document.getElementById('date')
//insert the date string inside the selected element with innerHTML
selectElement.innerHTML = formatDate

console.log('Here\'s a hidden message');