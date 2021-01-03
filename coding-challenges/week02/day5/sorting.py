tobeSorted = "94848448"
a = [0] * 10
for i in tobeSorted:
  b=int(i)
  a[b] = a[b] + 1

i=0
while(i<len(a)):
  if(a[i]==0):
    i=i+1
    continue;
  else:
    for j in range(0,a[i]):
      print(i)
    i=i+1

