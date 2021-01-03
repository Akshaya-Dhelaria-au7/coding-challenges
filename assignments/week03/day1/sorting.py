'''Write a Python program to sort (ascending and descending) a dictionary by value. [use sorted()]'''

d={1:24,2:34,3:12,4:15,5:27}

print (sorted(d.values())) 
#Sorting of dictionary of values in ascending order
print (sorted(d.values(),reverse=True))
#Sorting of values in dictionary in descending order
