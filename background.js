button = document.querySelector('button');
var activeUrl;
chrome.tabs.query({active: true, currentWindow: true}, tabs => activeUrl = tabs[0].url);
button.addEventListener('click', function(){
    document.querySelector('input').value = activeUrl;
    document.querySelector('form').submit();
})