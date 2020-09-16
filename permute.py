permutations = []

def permute(num1,num2,num3):
        if num2==num1:
                permutations.append(num3)
                return
        for i in range(0,num1):
                permute(num1,num2+1,num3+str(i))
permute(2,0,"")
print(permutations)