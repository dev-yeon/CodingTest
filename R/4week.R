#factorial(n) = n! = n*(n-1)*...*2*1 
factorial(3)
factorial(5)

# n_P_r = factorial(n) / factorial(n-r)
# n_C_r = factorial(n) / factorial(r) / factorial(n-r)

choose(3,2) # 3_c_2 ,3 combination 2 (3개중 2개를 뽑는 경우)
choose(5,3) 

1:3
combn(1:3,2) 

1:5
combn(1:5,3)
# 문자도 뽑아 볼 수 있다. 
c("a","b","c","d","e")
combn(c("a","b","c","d","e"),3)

sample(1:5, 1)
# 각 숫자에 대해 웨이트 달리 줘서 뽑는 방법
# 웨이트 총합은 1이어야 한다.
sample(1:5, 1, prob=c(0.1,0.1,0.1,0.1,0.6))
sample(1:5, 3, prob=c(0.1,0.1,0.1,0.1,0.6))

# 디폴트 값은 비복원 추출이다. 
#만약 복원 추출로 하고 싶다면, replace =TRUE 를 넣으면 됨
sample(1:5, 3, prob=c(0.1,0.1,0.1,0.1,0.6), replace =TRUE) 
sample(1:5, 3,replace =TRUE) 

# 샘플로 뽑을때 문자로도 뽑을 수 있다. 
sample(c("Kim","Lee","Park","Choi"), 1)

# 실제로 많이 쓰이는데 
# ex) 임상실험 등등의 추출을 할때. 
# 사람이 직접 선별하면 오류가 발생할수 있어서 완전히 랜더마이즈 하게 샘플을 뽑아야 할 때, 

group1_index = sample(1:10,5)
print(group1_index)
group2_index = c(1:10)[-group1_index]
print(group2_index)

# 순서를 랜덤하게 섞고 싶을때, 
1:10
sample(1:10) 
# 갯수를 넣지 않으면 이렇게 랜덤하게 셔플 해서 돌려준다. 

# 어떤 컴퓨터에서,어떤 사람이 돌리든지 똑같은 샘플을 뽑고 싶을때는, 

# 이 seed number마다 값이generated되기 때문에, 
# 어떤 컴퓨터에서 돌려도 동일한 값이 나오게 된다. 
#고정된 seed 내에서는 똑같은 값이 나온다. 
1:10
sample(1:10)

set.seed(1)
sample(1:10)

# set.seed(1)을 고정하여 난수 시퀀스 고정
set.seed(1)
sample(1:10)  # 첫 번째 샘플링
sample(1:10)  # 두 번째 샘플링
sample(1:10)  # 세 번째 샘플링

# set.seed(2)를 고정하여 새로운 난수 시퀀스 고정
set.seed(2)
sample(1:10)  # 첫 번째 샘플링 (시드 2에 해당하는 난수)
sample(1:10)  # 두 번째 샘플링
sample(1:10)  # 세 번째 샘플링

set.seed(1)
sample(1:10)

set.seed(1)  # 시드를 다시 설정
sample(1:10)

set.seed(2)
sample(1:10)

set.seed(2)  # 시드를 다시 설정
sample(1:10)


dbinom(x, size = n, prob = p ) # P(X=x) for B(n,p)
# 이항 분포(Binomial Distribution)에서 **확률 질량 함수(PMF, Probability Mass Function)**를 계산하는 함수입니다. R에서 이항 분포를 다룰 때 사용하며, 이 함수는 특정 성공 횟수에 대한 확률을 계산합니다.

dbinom(6, size=10, prob=0.2) # choose (10,6) * (0.2)^6 * (0.8)^4
#  이항 분포를 따르는 상황에서, 10번의 시도 중에서 성공 확률이 0.2인 실험에서 정확히 6번 성공할 확률을 계산하는 함수입니다.
dbinom(6,10,0.2)

# 여러개의 확률값을 동시 계산
# 이항 분포에서 **성공 확률이 0.2(20%)**일 때, 10번의 시도에서 성공 횟수가 6번에서 10번일 확률을 각각 계산하는 것
dbinom(c(6:10),10,0.2)

# 이항 분포에서 성공 확률이 0.2(20%)인 실험을 10번 했을 때, 모든 가능한 성공 횟수(0회부터 10회까지)**에 대한 확률을 모두 더한 값 => 1 이다. 
sum(dbinom(0:10,10,0.2))

# pbinom() 함수는 이항 분포의 누적 분포 함수(CDF, Cumulative Distribution Function)를 계산합니다. 즉, 특정 성공 횟수까지의 누적 확률을 구하는 함수입니다. 이 함수는 주어진 성공 횟수 이하의 확률을 모두 더해 반환합니다.

# 성공 확률이 0.2(20%)인 실험을 10번 했을 때, 6번 이하로 성공할 확률을 계산하는 함수입니다. 이는 P(X ≤ 6)를 나타내며, 성공 횟수가 6번 이하일 확률을 계산한 결과를 반환
pbinom(6, size=10, prob=0.2) # P(X<=6)
# 성공 확률이 0.2(20%)인 실험을 10번 했을 때, 10번 이하로 성공할 확률을 계산하는 함수입니다. 이는 P(X ≤ 10)를 나타냅니다.
pbinom(10, size=10, prob=0.2) # P(X<=6)

# 이항 분포에서 두 가지 값을 계산하는 함수입니다. 이 함수는 성공 확률이 0.2(20%)인 실험을 10번 했을 때:1.	0번 이하로 성공할 확률 2.	10번 이하로 성공할 확률을 각각 계산해 반환합니다.
# pbinom(0, size=10, prob=0.2)는 0번 이하로 성공할 확률을 의미합니다. 즉, 10번의 시도에서 한 번도 성공하지 않을 확률을 계산합니다. 
# pbinom(10, size=10, prob=0.2)는 10번 이하로 성공할 확률을 의미합니다. 이 값은 0번부터 10번까지 모든 성공 횟수를 포함하므로 항상 1이 됩니다.
pbinom(c(0,10),size=10, prob=0.2) # P(X<=6)
pbinom(6, size=10, prob=0.2 , lower.tail = FALSE) # P(X>6) , 반대 확률

# 이항 분포에서 난수를 생성하는 함수입니다. 즉, 주어진 이항 분포에 따라 랜덤한 성공 횟수를 반환
rbinom(1,size=10, prob=0.2)
rbinom(5,size=10, prob=0.2)

#	•	x: 우리가 구하고자 하는 성공 횟수 (특정 성공 횟수)
#   •	s: 모집단에서의 성공 항목의 총 개수 (총 성공 수)
#   •	f: 모집단에서의 실패 항목의 총 개수 (총 실패 수)
#   •	n: 뽑을 표본의 크기 (총 추출할 항목의 개수)

dhyper(x,s,f,n) 
# P(X=x) for hypergeometric distribution with s: number of successes , f : number of fails