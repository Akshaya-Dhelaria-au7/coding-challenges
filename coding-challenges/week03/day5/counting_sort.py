'''Counting Sort'''

def countingSort(array):
  n = len(array)
  output = [0] * n
  count = [0] * 100
  for i in range(0, n):
    count[array[i]] += 1
  for i in range(1, 100):
    count[i] += count[i - 1]
    i = n - 1
  while i >= 0:
    output[count[array[i]] - 1] = array[i]
    count[array[i]] -= 1
    i -= 1
  for i in range(0, n):
    array[i] = output[i]
list = [23,55,12,65,35,24]
countingSort(list)
print("Sorted Array in Ascending Order: ")
print(list)
