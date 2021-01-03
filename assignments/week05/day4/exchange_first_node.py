'''https://www.geeksforgeeks.org/exchange-first-last-node-circular-linked-list/'''
'''https://www.geeksforgeeks.org/exchange-first-last-node-circular-linked-list/'''
class Node:  
    def __init__(self, data):  
      self.data = data  
      self.next = None
  
def addToEmpty(head, data): 
    if (head != None): 
        return head  
    temp = Node(data)  
    temp.data = data 
    head = temp  
    head.next = head 
    return head 
  
def addBegin(head, data): 
    if (head == None): 
        return addToEmpty(head, data) 
    temp = Node(data) 
    temp.data = data 
    temp.next = head.next
    head.next = temp 
    return head 

def traverse(head):  
    if (head == None): 
      print("List is empty.") 
      return 
    p = head 
    print(p.data, end = " ") 
    p = p.next 
    while(p != head): 
      print(p.data, end = " ") 
      p = p.next
  
def exchangeNodes(head): 
  p = head 
  while (p.next.next != head): 
      p = p.next  
  p.next.next = head.next
  head.next = p.next
  p.next = head 
  head = head.next
  
  return head  
  
head = None
head = addToEmpty(head, 6) 
for x in range(5, 0, -1): 
    head = addBegin(head, x) 
print("List Before: ", end = "") 
traverse(head) 
print() 
  
print("List After: ", end = "") 
head = exchangeNodes(head) 
traverse(head)

