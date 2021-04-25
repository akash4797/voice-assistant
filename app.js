var data = [];

document.addEventListener("DOMContentLoaded", (event) => {
    var reqData = JSON.parse(localStorage.getItem("data"));
    
    if(reqData != null){
        data = reqData;
        reqData.forEach(element => {            
            if(element.user == "user"){
                makeStore("user",element.text,true);
            }else{
                makeStore("bot",element.text,true);
            }
        });
    }
});




const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const contentA = document.querySelector('.contentA');
const theWholeBox = document.querySelector(".whole-message-box");
const reco = document.querySelector(".rec");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onspeechstart = function(){
    console.log('Voice is activated!');
};

recognition.onaudioend = function(){
    reco.style.display="none";
}

recognition.onaudiostart = function(){
    reco.style.display="block";
}

recognition.onspeechend = function(){
    reco.style.display="none";
    recognition.stop();

};

function allStop(){
    window.speechSynthesis.cancel();
}

recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;

    makeStore("user",transcript,false);




    //content.textContent ='Your Voice: '+ transcript;

    readOutLoud(transcript);    
}


btn.addEventListener('click', () =>{
    recognition.start();
});


function readOutLoud(message){

    const speech = new SpeechSynthesisUtterance();
    var writtenText = defaultCommand.default+" "+defaultCommand.emoji;
    var finalText="";
    speech.text = defaultCommand.default;

    commands.map((command,i)=>{    
        command.voiceI.map((voice)=>{
            if(message.toLowerCase().includes(voice)){
                if(commands[i].interaction == false){                    
                    finalText = commands[i].voiceO[Math.floor(Math.random() * commands[i].voiceO.length)];
                    writtenText = finalText+" "+commands[i].emoji;
                    speech.text = finalText;
                }else{                    
                    finalText = commands[i].do();
                    writtenText = finalText+" "+commands[i].emoji;
                    speech.text = finalText;
                }                            
            }
        });
    });

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 0.7;

    makeStore("bot",writtenText,false);


    //contentA.textContent ='Bot: '+ writtenText;
    window.speechSynthesis.speak(speech);
    

}

function clearScreen(){
    data = [];
    localStorage.clear();
    while (theWholeBox.firstChild) {
        theWholeBox.removeChild(theWholeBox.lastChild);
      }
    theWholeBox.innerHTML = `<span class="warn"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Click to the talk button & make sure you are allowing the mic for the app</span>`;  
}

function makeStore(who,text,isStart){
    if(document.querySelector(".warn") != null){
        
        theWholeBox.removeChild(document.querySelector(".warn"));
    }
    if(who=='user'){
        var span = document.createElement("SPAN");
        span.setAttribute("class","user-text");
        span.innerHTML = text;
        var div = document.createElement("DIV");
        div.setAttribute("class","user-content");
        div.appendChild(span);
        theWholeBox.appendChild(div);

        if(isStart == false){
            //data
            var store = {
                "user":"user",
                "text":text
            };


            data.push(store);

            localStorage.setItem("data",JSON.stringify(data));
        }


    }else if(who=="bot"){
        var span = document.createElement("SPAN");
        span.setAttribute("class","bot-text");
        span.innerHTML = text;
        var div = document.createElement("DIV");
        div.setAttribute("class","bot-content");
        div.appendChild(span);
        theWholeBox.appendChild(div);

        if(isStart==false){
            //data
            var store = {
                "user":"bot",
                "text":text
            };


            data.push(store);

            localStorage.setItem("data",JSON.stringify(data));
        }
    }

    theWholeBox.scrollTo(0,theWholeBox.scrollHeight);

}

//wiki api

// var searchTerm = "ronaldo";
// var url = "https://en.wikipedia.org/api/rest_v1/page/title/Earth";

// $(function(){
//     $.ajax({
//         url:url,
//         type:"GET",
//         contentType:"application/json",
//         async:false,
//         dataType:"json",
//         success:function(data,status,jqXHR){
//             console.log(data);
//         }
//     })
//     .done(function(){
//         console.log("success");
//     })
//     .fail(function(){
//         console.log("error");
//     })
//     .always(function(){
//         console.log("complete");
//     })


// });



/*
    search.js

    MediaWiki API Demos
    Demo of `Search` module: Search for a text or title

    MIT License
*/

/*
    opensearch.js
    MediaWiki API Demos
    Demo of `Opensearch` module: Search the wiki and obtain
	results in an OpenSearch (http://www.opensearch.org) format
    MIT License
*/



var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "opensearch",
    search: "cristiano ronaldo",
    limit: "5",
    namespace: "0",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {console.log(response);})
    .catch(function(error){console.log(error);});


//codepen

// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
      
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//code before 

// const greetings = ['Very well as always!, stop asking these shitty commmon question',
// 'So much disappointed that you have started conversation with these common question'];

// const songs = ['Shaaa Reee Gaaa Maaa Paaa,that was easy!',"Laaaala Lalalaaaaaaa... That's all I know"];

// const starting = ["Hello","Hi","Hi,there!","Howdy!"]; 

// const loling = ["lol, haha","Go to hell","XD"];

// const helping = ["Hmmm... I'm not your servant!","Sorry, I cannot help you... I'm not your servant"];

// if(message.toLowerCase().includes('how are you')){
        
//     finalText = greetings[Math.floor(Math.random() * greetings.length)];
//     writtenText = finalText+" "+"😏";
//     speech.text = finalText;
// }

// if(message.toLowerCase().includes('what can you do') || message.toLowerCase().includes('can you help')){
    
//     finalText = helping[Math.floor(Math.random() * helping.length)];
//     writtenText = finalText+" "+"😏";
//     speech.text = finalText;
// }

// if(message.toLowerCase().includes('hello') || message.toLowerCase().includes("what's up") || message.toLowerCase().includes("hi") || message.toLowerCase().includes("whatsapp")){
    
//     finalText = starting[Math.floor(Math.random() * starting.length)];
//     writtenText = finalText+" "+"🖐😀";
//     speech.text = finalText;
// }

// if(message.toLowerCase().includes('be my girlfriend') || message.toLowerCase().includes("love you") || message.toLowerCase().includes("want to be your boyfriend") || message.toLowerCase().includes("fuck you")){
    
//     finalText = loling[Math.floor(Math.random() * loling.length)];
//     writtenText = finalText+" "+"😂🤣";
//     speech.text = finalText;
// }

// if(message.toLowerCase().includes('sing me a song') || message.toLowerCase().includes('sing a song')){

//     finalText = songs[Math.floor(Math.random() * songs.length)];  
//     writtenText = finalText+" "+"😌";      
//     speech.text = finalText;
// }

// if(message.toLowerCase().includes('who are you')){

//     finalText = 'I am nobody, but a talking machine! , I do not know why I was created?';
//     writtenText = finalText+" "+"🤔";
//     speech.text = finalText;

// }

// if(message.toLowerCase().includes('who is your maker') || message.toLowerCase().includes('who is your creator') || message.toLowerCase().includes('who created you')){

//     finalText = 'My creator is Shariar Akash, He had created this by a simple piece of shit, sorry....simple piece of code';
//     writtenText = finalText+" "+"😒";
//     speech.text = finalText;

// }


// if(message.toLowerCase().includes('who am i') || message.toLowerCase().includes('what is my name') || message.toLowerCase().includes('do you know who am i') || message.toLowerCase().includes('do you know me')){

//     finalText = 'Sorry, I do not know you and do not want to know that also';
//     writtenText = finalText+" "+"😕";
//     speech.text = finalText;

// }

// if(message.toLowerCase().includes('show me time') || message.toLowerCase().includes("what's the time") || message.toLowerCase().includes('what time it is') || message.toLowerCase().includes('what is the time')){

//     var date = new Date();
//     finalText = "it's" + date.getHours()+ " " + date.getMinutes();
//     writtenText = "It's "+date.getHours()+":"+date.getMinutes()+" 🙄";
//     speech.text = finalText;


// }

