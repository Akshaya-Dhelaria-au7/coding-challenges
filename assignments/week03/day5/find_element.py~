'''Given a sorted array of integers A(0 based index) of size N, find the starting and ending position of a given integer B in array A.
Your algorithm runtime complexity must be in the order of O(log n). Return an array of size 2, such that first element = starting position of B in A and second element = ending position of B in A, if B is not found in A return [-1, -1]'''


#Here I am defining A as array of list, n is lenght of list and element is which we want to find the number of occurence 
def firstandlastindex(A,n,element):
  first=-1
  last=-1
  for i in range(0,n):
    # if element!=A[i]:
    #   continue
    if first==-1:
      first=i
    last=i
  
  if first!=-1:
    print ("First Occurence of",element, "in A is:", first)
    print ("Second Occurence of",element,"in A is:", last)
  else:
    print ("-1,-1")

A=[1,3,5,7,7,9]
print (firstandlastindex(A,6,7))


