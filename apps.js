$(document).ready(function(){
   let upper = $(document.getElementById("keyboard-upper-container"));
   let lower = $(document.getElementById("keyboard-lower-container"));

//hides the upper case keyboard when the page loads 
   upper.hide();

//when the shift key is held down the lower case keyboard is hidden and the upper case keyboard is shown
//when keys are pressed they should be highlighted in the browser 
$(document).keydown(function(e){
    let key = e.key;

    if (key == "Shift"){
        lower.hide();
        upper.show();
    } else {
        let keyAscii = key.charCodeAt(0);
        let keyID = "#" + keyAscii + ".well";
        $(keyID).css("background", "green");
    }
});

//when shift key is released the lower case keyboard is shown and the upper case keyboard is hidden
//when keys are pressed they should be highlighted in the browser 

$(document).keyup(function(e){
    let key = e.key;

    if (key == "Shift"){
        lower.show();
        upper.hide();
    } else {
        let keyAscii = key.charCodeAt(0);
        let keyID = "#" + keyAscii + ".well";
        $(keyID).css("background", "#f5f5f5");
    }
});

//Sentences in an array will be displayed at the top of the page one sentence at a time. Once a sentence has been completed the next in line should appear 

let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];




})