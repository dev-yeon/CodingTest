def tax_calc(money):
  return money * 0.35


def pay_tax(tax):
  print("thank you for paying", tax)

to_pay = tax_calc(150000000)
# return과 비슷하다. 
pay_tax(to_pay)

# 더 짧게 하면.
pay_tax(tax_calc(150000000))