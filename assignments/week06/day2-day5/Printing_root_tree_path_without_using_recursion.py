'''https://www.geeksforgeeks.org/print-root-leaf-path-without-using-recursion/'''

class newNode: 
	def __init__(self, data):  
		self.data = data  
		self.left = self.right = None
  
def printTopToBottomPath(curr, parent): 
	stk = []  
	while (curr): 
		stk.append(curr)  
		curr = parent[curr]  
	while len(stk) != 0: 
		curr = stk[-1]  
		stk.pop(-1)  
		print(curr.data, end = " ") 
	print() 
  
def printRootToLeaf(root):  
	if (root == None):  
			return  
	nodeStack = [] 
	nodeStack.append(root)    
	parent = {}  
	parent[root] = None  
	while len(nodeStack) != 0:   
		current = nodeStack[-1] 
		nodeStack.pop(-1)    
		if (not (current.left) and
				not (current.right)):  
				printTopToBottomPath(current, parent) 
		if (current.right): 
				parent[current.right] = current  
				nodeStack.append(current.right) 
		if (current.left): 
				parent[current.left] = current  
				nodeStack.append(current.left) 
     
root = newNode(15)  
root.left = newNode(13)  
root.right = newNode(7)  
root.left.left = newNode(8)  
root.left.right = newNode(10)  
root.right.left = newNode(6)  
printRootToLeaf(root)

