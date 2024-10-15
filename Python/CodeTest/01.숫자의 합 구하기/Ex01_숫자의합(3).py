
# from functools import reduce 

# def solution (n: int, numbers: list) -> int: # ==> O(n)
#   # mylist 의 합을 계산 
#   return reduce(lambda x, y: x + y, numbers, 0 ) # O(n)

# from functools import reduce

def solution():
    N = int(input())  # 첫 번째 줄: 숫자의 개수 N을 입력받음
    numbers = input().strip()  # 두 번째 줄: 숫자들이 공백 없이 주어짐
    result = reduce(lambda x, y: x + int(y), numbers, 0)  # 각 자릿수를 더함
    print(result)  # 결과 출력

if __name__ == "__main__":
    solution()
# reduce(function, iterable, initializer)의 형식
	# •	function: 두 개의 인자를 받는 함수.
	# •	iterable: 리스트나 다른 시퀀스.
	# •	initializer: 초기값(선택적).
  # reduce()는 리스트 numbers에서 첫 번째와 두 번째 요소를 x와 y에 전달하여 더한 후, 그 결과를 다시 다음 요소와 결합합니다.

  # lambda x, y: x + y:
	# •	이 부분은 **익명 함수(lambda 함수)**를 사용하여, 두 개의 인자 x와 y를 더하는 작업을 정의합니다.
	# •	reduce()는 리스트 numbers에서 첫 번째와 두 번째 요소를 x와 y에 전달하여 더한 후, 그 결과를 다시 다음 요소와 결합합니다.
	# •	예를 들어, 첫 번째 요소가 x이고 두 번째 요소가 y라면, 이들은 더해져 다음 값과 다시 더해지게 됩니다.