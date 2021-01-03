var setZeroes = (matrix) => {
    var track = []
    for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix[0].length; j++){
        if(matrix[i][j] === 0) track.push([i, j])                
      }
    }
    for(var i = 0; i < track.length; i++){
      var [x, y] = track[i]
      for(var j = 0; j < matrix[0].length; j++){
        matrix[x][j] = 0
      }
      for(var j = 0; j < matrix.length; j++){
        matrix[j][y] = 0
      }
    }
    return track   
};
console.log(setZeroes([
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
    ]))