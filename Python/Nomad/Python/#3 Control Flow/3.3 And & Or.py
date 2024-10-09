
age = int(input("How old are you?"))
# input 에 사용자가 뭐라고 답을 하던 그게 return 이 된다 . 

print ("user answer :", age)

print(type(age))

if age < 18:
  print("You can't drink.")
elif age >= 18 and age <= 35:
  # 18 보다 크거나 같으며, 35 보다 작거나 같은지 
  print("You drink beer!")
elif age == 60 or age == 70: 
  print("Birthday party !!")
else:
  print("Go ahead!")

True and True == True
False and True == False
True and False == False
False and False == False 

True or True == True
True or False == True
False or True == True
False or False == False 
