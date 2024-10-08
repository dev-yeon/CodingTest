# Test04.py
def foobar(A): 
  total_sum = 0 
  n = len(A)  # 리스트나 문자열과 같은 iterable 객체의 길이(또는 크기)를 구하는 코드 

  for i in range(0, n-1): # O (𝑛)
    for j in range(i+1,n): # O (𝑛) 
      total_sum += A[i] * A[j]
  return total_sum

if __name__ == '__main__':
  A = [1,2,3,4,5]
  print("결과:", foobar(A))


#  O (𝑛) x O (𝑛) = O (𝑛^2)이중 포문을 도는 제곱시간 이다.