'''Giant Numbers'''
a=input()
x=a.split(' ')
c=int(x[0]*x[1])
print(c)



'''Remove duplicates from Linked List'''
class Node:
  def __init__(self,data):
    self.data=data
    self.next=None

class linkedlist:
  def __init__(self):
    self.head=None

  def insertelements(self,new_data):
    new_node=Node(new_data)
    new_node.next=self.head
    self.head=new_node

  def removeduplicates(self):
    temp=self.head
    if temp==None:
      return
    while temp.next is not None: 
      if temp.data == temp.next.data: 
        next_element = temp.next.next
        temp.next = None
        temp.next = next_element 
      else: 
        temp = temp.next
    return self.head
    
  def printlist(self):
    temp=self.head
    while(temp):
      print(temp.data,end=' ')
      temp=temp.next
    print()

llist=linkedlist()
inputEle=input()
listInput=inputEle.split(' ')
for elements in listInput[::-1]:
    llist.insertelements(int(elements))
#llist.printlist()
llist.removeduplicates()
llist.printlist()




'''World War 3'''
def largestRectangle(h):
    s = []
    ans = len(h)
    h.append(0)
    
    for i in range(len(h)):
        left_index = i
        while len(s) > 0 and s[-1][0] >= h[i]:
            last = s.pop()
            left_index = last[1]
            ans = max(ans, h[i] * (i + 1 - last[1]))
            ans = max(ans, last[0] * (i - last[1]))
        s.append((h[i], left_index))
    
    return ans

x=input()
x=x.split(' ')
list1=[]
for eachVal in x:
    list1.append(int(eachVal))
print(largestRectangle(list1)*600)




'''All the in-builts'''
str1=input()
if(str1=="string"):
    str1=input()
    print(str1.upper())
    str3=input()
    print(str1[::-1])
    str4=input()
    result=sorted(str1, key=lambda str1: (str1.upper(), str1.lower()))
    x=''.join(result)
    print(x)
    str5=input()
    print(str1.isdigit())
    str6=input()
    str6=input()
    str19=str6.split(' ')[1]
    print(str1.find(str19))




