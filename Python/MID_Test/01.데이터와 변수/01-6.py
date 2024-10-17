
###############################################################################
#
#   [6]. 문자열 함수 중 index() 함수와 문자열 슬라이싱 방법을 이용해서
#   문제 [4]에서 생성한 문자열 데이터에서 Do not be afraid to try 부분을 읽는 파이썬 코드를 작성하시오.
#
#   * index() 함수는 ()안에 전달한 문자열 패턴의 시작 인덱스를 찾아서 반환해줍니다.
#
#   Do not be afraid to try, whether you succeed or not.
#
###############################################################################
s ='Do not be afraid to try, whether you succeed or not.'
i = s.index(',')
print(i)

s3 = s[0:i]
print(s3)
