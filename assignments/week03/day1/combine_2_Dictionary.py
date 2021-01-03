'''Write a Python program to combine two dictionary adding values for common keys'''


d1 = {'a': 100, 'b': 200, 'c':300}
d2 = {'a': 300, 'b': 200, 'd':400}
d3={}
for keys,values in d1.items():
  # print(keys)
  # print(values)
  d3[keys]=values
# print(d3) 
for keys,values in d2.items():
  # print (keys)
  # print (values)
  if d3.get(keys):
    d3[keys]=d3[keys]+values
  else:
    d3[keys]=values
print(d3)
