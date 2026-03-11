x = str(input())
d = str(input())
count = 0
pos = 0
while x.find(d, pos) != -1:
    count+=1
    pos = x.find(d, pos) + 1

print(count)

