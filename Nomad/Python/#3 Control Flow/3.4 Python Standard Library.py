# 파이썬 표준 라이브러리 문서
# https://docs.python.org/ko/3/library/index.html
from random import randint, uniform
user_choice = int(input("Choose number."))
pc_choice = randint(1,50) # I import this

if user_choice == pc_choice:
  print("You won!")
elif user_choice > pc_choice:
  print("Lower! Computer chose", pc_choice)
elif user_choice < pc_choice:
  print("Higher! Computer chose", pc_choice)

