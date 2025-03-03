
#######################################################################################
#
#   1. while 반복문을 이용해서 1~9까지의 자연수를 출력하는 파이썬 코드를 작성하시오.
#
#######################################################################################

num = 1

while num < 10:
    num += 1
    print(num, end='')



#######################################################################################
#
#   2. 아래의 for 반복문을 while 반복문으로 옮기시오.
#
#######################################################################################

#########################################
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for num in nums:
    print(num, end=' ')
print('')
#########################################

num = 1

while :


#######################################################################################
#
#   3. 아래 구구단을 출력하는 for 반복문을 while 반복문으로 옮기시오.
#
#######################################################################################

#########################################
nums = list(range(1, 10))

for num1 in nums:
    for num2 in nums:
        print(num1*num2, end=' ')
    print('')

#########################################

num1 = 1
num2 = 1


while :
    while :


#######################################################################################
#
#   4. while 반복문을 이용하여 아래 기능을 수행하는 파이썬 반복문을 작성하시오.
#   ① 아래 동작을 계속(무한히) 반복한다.
#   ② 파이썬의 input()을 이용하여 사용자로부터 키보드 입력을 받는다.
#   ③ 입력받은 값이 0보다 큰(>) 경우 입력값을 화면에 출력하고 다시 키보드 입력을 대기한다.
#   ④ 입력받은 값이 0 이하(<=)인 경우 반복을 중지하고 프로그램을 끝낸다.
#   
#######################################################################################

while True:
    inputNum = int(input('숫자를 입력하세요: '))    #   사용자로부터 키보드 입력을 받습니다.

    if :

    else:


#######################################################################################
#
#   추가 스크립트. 아래 pops 리스트는 성인 20명의 키를 모아놓은 것이다. 
#   그리고 이어지는 for 반복문은 이 성인 키 리스트에서 매 5개의 원소 중 하나(인덱스 0, 5, 10, ...)만 샘플링하여 합을 구하고 있다.
#   이 for 반복문과 같은 결과를 출력하는 반복문을 while 반복문으로 작성하시오.
#
#######################################################################################

pops = [156.7, 174.5, 179.45, 162.73, 155.67, 174.13, 150.8, 177.45, 142.89, 184.51, 150.84, \
    183.47, 165.77, 171.0, 181.78, 153.27, 162.52, 146.87, 156.37, 143.03]

#########################################

sum = 0 # 합의 초기값은 0에서 부터 시작하여 누적

for idx, val in enumerate(pops):
    if idx%5 == 0:
        sum = sum + val
    else:
        continue

print('sum by for:', sum)

#########################################

# 힌트: 인덱스를 수동으로 증가시키고 pops 리스트에서 인덱싱 방법을 이용해서 값을 가져오면 인덱스, 값을 모두 사용할 수 있다.

idx = 0
sum = 0

while idx < 20:


print('sum by while:', sum)
