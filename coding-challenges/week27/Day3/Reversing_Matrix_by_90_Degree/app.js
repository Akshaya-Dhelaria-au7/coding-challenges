function rotateMatrix(matrix){
    let n = matrix.length
    for(var i = 0; i<n; i++){
        for(var j = i; j< n; j++){
            var temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix [j][i] = temp
        }
    }
    for(var i = 0; i< n; i++){
        for(var j = 0; j<(n/2); j++){
            var temp = matrix[i][j]
            matrix[i][j] = matrix[i][n-1-j]
            matrix[i][n-1-j] = temp 
    }
}
};
for(var i = 0; i< n; i++){
    matrix[i].reverse() 
} 

(rotateMatrix([ [1,2,3],
                [4,5,6],
                [7,8,9]]))
