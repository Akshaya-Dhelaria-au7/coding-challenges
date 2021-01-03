var uniquePaths = function(m, n) {
    var array = [];
    for(var i = 1;i <= m;i++) {
        for(var j = 1;j <= n;j++){
            if (i === 1 || j === 1) array[j] = 1;
            if (i !== 1&& j !== 1) array[j] += array[j - 1];
        }
    }
    return array[n];
};
// console.log(uniquePaths(3,2))
console.log(uniquePaths(7,3))