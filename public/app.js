$(document).ready(function() {


    // ____  _    _ ____  ____  _      ______  _____ 
   // |  _ \| |  | |  _ \|  _ \| |    |  ____|/ ____|
   // | |_) | |  | | |_) | |_) | |    | |__  | (___  
   // |  _ <| |  | |  _ <|  _ <| |    |  __|  \___ \ 
   // | |_) | |__| | |_) | |_) | |____| |____ ____) |
   // |____/ \____/|____/|____/|______|______|_____/


var $bubbles = $('.bubbles');

function bubbles() {
  
  // Settings
  var min_bubble_count = 20, // Minimum number of bubbles
      max_bubble_count = 40, // Maximum number of bubbles
      min_bubble_size = 3, // Smallest possible bubble diameter (px)
      max_bubble_size = 8; // Largest possible bubble diameter (px)
  
  // Calculate a random number of bubbles based on our min/max
  var bubbleCount = min_bubble_count + Math.floor(Math.random() * (max_bubble_count + 1));
  
  // Create the bubbles
  for (var i = 0; i < bubbleCount; i++) {
    $bubbles.append('<div class="bubble-container"><div class="bubble"></div></div>');
  }
  
  // Now randomise the various bubble elements
  $bubbles.find('.bubble-container').each(function(){
    
    // Randomise the bubble positions (0 - 100%)
    var pos_rand = Math.floor(Math.random() * 101);
    
    // Randomise their size
    var size_rand = min_bubble_size + Math.floor(Math.random() * (max_bubble_size + 1));
    
    // Randomise the time they start rising (0-15s)
    var delay_rand = Math.floor(Math.random() * 16);
    
    // Randomise their speed (3-8s)
    var speed_rand = 3 + Math.floor(Math.random() * 9);
    
    // Cache the this selector
    var $this = $(this);
    
    // Apply the new styles
    $this.css({
      'left' : pos_rand + '%',
      
      '-webkit-animation-duration' : speed_rand + 's',
      '-moz-animation-duration' : speed_rand + 's',
      '-ms-animation-duration' : speed_rand + 's',
      'animation-duration' : speed_rand + 's',
      
      '-webkit-animation-delay' : delay_rand + 's',
      '-moz-animation-delay' : delay_rand + 's',
      '-ms-animation-delay' : delay_rand + 's',
      'animation-delay' : delay_rand + 's'
    });
    
    $this.children('.bubble').css({
      'width' : size_rand + 'px',
      'height' : size_rand + 'px'
    });
    
  });
}

// In case users value their laptop battery life
// Allow them to turn the bubbles off
$('.bubble-toggle').click(function(){
  if($bubbles.is(':empty')) {
    bubbles();
    $bubbles.show();
    $(this).text('Bubbles Off');
  } else {
    $bubbles.fadeOut(function(){
      $(this).empty();
    });
    $(this).text('Bubbles On');
  }
  
  return false;
});

bubbles();


  // _____ _______    _______ _____  _____ _______ _____ _____  _____ 
 // / ____|__   __|/\|__   __|_   _|/ ____|__   __|_   _/ ____|/ ____|
// | (___    | |  /  \  | |    | | | (___    | |    | || |    | (___  
 // \___ \   | | / /\ \ | |    | |  \___ \   | |    | || |     \___ \ 
 // ____) |  | |/ ____ \| |   _| |_ ____) |  | |   _| || |____ ____) |
// |_____/   |_/_/    \_\_|  |_____|_____/   |_|  |_____\_____|_____/

  function count($this){
       var current = parseInt($this.html(), 10);
       $this.html(++current);
       if(current !== $this.data('count')){
           setTimeout(function(){count($this)}, 75);
       }
   }        
  $(".stat_number").each(function() {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');
      count($(this));
  });



 // _    _  _____   __  __          _____  
// | |  | |/ ____| |  \/  |   /\   |  __ \ 
// | |  | | (___   | \  / |  /  \  | |__) |
// | |  | |\___ \  | |\/| | / /\ \ |  ___/ 
// | |__| |____) | | |  | |/ ____ \| |     
 // \____/|_____/  |_|  |_/_/    \_\_|     



    $('#map').usmap({

      'stateSpecificStyles': {
        
        'Wisconsin' : {fill: '#733A06'},
        'NewYork' : {fill: '#85670f'},
        'Pennsylvania' : {fill: '#85670f'},
        'Hawaii': {fill: '#513e04'},
        'Alaska': {fill: '#eeca5d'},
        'Florida': {fill: '#bb8d02'},
        'SouthCarolina': {fill: '#eeca5d'},
        'Georgia': {fill: '#eeca5d'},
        'Alabama': {fill: '#eeca5d'},
        'NorthCarolina': {fill: '#bb8d02'},
        'Tennessee': {fill: '#eeb818'},
        'RhodeIsland': {fill: '#ffe69c'},
        'Connecticut': {fill: '#eeca5d'},
        'Massachusetts': {fill: '#eeb818'},
        'Maine': {fill: '#eeb818'},
        'NewHampshire': {fill: '#eeca5d'},
        'Vermont': {fill: '#eeb818'},
        'NewYork': {fill: '#85670f'},
        'NewJersey': {fill: '#eeb818'},
        'Pennsylvania': {fill: '#85670f'},
        'Delaware': {fill: '#ffe69c'},
        'Maryland': {fill: '#eeb818'},
        'WestVirginia': {fill: '#ffe69c'},
        'Kentucky': {fill: '#eeca5d'},
        'Ohio': {fill: '#bb8d02'},
        'Michigan': {fill: '#85670f'},
        'Wyoming': {fill: '#eeca5d'},
        'Montana': {fill: '#eeb818'},
        'Idaho': {fill: '#eeb818'},
        'Washington': {fill: '#513e04'},
        'Texas': {fill: '#85670f'},
        'California': {fill: '#513e04'},
        'Arizona': {fill: '#eeb818'},
        'Nevada': {fill: '#eeca5d'},
        'Utah': {fill: '#eeca5d'},
        'Colorado': {fill: '#513e04'},
        'NewMexico': {fill: '#eeb818'},
        'Oregon': {fill: '#85670f'},
        'NorthDakota': {fill: '#ffe69c'},
        'SouthDakota': {fill: '#ffe69c'},
        'Nebraska': {fill: '#eeca5d'},
        'Iowa': {fill: '#eeb818'},
        'Mississippi': {fill: '#ffe69c'},
        'Indiana': {fill: '#bb8d02'},
        'Illinois': {fill: '#bb8d02'},
        'Minnesota': {fill: '#eeb818'},
        'Wisconsin': {fill: '#85670f'},
        'Missouri': {fill: '#eeb818'},
        'Arkansas': {fill: '#eeca5d'},
        'Oklahoma': {fill: '#eeca5d'},
        'Kansas': {fill: '#eeca5d'},
        'Louisiana': {fill: '#ffe69c'},
        'Virginia': {fill: '#eeb818'},
        'DistrictofColumbia': {fill: '#733A06'}

      },
      

      
      // 'mouseoverState': {
      //   'Washington' : function(event, data) {
      //     $('#alert h2')
      //     .text(data.name)
      //     .stop()
      //     $('#alert h3')
      //     .text('Rank #1')
      //     .stop()
      //     $('#alert p')
      //     .text('Total brewerys')
      //     .stop()
      //     // .css('height', '200px','backgroundColor', '#fff', 'display', 'block')
      //     // .animate({backgroundColor: '#a8861f'}, 1000);
      //   }

        
      },

      
      'click' : function(event, data) {
        $('#alert')
          .text(data.name)
          .stop()
          .css('backgroundColor', '#eee')
          .animate({backgroundColor: '#ffe69c'}, 1000);
      }

   
    });
    
    $('#map').usmap({
      stateStyles: {fill: '#a8861f'}
    });
    
    $('#over-md').click(function(event){
      $('#map').usmap('trigger', 'MD', 'mouseover', event);
    });
    
    $('#out-md').click(function(event){
      $('#map').usmap('trigger', 'MD', 'mouseout', event);
    });



          // _____ _____ ____  _____  _____ _____ ____  _   _ 
    // /\   / ____/ ____/ __ \|  __ \|  __ \_   _/ __ \| \ | |
   // /  \ | |   | |   | |  | | |__) | |  | || || |  | |  \| |
  // / /\ \| |   | |   | |  | |  _  /| |  | || || |  | | . ` |
 // / ____ \ |___| |___| |__| | | \ \| |__| || || |__| | |\  |
// /_/    \_\_____\_____\____/|_|  \_\_____/_____\____/|_| \_|
    

    $( "#accordion" ).accordion();

    //ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
      $('.accordionButton').click(function() {

        //REMOVE THE ON CLASS FROM ALL BUTTONS
        $('.accordionButton').removeClass('on');
          
        //NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
        $('.accordionContent').slideUp('normal');
       
        //IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
        if($(this).next().is(':hidden') == true) {
          
          //ADD THE ON CLASS TO THE BUTTON
          $(this).addClass('on');
            
          //OPEN THE SLIDE
          $(this).next().slideDown('normal');
         } 
          
       });     
      
      /********************************************************************************************************************
      CLOSES ALL S ON PAGE LOAD
      ********************************************************************************************************************/ 
      $('.accordionContent').hide();
      $( "#open" ).trigger( "click" );


   // _____          _____   ____  _    _  _____ ______ _      
  // / ____|   /\   |  __ \ / __ \| |  | |/ ____|  ____| |     
 // | |       /  \  | |__) | |  | | |  | | (___ | |__  | |     
 // | |      / /\ \ |  _  /| |  | | |  | |\___ \|  __| | |     
 // | |____ / ____ \| | \ \| |__| | |__| |____) | |____| |____ 
  // \_____/_/    \_\_|  \_\\____/ \____/|_____/|______|______|



$('.carousel').carousel()

$('#tab-container').easytabs();



});


