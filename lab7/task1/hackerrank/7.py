if __name__ == '__main__':
    arr1=[]
    arr2=[]
    for _ in range(int(input())):
        name = input()
        score = float(input())
        arr1.append(score)
        arr2.append([name, score])
    arr1 = sorted(list(set(arr1)))
    a=arr1[1]
    names=[x[0] for x in arr2 if x[1]==a]
    names.sort()
    for x in names:
        print(x)