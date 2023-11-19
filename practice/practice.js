// Set var code to url code
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code'); 
console.log(code)

// Alert user if code is not correct length
if(code.length !== 16) alert('Code is not 16 characters long. Please try again.')


