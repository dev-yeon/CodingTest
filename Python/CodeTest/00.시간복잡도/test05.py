# Test05.py

import random
def helloworld(A):
  total_sum = 0
  n = len(A)
  # print(f"len(A)={n}") # 6 

  for i in range(n): # O(n)
    for j in range(n):  # O(n)
      k = max(random.sample(A, n//2))   
      #  A 리스트에서 n//2개의 랜덤 샘플을 선택하고 그 중 최대값을 찾음
      # n에서 무작위로 선택하므로  # O(n)이다. 
      total_sum += k 
  return total_sum
if __name__ == '__main__':
  A = [1,2,3,4,5,6]
  result = helloworld(A)
  print("결과:",  result)

  #  # O(n) x  # O(n) x  # O(n) 이므로  # O(n^3) 이다.