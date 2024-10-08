# https://www.acmicpc.net/submit/24262 

def MenOfPassion(A ):  
    n = len(A)
    i = n // 2  # 정수 나누기를 사용  #O(1)
    return A[i]  # A의 중간 요소 반환

# 특별한 처리 없이 항상 1 회만 처리되므로 상수시간
# O(1)
if __name__ == '__main__':
  A = [1, 2, 3]  # 예시 리스트
  result = MenOfPassion(A)
  print("1. 총합: ", result)