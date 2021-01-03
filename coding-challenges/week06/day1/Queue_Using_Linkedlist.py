class Node: 
      
	def __init__(self, data): 
		self.data = data 
		self.next = None

class Queue: 
      
	def __init__(self): 
		self.front = self.rear = None

	def isEmpty(self): 
		return self.front == None
      
	def EnQueue(self, item): 
		temp = Node(item) 
		if self.rear == None: 
			self.front = self.rear = temp 
			return
		self.rear.next = temp 
		self.rear = temp 
  
	def DeQueue(self): 
		if self.isEmpty(): 
			return
		temp = self.front 
		self.front = temp.next
  
		if(self.front == None): 
			self.rear = None
  
	def printlist(self):
		temp=self.front
		while(temp):
			print(temp.data,'->',' ',end='')
			temp=temp.next
		print("NULL")

q = Queue() 
q.EnQueue(10) 
q.EnQueue(20)
q.EnQueue(30)
q.EnQueue(30) 
q.EnQueue(40) 
q.EnQueue(50)
print("Actual list: ") 
q.printlist()
q.DeQueue()
print("\nList after Dequeue is: ") 
q.printlist()   
print("\nQueue Front: " + str(q.front.data)) 
print("\nQueue Rear: " + str(q.rear.data))
