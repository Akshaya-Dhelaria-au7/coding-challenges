class Node:
    def __init__(self,data):
        self.data=data
        self.next=None
    
class Linkedlist:
    def __init__(self):
        self.head=None
    
    def insertion(self,data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        
    def partitions(self,x):
        header1 = lower1 = Node(0)
        hearder2 = lower2 = Node(0)
        while(self.head):
            if(self.head.data<x):
                lower1.next = self.head
                lower1 = lower1.next
            else:
                lower2.next = self.head
                lower2 = lower2.next

        lower2.next = None
        lower1.next = header2.next
        return header1.next

    def printlist(self):
        temp = self.head
        while(temp):
            print("Linked list is",temp.data)
            temp=temp.next

llist = Linkedlist()
llist.insertion(2)
llist.insertion(5)
llist.insertion(2)
llist.insertion(3)
llist.insertion(4)
llist.insertion(1)
llist.printlist()
llist.partitions(3)
llist.printlist()