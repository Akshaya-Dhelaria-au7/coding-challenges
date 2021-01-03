'''https://www.hackerrank.com/challenges/closest-numbers/problem'''
def closestNumbers(arr):
    sorted_arr = sorted(arr)
    diff = []
    for i in range(len(sorted_arr)-1):
      diff.append(sorted_arr[i+1] - sorted_arr[i])
    value = min(diff)
    result = []
    for i in range(len(sorted_arr)-1):
      if (sorted_arr[i+1] - sorted_arr[i]) == value:
        result.append(sorted_arr[i])
        result.append(sorted_arr[i+1])
    return result

n = int(input())
arr = list(map(int, input().rstrip().split()))
result = closestNumbers(arr)
print(result)
