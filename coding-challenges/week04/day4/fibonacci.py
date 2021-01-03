''' Using the recursive fibonacci number function, print first n fibonacci numbers'''
#Defining function
def fibonacci(n):
#If n is less than 0 it will return 0 
  if n<0:
    return 0
#If n is equal to 1 it will return 1
  elif n==1:
    return 1
#If it is greater than 1 then it will add n-1 number and n-2 number 
  else:
    return fibonacci(n-1)+fibonacci(n-2)

print(fibonacci(21))
