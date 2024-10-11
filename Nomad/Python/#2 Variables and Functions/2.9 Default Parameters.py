def say_hello(user_name ="anonymous"):
  print("hello", user_name)

say_hello("nico")
say_hello() # 아무 argument도 보내지 않고 있다. 에러 대신 hello anonymous 를 보여줌.


def plus(a=0, b=0):
  print(a + b)
def minus(a=0, b=0):
  print(a - b)
def multiply(a=0, b=0):
  print(a * b)
def divide(a=0, b=1):
  print(a / b)
def power(a=0, b=1):
  print(a ** b)

plus(3,4)
minus(10,5)
multiply(2,8)
divide(6,3)
power(3,3)

plus()
minus()
multiply()
divide()
power()