def solution (n:int, numbers:list) -> int: # O(n)
  answer = 0  # O(1)
  for i in numbers:  # O(n)
    answer += i
  return answer  # O(1)



# sum() 함수를 사용한 리스트의 합계   


def solution():
    N = int(input())  # 첫 번째 줄: 숫자의 개수 N을 입력받음
    numbers = input().strip()  # 두 번째 줄: 숫자들이 공백 없이 주어짐
    result = 0  # 합계를 저장할 변수 초기화

    # for 문을 이용해서 각 자릿수를 정수로 변환하고 더하기 
    for num in numbers: 
       result += int(num)
    print(result)  # 결과 출력

if __name__ == "__main__":
    solution()
