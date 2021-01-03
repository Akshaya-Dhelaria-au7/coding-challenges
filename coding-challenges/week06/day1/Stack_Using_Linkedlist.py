
'''Implement stack using Linkedlist'''

class Node:
	def __init__(self,data):
		self.data=data
		self.next=None

class Stack:
	def __init__(self):
		self.head=None

	def push(self,data):
		newnode=Node(data)
		newnode.next=self.head
		self.head=newnode

	def pop(self):
		if (self.isempty()):
			return None
		else:
			temp=self.head
			self.head=self.head.next
			popped=temp.data
			return popped

	def isempty(self):
		return True if self.head is None else False

	def peek(self):
		if self.isempty():
			return None
		else:
			return self.head.data

	def display(self): 
		temp = self.head 
		if self.isempty(): 
			print("Stack Underflow") 
		else: 
			while(temp):
				print(temp.data,"->",end = " ") 
				temp = temp.next
			print("None")

stack=Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.display()
stack.pop()
stack.pop()
print("\nNew Linked list is")
stack.display()
print("\nTop element is")
stack.peek()
print(stack.peek())
