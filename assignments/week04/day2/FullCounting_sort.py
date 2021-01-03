'''https://www.hackerrank.com/challenges/countingsort4/problem'''

def counting_sort(list):
    min = list[0][0]
    max = list[0][0]
    for i in range(1,len(list)):
        if list[i][0] < min:
            min = list[i][0]
        if list[i][0] > max:
            max = list[i][0]
    diff = max - min
    count = [0] * (diff+1)
    for i in range(len(list)):
        count[list[i][0] - min] += 1
    for i in range(1,len(count)):
        count[i] += count[i-1]
    output = [[]] * len(list)
    for i in range(len(list)-1,-1,-1):
        output[count[list[i][0] - min]-1] = list[i]
        count[list[i][0] - min] -= 1
    for i in range(len(list)):
        list[i] = output[i]
        
n = int(input().strip())
list = []
for i in range(n):
    m = input().strip().split(' ')
    m[0] = int(m[0])
    if i < n // 2:
        m[1] = "-"
    list.append(m)
counting_sort(list)
output = ""
for i in range(n):
    output += list[i][1] + " "
print(output)
