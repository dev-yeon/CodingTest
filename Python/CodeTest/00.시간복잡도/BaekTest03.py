# https://www.acmicpc.net/problem/24264 

def MenOfPassion(A ): 
  sum = 0;
  n = len(A)  # A의 길이
  for i in range(1, n+1): # O (𝑛)
        for j in range(1, n+1): # O (𝑛) 
            sum += sum + A[i-1] * A[j-1];
  return sum;

# 사용 예시
if __name__ == '__main__':
  A = [1, 2, 3]  # 예시 리스트
  result = MenOfPassion(A)
  print("3. 총합: ", result)

    #  O (𝑛) x O (𝑛) = O (𝑛^2)이중 포문을 도는 제곱시간 이다. 