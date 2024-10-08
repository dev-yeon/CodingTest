# Test03.py 
def oktime(n):
  for i in range (1, n): # O (𝑛)
    for j in range(1,n): # O (𝑛)
      print(f"안녕? i={i}, j={j}" ) # f-string 사용 
if __name__ == '__main__': 
  oktime(5)
#  O (𝑛) x O (𝑛) = O (𝑛^2)이중 포문을 도는 제곱시간 이다.