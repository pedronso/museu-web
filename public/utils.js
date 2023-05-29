function secondsToMinutes(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
  
    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
  }
  
  function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));
  
        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
  }
  
  const path = function (file) {
    return `./musics/${file}`;
  };
  
  export { path, secondsToMinutes, shuffle };