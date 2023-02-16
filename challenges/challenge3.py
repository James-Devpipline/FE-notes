# Challenge: Write a program that sums all numbers in a list of numbers. You cannot use the built in "sum" function.
# EX: list_ sum([1, 2, 3]) => 6



def list_sum(working_list):
  list_length = len(working_list)
  working_num = 0

  for i in range(0,list_length):
    working_num =+ float(working_list[i])

  return(working_num)


working_list = [1,2,3]

print(f'Sum of the working list is {list_sum(working_list)}')


# ////////how ryan did it using reduce////////
from functools import reduce

def sum_of_list(li):
  callback = lambda x, y: x + y

  return reduce(callback, li)

print(sum_of_list([1, 2, 3]))
print(sum_of_list([1, 1]))


# ////////how ryan remade reduce////////

def my_reduce(func, collection):
  total = collection[0]

  for i in collection[1:]:
    print(i)
    total = func(total, i)

    return total

callback = lambda x, y: x + y

print(my_reduce(callback, [1,2,3]))