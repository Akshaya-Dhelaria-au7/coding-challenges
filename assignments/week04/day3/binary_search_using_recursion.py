'''Write Binary Search using recursion'''


def binarysearch(A,element,low,high):
# If we don't find any value in list it will return -1
  if low>high:
    return -1
  else:
    middle=low+high//2
    if element == A[middle]:
      return middle
    elif element<A[middle]:
      return binarysearch(A,element,low,middle-1)
    else:
      return binarysearch(A,element,middle+1,high,)

A=[15,21,47,84,96,102,123,145]
n=123
tofind=binarysearch(A,123,0,12)
print ("The element", n ,"is at position:", tofind)

