// Get the modal
var modal = document.getElementsByClassName("modal");
//console.log(modal)
// Get the button that opens the modal
var btn = document.getElementsByClassName("video-section-container");
//console.log(btn)

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
//console.log(span)

// When the user clicks on the button, open the modal
btn[0].onclick = function() {
  modal[0].style.display = "block";
  console.log("btn 1");
}

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
  modal[0].style.display = "none";
}

btn[1].onclick = function() {
  modal[1].style.display = "block";
  console.log("btn 2");

}

// When the user clicks on <span> (x), close the modal
span[1].onclick = function() {
  modal[1].style.display = "none";
}

btn[2].onclick = function() {
  modal[2].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[2].onclick = function() {
  modal[2].style.display = "none";
}

btn[3].onclick = function() {
  modal[3].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[3].onclick = function() {
  modal[3].style.display = "none";
}

btn[4].onclick = function() {
  modal[4].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[4].onclick = function() {
  modal[4].style.display = "none";
}

// // When the user clicks the button, open the modal
// for (var i = 0; i < btn.length; i++) {
//   btn[i].onclick = function(e) {
//      e.preventDefault();
//      modal = document.querySelector(e.target.getAttribute("href"));
//      modal.style.display = "block";
//   }
//  }
 
//  // When the user clicks on <span> (x), close the modal
//  for (var i = 0; i < spans.length; i++) {
//   spans[i].onclick = function() {
//      for (var index in modals) {
//        if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
//      }
//   }
//  }
 
//  // When the user clicks anywhere outside of the modal, close it
//  window.onclick = function(event) {
//      if (event.target.classList.contains('modal')) {
//       for (var index in modals) {
//        if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
//       }
//      }
//  }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}