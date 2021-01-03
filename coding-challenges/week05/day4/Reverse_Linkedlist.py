'''https://www.geeksforgeeks.org/reverse-a-linked-list/'''


class Node:
  def __init__(self,data):
    self.data=data
    self.next=None

class Linkedlist:
  def __init__(self):
    self.head=None

  def insertelement(self,new_data):
    new_node=Node(new_data)
    new_node.next=self.head
    self.head=new_node

  def reverselinklist(self):
    current=self.head
    previous=None
    while current!=None:
      next=current.next
      current.next=previous
      previous=current
      current=next
    self.head=previous            



  def printlist(self):
    temp=self.head
    while(temp):
     print(temp.data,'->',end='')
     temp=temp.next

llist=Linkedlist()
print ("Actual Linked list")
llist.insertelement(2)
llist.insertelement(3)
llist.insertelement(4)
llist.insertelement(5)
llist.insertelement(6)
llist.insertelement(7)
llist.printlist()
llist.reverselinklist()
print("\nReverse Linked list is")
llist.printlist()
