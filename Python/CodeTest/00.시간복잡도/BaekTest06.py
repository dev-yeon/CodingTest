# https://www.acmicpc.net/problem/24267 

def MenOfPassion(A):
  sum = 0
  n = len(A) 
  for i in range(1, n-1): # O (𝑛) (n-1)
    for j in range(i+1, n): # O (𝑛)  n/2
      for k in range(j+1, n): # O (𝑛)  n
        sum +=  A[i] * A[j] * A[k];  
  return sum

# (n-1) * (n/2) * n = n^3 - n + n^2

if __name__ == '__main__':
    A = [1, 2, 3, 4, 5]  
    result = MenOfPassion(A)
    print(" 6. 총합:", result) 

     # O (𝑛) * # O (𝑛) * # O (𝑛)  이므로 삼중포문을 도는  # O (𝑛^3) 세제곱시간이다. 