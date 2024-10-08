# test06.py


def niceTime(n):
  i =  1
  while i < n :
    print(f"i = {i}")
    i = i * 2
# i 가 16에 닿기 전까지만 실행 된다.n은 2로 곱해짐 


if __name__ == '__main__': 
  niceTime(16)

#  O (log 𝑛) 이 되는 로그시간. 