# def solution(arr, divisor):
#     # answer = []
#     # return answer
# https://school.programmers.co.kr/learn/courses/30/lessons/12910
# def solution(arr, divisor):
#     answer = []
#     for item in arr:
#         if item % divisor ==0:
#             answer.append(item)
#         if len(answer) ==0:
#             return [-1] 
#     return sorted(answer)

def solution(arr, divisor):
    return sorted([i for i in arr if i%divisor == 0]) or [-1]