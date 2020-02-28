$(window).on('load', function() {
    $("body").removeClass("preload");
    checkLogo();

  });

  $(window).resize(function(){
    checkLogo();
  });

checkLogo = () => {
  if( $(window).width() <= 800){
    console.log("less than 800");
    $('.logo img').attr('src', 'assets/Leaf.png');
  }else{
    $('.logo img').attr('src', 'assets/Fullscript.png');
  }
}