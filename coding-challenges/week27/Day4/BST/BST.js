var checkNodeHelper = function(node, minVal, maxVal) {
    
    if (!node) {
        return true
    }
    else{
        
        if(minVal !== null  && node.val <= minVal ){
            return false
        }
        else if(maxVal !== null && node.val >= maxVal){
            return false
        }
        
        return checkNodeHelper(node.left, minVal, node.val) && checkNodeHelper(node.right, node.val, maxVal)
    }
}
var isValidBST = function(root) {
    
    if(!root) {
        return true
    }
    
    return checkNodeHelper(root, null, null)
    
};