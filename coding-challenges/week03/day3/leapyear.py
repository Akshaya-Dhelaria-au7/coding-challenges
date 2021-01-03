'''You are given the year, and you have to write a function to check if the year is leap or not'''

def is_leap(year):
  if year % 400 == 0:
    return True
  if year % 100 == 0:
    return False
  return year % 4 == 0

year = int(input())
print(is_leap(year))

