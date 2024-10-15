# https://school.programmers.co.kr/learn/courses/30/lessons/12932?language=python3
def solution(n):
    
    answer = []
    answer = list(str(n)) # 1. 숫자를 문자열로 변환하고 리스트로 만듬
    
    answer = list(map(int, answer[::-1]))  # 2. 리스트를 뒤집고, 각 문자열을 숫자로 변환
    return answer