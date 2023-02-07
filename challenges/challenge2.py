'''
Write a program that will build a 2d list (matriworking_num), where each element in the
sublist is cumulative from the last, and increments each one.
3
4
5
6
7
8
Input: grid area (ex: 3 => [[0, 1, 2], [3, 4, 5], [6, 7, 8]])
Output: 2d list
EX:
manual_matrix(5) => [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15,
16, 17, 18, 19], [20, 21, 22, 23, 24]]'''

def manual_matrix(length):
  working_num = 0
  z = []

  try:
    for i in range (0,length):
      y = []
      for l in range (0,length):
        y.append(working_num)
        working_num += 1
      z.append(y)
    
    return(z)


  except:
    return('INPUT ERROR')

print(f'2d range in range of 5 == {manual_matrix(5)}')

'''
Alternate:
Each nested list starts with an incremented number based on the previous list:
EX:
manual_matrix(3) => [[0, 1, 2], [1, 2, 3], [2, 3, 4]]
'''

def alt_manual_matrix(length):
  working_num = 1
  z = []

  try:
    for i in range (0,length):
      y = []
      working_num -= 1
      for l in range (0,length):
        y.append(working_num)
        working_num += 1
      z.append(y)
    
    return(z)


  except:
    return('INPUT ERROR')

print(f'Alt 2D matrix in range of 3 = {manual_matrix(3)}')