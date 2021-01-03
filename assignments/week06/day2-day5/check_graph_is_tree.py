'''https://www.geeksforgeeks.org/check-given-graph-tree/'''

from collections import defaultdict 
  
class Graph(): 

	def __init__(self, V): 
		self.V = V 
		self.graph  = defaultdict(list) 

	def addEdge(self, v, w):  
		self.graph[v].append(w)
		self.graph[w].append(v)  

	def isCyclicUtil(self, v, visited, parent):
		visited[v] = True
		for i in self.graph[v]: 
				if visited[i] == False: 
						if self.isCyclicUtil(i, visited, v) == True: 
								return True
				elif i != parent: 
						return True
		return False
 
	def isTree(self): 
		visited = [False] * self.V
		if self.isCyclicUtil(0, visited, -1) == True: 
				return False 
		for i in range(self.V): 
				if visited[i] == False: 
						return False

		return True

g1 = Graph(5) 
g1.addEdge(1, 0) 
g1.addEdge(0, 4) 
g1.addEdge(0, 2) 
g1.addEdge(3, 4) 
if g1.isTree() == True:
	print ("Graph is a Tree")
else:
	print("Graph is a not a Tree")
