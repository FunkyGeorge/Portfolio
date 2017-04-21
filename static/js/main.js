$(document).ready(function(){
  $('.activateCarousel').click(function(){
    $('.carousel').carousel();
    $('.carousel').click();

  });

  $('.icon').hover(function(){
		$(this).css('border-bottom','4px solid white');
	},function(){
		$(this).css('border-bottom','4px solid black');
	});

  $('.tab').click(function(){
    var tabClicked = $(this).children().attr('href');
    
    switch (tabClicked){
      case '#Evergreen':
        $('#frame-evergreen').attr('src','http://evergreenmake.com');
        break;
      case '#Ronin':
        $('#frame-ronin').attr('src','http://ronin.world');
        break;
      case '#GDND':
        $('#frame-gdnd').attr('src','http://54.215.143.208');
        break;
      case '#Trucks':
        $('#frame-foodtrucks').attr('src','http://foodtrucks.zaks.pw');
        break;
      default:
    }


  });


});
