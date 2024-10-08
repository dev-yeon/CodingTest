# https://www.acmicpc.net/problem/24265 

def MenOfPassion(A):
  sum = 0  # 초기화
  n = len(A)  # A의 길이

  # i는 1부터 n-1까지 반복 (0부터 n-2까지 반복)
  for i in range(1, n):   # O (𝑛)
    for j in range(i + 1, n + 1):   # O (𝑛)
      sum += A[i - 1] * A[j - 1]  

  return sum   
#  O (𝑛) x O (𝑛) = O (𝑛^2)이중 포문을 도는 제곱시간 이다. 
# 사용 예시
if __name__ == '__main__':
    A = [1, 2, 3, 4, 5]  
    result = MenOfPassion(A)
    print("4. 총합: ", result)
