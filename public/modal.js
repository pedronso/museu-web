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

btn[5].onclick = function() {
  modal[5].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[5].onclick = function() {
  modal[5].style.display = "none";
}

btn[6].onclick = function() {
  modal[6].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[6].onclick = function() {
  modal[6].style.display = "none";
}

btn[7].onclick = function() {
  modal[7].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[7].onclick = function() {
  modal[7].style.display = "none";
}

btn[8].onclick = function() {
  modal[8].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[8].onclick = function() {
  modal[8].style.display = "none";
}

btn[9].onclick = function() {
  modal[9].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[9].onclick = function() {
  modal[9].style.display = "none";
}

btn[10].onclick = function() {
  modal[10].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[10].onclick = function() {
  modal[10].style.display = "none";
}

btn[11].onclick = function() {
  modal[11].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[11].onclick = function() {
  modal[11].style.display = "none";
}

btn[12].onclick = function() {
  modal[12].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[12].onclick = function() {
  modal[12].style.display = "none";
}

btn[13].onclick = function() {
  modal[13].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[13].onclick = function() {
  modal[13].style.display = "none";
}

btn[14].onclick = function() {
  modal[14].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[14].onclick = function() {
  modal[14].style.display = "none";
}

btn[15].onclick = function() {
  modal[15].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[15].onclick = function() {
  modal[15].style.display = "none";
}

btn[16].onclick = function() {
  modal[16].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[16].onclick = function() {
  modal[16].style.display = "none";
}

btn[17].onclick = function() {
  modal[17].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[17].onclick = function() {
  modal[17].style.display = "none";
}

btn[18].onclick = function() {
  modal[18].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[18].onclick = function() {
  modal[18].style.display = "none";
}

btn[19].onclick = function() {
  modal[19].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[19].onclick = function() {
  modal[19].style.display = "none";
}

btn[20].onclick = function() {
  modal[20].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[20].onclick = function() {
  modal[20].style.display = "none";
}

btn[21].onclick = function() {
  modal[14].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[21].onclick = function() {
  modal[21].style.display = "none";
}

btn[22].onclick = function() {
  modal[22].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[22].onclick = function() {
  modal[22].style.display = "none";
}


console.log(btn.length)

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