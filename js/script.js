// deal with html collection of divs  5

var alldivs = document.getElementsByClassName("div1");

for (var i = 0; i < alldivs.length; i++) {
    alldivs[i].textContent = `Updated Div ${i + 1}`;
}

// loop and set background color for each div 

var divs = document.getElementsByClassName("bg")

var colors = {
    fcolor: "red",
    Scolor: "green",
    THcolor: "yellow",
    lastcolor: "black",
}

for (var i = 0; i < divs.length; i++) {
    if (i == 0) {
        divs[i].style.background = colors.fcolor;
    }
    else if (i == 1) {
        divs[i].style.background = colors.Scolor;
    }
    else if (i == 2) {
        divs[i].style.background = colors.THcolor;
    }
    else if(i == 3){
        divs[i].style.background = colors.lastcolor;
        divs[i].style.color = colors.fcolor;
    }
}

// deal with images set collection of images 

var allimgs = document.getElementsByClassName("img_code")

for(var i = 0 ; i <allimgs.length ; i++){
    allimgs[i].addEventListener("click" , function(addeven){
        addeven.target.style.borderRadius = '50%';
        addeven.target.style.width = '50%';
        addeven.target.style.height = '50%';

    })
}

// deal with inputs

 var input = document.getElementsByName("username");
var user = { firstname: "sara", lastname: "elzayat" };
for (var i = 0; i < input.length; i++) {
    if (i == 0){
        input[i].value = user.firstname;
    }
    else{
        input[i].value= user.lastname;
    }
}
// write any charchater  show the charcher in console  and counter. 

var inputField = document.getElementById('inputField');


inputField.addEventListener('input', function() {
    console.log(inputField.value);
    console.log(inputField.value.length);  
});

// hover

var hoverElement = document.getElementById('hoverElement');

        hoverElement.addEventListener('mouseenter', function() {
            hoverElement.style.backgroundColor = "red"
        });

        hoverElement.addEventListener('mouseleave', function() {
        hoverElement.style.backgroundColor = "yellow"
});

// apply readystatechange  JsonPlaceHolder
var apiUrl = 'https://jsonplaceholder.typicode.com/posts';
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (this.readyState === 0) {
		console.log('request not initialized: ', this.readyState);
	}
	if (this.readyState === 1) {
		console.log('server connection established: ', this.readyState);
	}
	if (this.readyState === 2) {
		console.log('request received: ', this.readyState);
	}
	if (this.readyState === 3) {
		console.log('processing request: ', this.readyState);
	}
	if (this.readyState === 4) {
		console.log('request finished and response is ready: ', this.readyState);
	}
};
xhr.open('GET', apiUrl, true);
xhr.send();
