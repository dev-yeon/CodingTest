
#######################################################################################
#
#   4. 1~9의 숫자로 구성된 리스트를 생성하고(문제 1, 문제 2 방법 중 어떤 방법도 좋음),
#   생성한 리스트와 for 반복문을 이용하여 구구단을 만들고 화면에 출력하시오
#
#######################################################################################

oneToNine = list(range(1,10))

for  num1 in oneToNine: 
    for num2 in oneToNine:
        print(num1*num2, end=' ')
    print('')
