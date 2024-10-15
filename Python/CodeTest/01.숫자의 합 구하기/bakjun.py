def solution(N: int, K: int) -> int:

    return None

if __name__ == '__main__':
    # 테스트 케이스 실행 및 결과 출력
    # print(solution(7, 3))
    
    # 백준 제출용 코드
    import sys
    input = sys.stdin.readline
    
    N, K = map(int, input().split())
    result = sum(solution(N, K))
    print("<%s>" % (", ".join(map(str, solution(N, K)))))