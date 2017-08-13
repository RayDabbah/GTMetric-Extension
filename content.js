button = document.querySelector('button');
var activeUrl;
chrome.tabs.query({active: true, currentWindow: true}, tabs => activeUrl = tabs[0].url);
button.addEventListener('click', function(){
    console.log(`2nd url: ${activeUrl}`);
    document.querySelector('input').value = activeUrl;
    document.querySelector('form').submit();
})