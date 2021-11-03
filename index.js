function findMin(root){
    if(root==null){
        return -1
    }
    while (root.left!==null) {
        root=root.left
    }
    return root.data
}
function findMax(root) {
    if (root==null) {
        return -1
    }
    while (root.right!==null) {
        root=root.right
        
    }
    return root.data
}