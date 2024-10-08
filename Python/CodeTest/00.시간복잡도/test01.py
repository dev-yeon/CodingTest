# test01.py
def myfunction(arr):
  print(arr[0])   #O(1)
  print(arr[0])   #O(1)

if __name__ == '__main__':
  arr = [5,2,3,4,1]
  myfunction(arr)

# 특별한 처리 없이 항상 1 회만 처리되므로 상수시간
# O(1)
