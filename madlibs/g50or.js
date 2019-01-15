
$(document).ready(function(){

    $("#button").click(function(){

        showInfo();

    })

});


var Noun1, Adj1, Nouns1, Verb1, Noun2, Noun3, Nouns2, Adj2, Adj3, Verb2;



function getInfo(){
  Noun1 = $("#Noun1").val();
  Adj1 = $("#Adj1").val();
  Nouns1 = $("#Nouns1").val();
  Verb1 = $("#Verb1").val();
  Noun2 = $("#Noun2").val();
  Noun3 = $("#Noun3").val();
  Nouns2 = $("#Nouns2").val();
  Adj2 = $("#Adj2").val();
  Adj3 = $("#Adj3").val();
  Verb2 = $("#Verb2").val();
}

function showInfo(){   
    getInfo();
    var message = "Here, we can see the illustrious "+Noun1+" going through the Sahara Desert. They are quite a(n) "+Adj1+" species, getting along with "+Nouns1+" quite well. They enjoy taking the time to "+Verb1+" together, scurrying around and making fun of "+Noun2+". We thought "+Noun3+" would know about this and asked questions. Apparently, all "+Noun3+" knew is that they were "+Adj2+", "+Adj3+", and that they liked to "+Verb2+". Which... is completely wrong. Perhaps in the future, "+Noun3+" can better teach us about "+Noun1+" and even how they interact with the "+Nouns2+".";
    
    $("#output").text(message);
    $("#output").text(message).show().animate({'top':'0px', "opacity":'1'}, 'slow');
    
}
