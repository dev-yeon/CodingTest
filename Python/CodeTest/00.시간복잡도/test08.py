
# Test08.py

def foo(n):
  for i in range (1,n): # O (𝑛) 선형시간 
    j = 1
    while j < n:  # O (log 𝑛)  로그시간
      print(f"i = {i}, j = {j}")
      j = j * 2 

if __name__ == '__main__':
  foo(16)

  #  O (𝑛) x O (log 𝑛) = 𝑛log 𝑛  인 선형 로그 시간 