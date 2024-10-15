#https://www.acmicpc.net/problem/1546

def solution():
  N = int(input()) 
  result:int = 0
  numbers:list = list(map(int, input().split()))
  M:int = max(numbers)
  for num in numbers:
    result += num / M * 100  # 각 숫자를 변환하여 result에 누적
  print(result / N)  # 변환된 값들의 평균을 출력

if __name__ == "__main__":
  solution()