$(document).ready(() => {

function hideAll(){
  $('#loveclub').hide();
  $('#royals').hide();
  $('#flicker').hide();
  $('#dynamite').hide();
}

hideAll();

$('.album').click(function() {

  hideAll();

  $("audio").each(function() {
    this.pause();
    this.currentTime = 0;
});

  switch ($(this).attr("id")) {
      case "ep":
        $('#loveclub').show();
        break;
      case "album1":
        $('#royals').show();
        break;
      case "single":
        $('#flicker').show();
        break;
      case "album2":
        $('#dynamite').show();
        break;
      }
}); /* end of switch function */

/*
  $('#more').on('click', (event) => {
    if ($(event.currentTarget).text() === 'READ MORE'){
      $(event.currentTarget).prev().show();
      $(event.currentTarget).text('READ LESS');
    } else {
      $(event.currentTarget).prev().hide();
      $(event.currentTarget).text('READ MORE');
    }
  }) */
/* I tried combining the methods of slideToggle and the current event target to try to change the test to "READ LESS", but couldn't figure out how to make the other text elements to stay in the correct locations.*/

$('.text').hide();

  $('#more').click(function() {
    $('.text').slideToggle();

  });


}); /* entire document */
