'''https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem'''


if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    arr.sort(reverse=True)
    a=arr

    for i in range(0,len(a)):
        j = i + 1
        if a[i]==a[j]:
            continue
        elif a[i]!=a[j]:
            print (a[j])
            break
