'''https://www.geeksforgeeks.org/level-order-tree-traversal/'''

#Creating an empty node
class Node:
	def __init__(self,data):
		self.data=data
		self.left=None
		self.right=None

class Binary_search_tree:
	def __init__(self):
		self.root=None

#Insertion function in Binary search tree
def insert(root,node):
		if root==None:
			root=node
			return
		else:
				if root.data>node.data:
					if root.left==None:
						root.left=node
					else:
						insert(root.left,node)
				else:
					if root.right==None:
						root.right=node
					else:
						insert(root.right,node)

def levelorder(root):
	h=height(root)
	for i in range(1,h+1):
		givenlevel(root,i)
		# print(i)

#It will check the given level and if the root is none, it will return or else it will check all the other levels of binary search tree
def givenlevel(root,level):
	if root==None:
		return
	elif level==1:
		print(root.data,end=' ')
	elif level>1:
		givenlevel(root.left,level-1)
		givenlevel(root.right,level-1)

#It will get the height of the tree and the height will be 3
def height(node):
	if node is None:
		return 0
	else:
		left_height=height(node.left)
		right_height=height(node.right)
		return max(left_height,right_height)+1

#Here we can also use Queue method to do level order traversal
def levelorder_queue(root):
	if root is None:
		return
#Creating an empty queue 
	queue=[]
#Here it will enqueue the root
	queue.append(root)
	while(len(queue)>0):
		print (queue[0].data,end=' ')
#Removing from queue
		node=queue.pop(0)
#Enqueue left child
		if node.left !=None:
			queue.append(node.left)
#Enqueue right child
		if node.right!=None:
			queue.append(node.right)

def inorder(root):
	if root is not None:
		inorder(root.left)
		print(root.data,end=' ')
		inorder(root.right)

r = Node(50) 
insert(r,Node(30)) 
insert(r,Node(20)) 
insert(r,Node(40)) 
insert(r,Node(10))
insert(r,Node(35))
insert(r,Node(70)) 
insert(r,Node(60)) 
insert(r,Node(80))
print("Inorder traversal is:")
inorder(r)
print()
print("\nLevel order traversal is:")
levelorder(r)
print()
print("\nLevel order traversal using Queue method:")
levelorder_queue(r)
