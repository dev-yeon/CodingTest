# N개의 숫자가 공백없이 써 있다. 이 숫자를 모두 합해 출력하는 프로그램을 작성하시오.
import sys
def solution(N:int , numbers: list) ->int: 
  input = sys.stdin.readline
  N = int(input())
  numbers = list(map(int, input().split()))
  print(solution(N,numbers))

# 
  ## sum(numbers)


if __name__ == '__main__':
  # 테스트 케이스 실행 및 결과 출력 
  print(solution(1,[1]))
  print(solution(5,[5,4,3,2,1]))
  print(solution(25, 7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0))

  def solution():
    N = int(input())  # 숫자의 개수 N을 입력받음 (사실 필요하지 않음)
    numbers = input().strip()  # 숫자를 문자열로 입력받음
    result = sum(map(int, numbers))  # 문자열을 각 자릿수로 나누어 합산
    print(result)  # 결과 출력

if __name__ == "__main__":
    solution()

    # def solution():
#     N = int(input())  # 첫 번째 줄: 숫자의 개수 N을 입력받음
#     numbers = input().strip()  # 두 번째 줄: 숫자들이 공백 없이 주어짐
#     result = sum(map(int, numbers))  # 각 자릿수를 정수로 변환하고 합산
#     print(result)  # 결과 출력

# if __name__ == "__main__":
#     solution()