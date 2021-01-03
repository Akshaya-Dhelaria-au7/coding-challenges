def prime_number(number):
  for i in range(2, number):
    if number%i==0 :
      return False
  return True
   
prime=prime_number(48)
print (prime)

