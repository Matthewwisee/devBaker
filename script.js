$(document).ready(function() {
    console.log("ready!");

    for (i = 0; i < 5; i++) {
        console.log(i); 
        $("#gym").append('<div class="seat">Seat</div>');
    }

    for (i = 0; i < 4; i++) {
        console.log(i); 
        $("#mat").append('<div class="bag">Bag</div>');
    }
  
    $('#mascot').draggable({
      containment: "#gym"
    }); 
});

$(document).on('click', '#mascot',(event)=>{
        // alert(event.target.id); 
        let $clicked = $('#'+event.target.id );  
        // alert($clicked.position().top);
        console.log(event.target.id, 
          $('#'+event.target.id).position().left);
})