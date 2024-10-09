
my_name = "nico"
my_age = 12
my_color_eyes = "brown"
# f => format
# print(f"Hello, I'm {my_name}, I have {my_age} years in the earth, {my_color_eyes} is my eye color.")


def make_juice(fruit):
  return f"{fruit}+🥤"  
  print("무시됨, return은 함수를 끝내버림.")

def add_ice(juice):
  return f"{juice}+🧊"

def add_sugar(iced_juice):
  return f"{iced_juice}+🍬"

juice = make_juice("🍎")

print(juice)
cold_juice = add_ice(juice)
print(cold_juice)
perfect_juice = add_sugar(cold_juice)
print(perfect_juice)