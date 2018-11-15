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
});

$('.text').hide();

  $('#more').click(function() {
    $('.text').slideToggle();
  });

});
