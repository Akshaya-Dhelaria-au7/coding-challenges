'''https://www.geeksforgeeks.org/check-if-two-trees-are-mirror/'''

class Node:
	def __init__(self,data):
		self.data=data
		self.left=None
		self.right=None

def checkmirror(a,b):
#Checking if both are empty or not
	if a==None and b==None:
		return True
#Checking if 1 of them is empty or not
	elif a==None or b==None:
		return False
#Here, the data in "a" should be equal to data in "b" and whatever data is there in node "a",there should be similar data in node"b" but when we look into tree "b", the mirror image should be similar to tree "a"
	return (a.data==b.data and checkmirror(a.left,b.right) and checkmirror(a.right,b.left))

#Creating first tree
root1 = Node(50) 

root1.left = Node(40) 
root1.right = Node(60) 
root1.left.left = Node(20) 
root1.left.right = Node(30) 

#Creating another tree
root2 = Node(50)  

root2.left = Node(60) 
root2.right = Node(40) 
root2.right.left = Node(30) 
root2.right.right = Node(20)

if checkmirror(root1,root2):
	print("Yes,the binary tree is mirror of other binary tree")
else:
	print("No,the binary tree is not the mirror of other binary tree")
