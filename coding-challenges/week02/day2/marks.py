subject_1= int(input("Enter your marks in 1st subject:"))
subject_2= int(input("Enter your marks in 2nd subject:"))
subject_3= int(input("Enter your marks in 3rd subject:"))
subject_4= int(input("Enter your marks in 4th subject:"))
subject_5= int(input("Enter your marks in 5th subject:"))
sum=subject_1+subject_2+subject_3+subject_4+subject_5
percentage=sum/5

if percentage>=90:
  print ("A Grade")
elif percentage>70 and percentage<90:
  print ("B Grade")
elif percentage>50 and percentage<70:
  print ("C Grade")
elif percentage>30 and percentage<50:
  print ("D Grade")
elif percentage<30:
  print ("E Grade")
else:
  print ("Fail")
