
class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
};

function findParent(node, val, parent)
{
    if (node == null)
        return;
 
    
    if (node.data == val)
    {
 
    
        document.write(parent);
    }
    else
    {
 
        
        findParent(node.left, val, node.data);
        findParent(node.right, val, node.data);
    }
}
 

var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
var node = 3;
 
findParent(root, node, -1);
 
 
