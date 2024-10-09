# if, else, elif 는 모두 조건부로 우리의 코드를 실행 되게 해준다. 

winner = 50
if winner != 10: 
  print("If")
elif winner <= 25:
  print("elif")
elif winner == 0:
  print("elif2")
elif winner == 50: 
  print("elif 3")
else: 
  # if 부분의 코드가 False 일때 실행하고 싶은 코드 
  print("Else")

  # Python 은 if 부분이 true이면, 그 아래 코드는 싹 무시한다. 
  # 그 아래 코드가 참임에도 불구하고.. 쿨!
  # else 는 모든 조건을 확인하고, 모든 조건이 false 이면 실행되기 때문이다. 