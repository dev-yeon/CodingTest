# https://www.acmicpc.net/problem/24263

def MenOfPassion(A):  
  sum = 0 
  n = len(A)
  for i in range(n):
    sum += A[i]
  return sum
# 루프가 n 번 반복되는 선형시간  

if __name__ == '__main__':
  A = [1, 2, 3]  # 예시 리스트
  result = MenOfPassion(A)
  print("2. 총합: ", result)