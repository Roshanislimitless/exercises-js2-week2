    var bluebtn = document.querySelector('#blueBtn');
bluebtn.addEventListener("click", changeBlue);

function changeBlue(){
 var jumbotron = document.querySelector('.jumbotron');
 jumbotron.style.background = '#588fbd';

 var primaryBtn = document.querySelector('.btn-lrg:nth-child(1)');
 primaryBtn.style.background = '#ffa500';

 var secondaryBtn = document.querySelector('.btn-lrg:nth-child(2)');
 secondaryBtn.style.background = 'black';
secondaryBtn.style.color = 'white';

}

var bluebtn = document.querySelector('#orangeBtn');
bluebtn.addEventListener("click", changeYellow);

function changeYellow() {
    var jumbotron = document.querySelector('.jumbotron');
    jumbotron.style.background = '#f0ad4e';

    var primaryBtn = document.querySelector('.btn-lrg:nth-child(1)');
    primaryBtn.style.background = '#5751fd';

    var secondaryBtn = document.querySelector('.btn-lrg:nth-child(2)');
    secondaryBtn.style.background = '#31b0d5';
    secondaryBtn.style.color = 'white';

}

var bluebtn = document.querySelector('#greenBtn');
bluebtn.addEventListener("click", changeGreen);

function changeGreen() {
    var jumbotron = document.querySelector('.jumbotron');
    jumbotron.style.background = '#87ca8a';

    var primaryBtn = document.querySelector('.btn-lrg:nth-child(1)');
    primaryBtn.style.background = 'black';

    var secondaryBtn = document.querySelector('.btn-lrg:nth-child(2)');
    secondaryBtn.style.background = '#8c9c08';

}



var formButton = document.querySelector('form button');
formButton.addEventListener('click', formValidator);
     

function formValidator(){
    var emailInput = document.querySelector('#exampleInputEmail1');
    var name = document.querySelector('#example-text-input');
    var textArea = document.querySelector('#exampleTextarea');
    var validationElements = [];
    validationElements.push(emailInput, name, textArea);
    var isInputValid = true;


    for ( var i = 0; i < validationElements.length; i++){
        if ( validationElements[i].value.length == 0){
            validationElements[i].style.background = "red";
            isInputValid = false;


        }
        else { validationElements[i].style.background = 'lightGrey';}
    
    }

    if ( !emailInput.value.includes('@')){
        emailInput.style.border = "red";
        isInputValid = false;

    }
    
    if (isInputValid){
        for ( var i = 0; i < validationElements.length; i++){
            validationElemen = validationElements[i];
            validationElemen.value = "";

        }
        alert ('thanks for filling the form');
    }


 
    
        
    
    event.preventDefault();
    
    
    
    

};

var emailInput = document.querySelector('#exampleInputEmail1');
var name = document.querySelector('#example-text-input');
var textArea = document.querySelector('#exampleTextarea');
var validationElements = [];
validationElements.push(emailInput, name, textArea);
console.log(validationElements); 







