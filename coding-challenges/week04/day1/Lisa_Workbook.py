'''https://www.hackerrank.com/challenges/lisa-workbook/problem'''

n,k = [int(x) for x in input().strip().split()]
problems_in_chapters = [int(x) for x in input().strip().split()]
count = 0
page = 1
for chapter_problem in problems_in_chapters:
    for current_problem in range(1,chapter_problem + 1):
        if(page == current_problem):
            count = count + 1
        if ((current_problem % k == 0 )or current_problem == chapter_problem):
            page = page + 1
        
print(count)
