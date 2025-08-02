def is_armstrong_number(number):
  num_digits = len(str(number))
  sum_of_powers = sum(int(digit) ** num_digits for digit in str(number))
  return sum_of_powers == number

