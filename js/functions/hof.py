def print_log(func):
    print("New log added")
    print(func())
    print("done adding behavior")


@print_log
def print_sum():
    return 1 + 1

# python js/functions/hof.py