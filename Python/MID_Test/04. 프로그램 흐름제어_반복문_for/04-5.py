#######################################################################################
#
#   5. 1~9의 숫자로 구성된 리스트를 생성하고(문제 1, 문제 2 방법 중 어떤 방법도 좋음),
#   enumerate() 함수와 for 반복문을 이용하여 리스트의 인덱스와 값(원소)의 쌍을 화면에 출력하시오.
#
#######################################################################################
oneToNine = list(range(1,10))
for idx, item in enumerate(oneToNine):
    print(idx, item)
