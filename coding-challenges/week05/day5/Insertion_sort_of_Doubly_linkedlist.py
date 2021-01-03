'''2) https://www.geeksforgeeks.org/insertion-sort-doubly-linked-list/'''

class Node:  
    
  def __init__(self, data):  
      self.data = data  
      self.prev = None
      self.next = None

def getNode(data): 
  newNode = Node(0) 
  newNode.data = data 
  newNode.prev = newNode.next = None
  return newNode 
 
def sortedInsert(head_ref, newNode): 
  current = None 
  if (head_ref == None): 
      head_ref = newNode  
  elif ((head_ref).data >= newNode.data) : 
      newNode.next = head_ref 
      newNode.next.prev = newNode 
      head_ref = newNode 
    
  else : 
      current = head_ref
      while (current.next != None and
          current.next.data < newNode.data): 
          current = current.next
      newNode.next = current.next
      if (current.next != None): 
          newNode.next.prev = newNode 

      current.next = newNode 
      newNode.prev = current 
    
  return head_ref; 

def insertionSort( head_ref):  
  sorted = None 
  current = head_ref 
  while (current != None) : 
    next = current.next 
    current.prev = current.next = None 
    sorted = sortedInsert(sorted, current) 
    current = next
  head_ref = sorted
    
  return head_ref 

def printList(head): 

  while (head != None) : 
      print( head.data, end = " ") 
      head = head.next
  
def push(head_ref, new_data): 
  new_node = Node(0) 
  new_node.data = new_data 
  new_node.next = (head_ref) 
  new_node.prev = None

  if ((head_ref) != None): 
      (head_ref).prev = new_node 
  (head_ref) = new_node 
  return head_ref 

head = None
 
head = push(head, 7) 
head = push(head, 2) 
head = push(head, 6) 
head = push(head, 9) 
head = push(head, 13) 
head = push(head, 7) 

print( "Doubly Linked List Before Sorting") 
printList(head) 

head = insertionSort(head) 

print("\nDoubly Linked List After Sorting") 
printList(head)
