l=[]
def hello(a):
     l.append(a)
hello("AS")
hello("AB")


def display():
    j=0
    for i in l:
        print(j,i)
        j+=1
display()


def displayV2():
    for i,val in enumerate(l):
        print(f"{i},{val}")
displayV2()