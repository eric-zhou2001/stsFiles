def display(segment,X):
   
    seg = [segment[0],segment[1]]
    ratio = segment[2]

    while X != -1:
        print(seg)    
        for i in range(len(seg) - 1):
            start = seg[i]
            end = seg[i + 1]
            seg.insert(i + 1,start+(end-start)*ratio)
            seg.insert(i + 1,start+((end-start)*(1-ratio)))
        X-=1

X = int(input())            
segment = [0,10,.7]
display(segment,X)
