/* global $ */
var score = 0;


$(document).ready(function() {
    $("button").click(function() {
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        score= personality(q1Result)+teamwork(q2Result)+power(q3Result)+playstyle(q4Result);
function personality(q1Result){
    console.log(score);
    if (q1Result==="aggresive"){
        score= score-2;
    } 
     else if (q1Result==="annoying"){
         score= score-1;
    }
    else if (q1Result==="caring"){
         score= score+2;
    }
    else if (q1Result==="calm"){
         score= score+1;
    }
}

function teamwork(q2Result){
    if (q2Result==="well"){
         score= score+2;
    } 
     else if (q2Result==="so so"){
         score= score+1;
    }
    else if (q2Result==="what team?"){
         score= score-2;
    }
}

function power(q3Result){
    if (q3Result==="damage"){
         score= score-1;
    } 
     else if (q3Result==="heal"){
         score= score+1;
    }
}

function playstyle(q4Result){
    if (q4Result==="team"){
         score= score+2;
    } 
     else if (q4Result==="nightmare"){
         score= score-2;
    }
console.log(score);
} 
console.log(score);

    if(score>=-9&&score<=-6){
        $("#champ").html("PYKE IS YOUR CHAMPION");
    }
    else if(score>=-6&&score<=-3){
        $("#champ").html("BLITZCRANK IS YOUR CHAMPION");
    }
    else if(score>=-3&&score<=0){
        $("#champ").html("THRESH IS YOUR CHAMPION");
    }
    else if(score>=0&&score<=3){
        $("#champ").html("SORAKA IS YOUR CHAMPION");
    }
    else if(score>=3&&score<=6){
        $("#champ").html("BRAUM IS YOUR CHAMPION");
    }
    
    })});
    
    
   