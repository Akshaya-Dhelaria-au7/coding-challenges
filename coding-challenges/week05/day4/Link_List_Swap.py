'''https://www.geeksforgeeks.org/pairwise-swap-elements-of-a-given-linked-list/'''

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

  def swap(self):
    temp=self.head
    if temp==None:
      return

    while temp!=None and temp.next!=None:
      temp.data,temp.next.data=temp.next.data,temp.data
      temp=temp.next.next

  def printlist(self):
    temp=self.head
    while(temp):
      print (temp.data,'->',end='')
      temp=temp.next



llist=Linkedlist()
print ("List before swapping")
llist.insertelement(2)
llist.insertelement(3)
llist.insertelement(4)
llist.insertelement(5)
llist.insertelement(6)
llist.insertelement(7)
llist.insertelement(8)
llist.printlist()
print ("\nList after swapping")
llist.swap()
llist.printlist()
