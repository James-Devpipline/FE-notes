####### 01/24/23 
# Write a program that takes any number and makes it negative
# EX: 5 => -5
#  -5 => -5
# Bonus: Account for 0

# PSUEDO CODING AND TALKING OUT LOUD FOR INTERVIEWS

# take some input from user
# validate input isn't blank and if its a number
# check if num is zero


def number_changer():
  number_change = input('Input a number \n > ')

  if number_change:
    try:
      if float(number_change) <= 0:
        return(f'Number is {number_change}')
      else:
        number_change = f'-{number_change}'
        return(number_change)
    except:
      return("INVALID INPUT")
  else:
    return('NO INPUT ENTERED')

print(number_changer())