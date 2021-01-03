sum=0
product=1
count=0
while(True):
  n=str(input("Enter a number:"))
  if n=='q':
    break
  else:
    m = int(n)
    sum=sum+m
    product=product*m
    count=count+1

average=sum/count
print (product)
print (average) 

