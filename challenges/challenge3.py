# Challenge: Write a program that sums all numbers in a list of numbers. You cannot use the built in "sum" function.
# EX: list_ sum([1, 2, 3]) => 6



# def list_sum(working_list):
#   list_length = len(working_list)
#   working_num = 0

#   for i in range(0,list_length):
#     working_num =+ float(working_list[i])

#   return(working_num)


def list_sum(working_list):
  working_num = 0

  for num in working_list:
    working_num =+ float(working_list[num])

  return(working_num)

working_list = [1,2,3]

print(f'Sum of the working list is {list_sum(working_list)}')