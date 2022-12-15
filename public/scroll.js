// select video element
var vid = document.getElementById('player');
var time = $('#time');
var scroll = $('#scroll');
var windowheight = $(window).height();
// select video element         
var dotControll = 0;
// lower numbers = faster playback
var playbackConst = 300;
// dynamically set the page height according to video length
var setHeight = document.getElementById("museu-container");
vid.addEventListener('loadedmetadata', function() {
    setHeight.style.height = Math.floor(vid.duration+(vid.duration*0.01)) * playbackConst + "px";
    dotControll = Math.floor(vid.duration+(vid.duration*0.03)) * playbackConst;
    //console.log(setHeight.style.height)
    //console.log(vid.duration)

});

var scrollpos = setHeight.style.height/playbackConst;
var targetscrollpos = scrollpos;
var accel = 0;


// ---- Values you can tweak: ----
var accelamount = 0.1; //How fast the video will try to catch up with the target position. 1 = instantaneous, 0 = do nothing.
var bounceamount = 0.0; //value from 0 to 1 for how much backlash back and forth you want in the easing. 0 = no bounce whatsoever, 1 = lots and lots of bounce

// pause video on load
vid.pause();
 
window.onscroll = function(){
    //Set the video position that we want to end up at:
    targetscrollpos = window.pageYOffset/playbackConst;
  
    //move the red dot to a position across the side of the screen
    //that indicates how far we've scrolled.
    scroll.css('top', 10+(window.pageYOffset/dotControll*windowheight));
};


setInterval(function(){  
        
      //Accelerate towards the target:
      accel += (targetscrollpos - scrollpos)*accelamount;
      
      //clamp the acceleration so that it doesnt go too fast
      if (accel > 1) accel = 1;
      if (accel < -1) accel = -1;
  
      //move the video scroll position according to the acceleration and how much bouncing you selected:
      scrollpos = ((scrollpos + accel) * (bounceamount) + (targetscrollpos * (1-bounceamount)));
  
      //move the blue dot to a position across the side of the screen
      //that indicates where the current video scroll pos is.  
      time.css('top', 10+(scrollpos/dotControll*playbackConst*windowheight));
  
      //update video playback
      vid.currentTime = scrollpos;
      vid.pause();
      //console.log(vid.currentTime)
    
}, 400);