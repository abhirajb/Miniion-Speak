// storing button--(btn-translate) reference into a variable
var buttonSelector = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#result");
//processing
//console.log(output);
// var storeInputValue = txtInput.value;

var translatorUrl = "https://api.funtranslations.com/translate/minion.json"

function langTranslatorUrl(text){
    return translatorUrl+"?"+"text="+text;
}

function errorHandler(error) {
    console.log("error occured",error);
    alert("something went wrong with the server, kindly try after some time");
}


function printClick(){
    //console.log("clicked");
    //output.innerText = "blah balh "+txtInput.value;
    var txtboxInput = txtInput.value;
    fetch(langTranslatorUrl(txtboxInput))
    .then(response => response.json())
    .then(json => {var translatedText = json.contents.translated;
    output.innerText = translatedText;
    })
    .catch(errorHandler)
    }

    buttonSelector.addEventListener("click",printClick);

