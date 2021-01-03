'''Given a sorted array and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.'''


element=7
list=[1,3,5,6,8]
n=len(list)
#Index is used to find the position of the value within the list
index=list.index(6)
print("Position of index in list is",index)

#Insert element at beginning
if element < list[0]:
    list.insert(element)
elif element > list[n-1]:
#Insert element at the end of list
    list.append(element)
for i in range(n-1):
  if list[i]<=element<=list[i+1]:
    list.insert(i+1,element)
    break
print (list)
