number1=int(input("Enter the first number:"))
number2=int(input("Enter the second number:"))

while number1%number2 !=0:
  rem=number1%number2
  number1=number2
  number2=rem

print ("HCF is", number2)

