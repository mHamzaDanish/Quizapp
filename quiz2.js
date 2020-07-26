
var questionnum=0
var correct=0;

let myques=
[

    {
        question:"What is the HTML tag under which one can write the JavaScript code?",
        answer:{'a':'javascript','b':'scripted','c':'script'},
        correct_anser:'c'
    }
,
    {
        question:"The external JavaScript file must contain <script> tag. True or False?",
        answer:{'a':"True",'b':"False",'c':'none'},
        correct_anser:'b'
    }
    ,  
    {
        question:"Which of the following is not a reserved word in JavaScript?",
        answer:{'a':'interface','b':'throws','c':'program'},
        correct_anser:'c'
    }
    ,  
    {
        question:"What is the JavaScript syntax for printing values in Console?",
        answer:{'a':'print(5)','b':'console.log(5);','c':'console.print(5);'},
        correct_anser:'b'
    }
   
]

function display_question(){

    if(questionnum >= myques.length){
        var main=document.getElementById('result');
        
        var h2=document.createElement('h2');
        var h2text= document.createTextNode("Test Complete")
        h2.appendChild(h2text);
        main.appendChild(h2);
        var h1=document.createElement('h1');
        var h1text= document.createTextNode("You got "+correct+" of "+myques.length+" questions correct")
        h1.appendChild(h1text);
        main.appendChild(h1);


        
        document.getElementById('main').innerHTML="";
        document.getElementById('test').remove();
        
		
		questionnum = 0;
		correct = 0;
		return false;
    }
    document.getElementById('main').innerHTML=" <h1>Question "+(questionnum+1)+" of "+myques.length + "</h1>";
    var question_position=myques[questionnum];

    document.getElementById('test').innerHTML=`<h2>${question_position.question}</h2>`;

    document.getElementById('test').innerHTML+=`<input type="radio" id="myRadio"  name="anser" value="a">${question_position.answer.a}<br>`;
    document.getElementById('test').innerHTML+=`<input type="radio" id="myRadio" name="anser" value="b">${question_position.answer.b}<br>`;
    document.getElementById('test').innerHTML+=`<input type="radio" id="myRadio" name="anser" value="c">${question_position.answer.c}<br>`;
    

    document.getElementById('test').innerHTML+=`<button type="submit" onclick="check()">Submit</button>`;

}
function check(){
    choices = document.getElementsByName("anser");

	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
    }
    if(choice == myques[questionnum].correct_anser)
    {
		correct++;
    }
    console.log(choice)

    questionnum++;
    display_question();

}



window.addEventListener("load", display_question, false);



