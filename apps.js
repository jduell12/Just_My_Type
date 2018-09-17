$(document).ready(function(){
   let upper = $(document.getElementById("keyboard-upper-container"));
   let lower = $(document.getElementById("keyboard-lower-container"));

//hides the upper case keyboard when the page loads 
   upper.hide();

//when the shift key is held down the lower case keyboard is hidden and the upper case keyboard is shown
$(document).keydown(function(e){
    if (e.keyCode == 16){
        lower.hide();
        upper.show();
    }
});

//when shift key is released the lower case keyboard is shown and the upper case keyboard is hidden

$(document).keyup(function(e){
    if (e.keyCode == 16){
        lower.show();
        upper.hide();
    }
})

})