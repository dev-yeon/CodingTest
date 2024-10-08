# test01.py
# def myfunction(arr):
#   print(arr[0])  
#   print(arr[0])

# if __name__ == '__main__':
#   arr = [5,2,3,4,1]
#   myfunction(arr)

# 특별한 처리 없이 항상 1 회만 처리되므로 상수시간
# O(1)

# test02.py
# def mytest(n):
#   for i in range(n):
#     print(i)
# if __name__ == '__main__':
#   mytest(5)
# 루프가 n 번 반복되는 선형시간 
# Test03.py 
# def oktime(n):
#   for i in range (1, n): 
#     for j in range(1,n):
#       print(f"안녕? i={i}, j={j}" ) # f-string 사용 
# if __name__ == '__main__': 
#   oktime(5)
# 이중 포문을 도는 제곱시간 이다. 

# Test04.py
def foobar(A): 
  total_sum = 0 
  n = len(A)

  for i in range(0, n-1):
    for j in range(i+1,n):
      total_sum += A[i] * A[j]
  return total_sum

if __name__ == '__main__':
  A = [1,2,3,4,5]
  print("결과:", foobar(A))

# Test05.py

import random
def helloworld(A):
  total_sum = 0
  n = len(A)

  for i in range(n):
    for j in range(n):
      k = max(random.sample(A, n//2))
      total_sum += k 
  return total_sum
if __name__ == '__main__':
  A = [1,2,3,4,5,6]
  result = helloworld(A)
  print("결과:",  result)