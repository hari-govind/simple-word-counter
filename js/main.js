var char_box = document.getElementById('chars');
var word_box = document.getElementById('words');
var textbox = document.getElementById('textbox');

function getWords(text){
    return text.split(/\n|\s/).filter(word => word!='').length; //todo:consider symbols,improve filter
}
function getChars(text){
    return text.replace(/\n/g,'').length;
}

function updateStats(){
    char_box.innerText = getChars(textbox.value);
    word_box.innerText = getWords(textbox.value);
}

textbox.addEventListener('input', updateStats, false)
textbox.addEventListener('keyup', updateStats, false)