'''https://www.geeksforgeeks.org/given-level-order-traversal-binary-tree-check-tree-min-heap/'''

def isMinHeap(level, n): 
  for i in range(int(n / 2) - 1, -1, -1):  
#Here, left child can be returned through (2*i)+1
      if level[i] > level[2 * i + 1]: 
          return False
#Here, right child can be returned through (2*i)+2
      if 2 * i + 2 < n:
        if level[i] > level[2 * i + 2]: 
          return False
  return True


 
level = [3,4,12,11,13,17] 
n = len(level) 
if isMinHeap(level, n): 
  print("True") 
else: 
  print("False")

