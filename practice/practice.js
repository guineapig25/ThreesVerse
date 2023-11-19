// Set var code to url code
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code'); 
const deck = urlParams.get('deck'); 
console.log(code)

// if(deck === null) window.location.replace(window.location + "&code=1111222233334444")

// Alert user if code is not correct length
if(code.length !== 16) alert('Code is not 16 characters long. Please try again.')

