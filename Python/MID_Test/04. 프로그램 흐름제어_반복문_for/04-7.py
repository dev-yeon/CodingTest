
#
#   7. 1~9의 숫자로 구성된 리스트를 생성하고(문제 1, 문제 2 방법 중 어떤 방법도 좋음),
#   enumerate() 함수와 for 반복문을 이용하여 구구단의 홀수단 만 화면에 출력하는 코드를 작성하시오.
#
#######################################################################################

oneToNine = list(range(1,10)) 
for  idx, num1 in enumerate(oneToNine) :
    if idx%2 ==0:
        for num2 in oneToNine:
            print(num1 * num2 , end='  ')
        print('')
    else:
        continue
