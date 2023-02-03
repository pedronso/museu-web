var addZoom = (target) => {
  //get container and img src
  let container = document.getElementsByClassName("zoomC")[target],
      imgsrc = container.currentStyle || window.getComputedStyle(container, false);
      imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g, "");
      
      Object.assign(container.style, {
        backgroundPosition: "center",
        backgroundSize: "cover"
      });   
  //load image and set zoom
  let img = new Image();
  img.src = imgsrc;
  img.onload = () => {
    //calculate zoom ratio
    let ratio = img.naturalHeight / img.naturalWidth,
        percentage = ratio * 100 + "%";
 
    //set zoom on mouse move
    container.onmousemove = (e) => {
      let rect = e.target.getBoundingClientRect(),
          xPos = e.clientX - rect.left,
          yPos = e.clientY - rect.top,
          xPercent = xPos / (container.clientWidth / 100) + "%",
          yPercent = yPos / ((container.clientWidth * ratio) / 100) + "%";
 
      Object.assign(container.style, {
        backgroundPosition: xPercent + " " + yPercent,
        backgroundSize: img.naturalWidth + "px"
      });
    };
 
    //reset zoom on mouse leave
    container.onmouseleave = (e) => {
      Object.assign(container.style, {
        backgroundPosition: "center",
        backgroundSize: "cover"
      });
    };
  }
};
 
//attach follow zoom
window.onload = () => { 
  for (let index = 0; index < document.getElementsByClassName("zoomC").length; index++) {
      addZoom(index);
  }

};
