money = int(input())

change = str(10000 - money)

a = int(change[:1])
b = int(change[1:2])
c = int(change[2:3])
d = int(change[3:4])

print(a+b+c+d) 