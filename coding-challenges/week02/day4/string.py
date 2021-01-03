c=str(input("enter string:"))
def countuplow(a):
  countup=0
  countlow=0
  for i in a:
    if (i.islower()):
      countlow=countlow+1
    elif (i.isupper()):
      countup=countup+1
  print ("number of uppercase is",countup)
  print ( "number of lowercase is",countlow)
  
b=countuplow(c)

