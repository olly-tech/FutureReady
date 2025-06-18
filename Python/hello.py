# use print() to print something to your console
print("hello w")

# VARIABLES
integer_var = 1000
float_var = 10.80
string_var = "A bit of text"
truebool_var = True
falsebool_var = False
## use type() to find out what type a variable is
using_type = type(integer_var)
print(using_type) ## OUTPUT: <class 'int'>

## using variables to store user input
user_name = input("what is your name? ")
print(user_name)

# CONDITIONALS
## basic syntax of if
if True:
    print("this is True")

## incorporating an else
if 1 > 2:
    print("1 is bigger than 2")
else:
    print("1 is not bigger than 2")

## elif for multiple conditions
if 1 == 2:
  print("1 is greater than 2")
elif 2 > 1:
  print("1 is not greater than 2")
else:
  print("1 is equal to 2")

# RELATIONAL OPERATORS
age1 = 1
age2 = 10

if age1 == age2:
   print("they are the same");
elif age1 >= age2:
   print("age1 is bigger than or equal to age2")
elif age1 != age2:
   print("age1 is not the same as age2")

########## ACTIVITY 1
# COMBINING + CONVERTING VARIABLE TYPES
bad_combo = "hello" + 5 ## won't work because string and integer can't work together
ok_combo = 12.3 + 5 ## python converts 5 into a float to make this work

fix_badcombo = "hello" + str(5) ## changes 5 from being integer to string so this will work now when we print it! :)
print(fix_badcombo) ## output: hello5 - this is called concatenation, where you use + sign to join two things together

int_okcombo = int(12.3) + 5 ## prints an integer instead of a float
float_converstion = float(5) ## converts integer to float

# ERROR HANDLING USING TRY/EXCEPT
print("Welcome to the Apple Stall!")
user_input = input("How many apples would you like to buy? ")

try:
    apple_count = int(user_input)
    print("Great! You ordered " + str(apple_count) + " apples. Thank you!")
except:
    print("Sorry, that’s not a number. Please enter a number like 3 or 12.")


# USING F-STRINGS TO CONCATENATE STRINGS EASIER
print("Great! You ordered " + str(apple_count) + " apples. Thank you!")
print(f"Great! You ordered {apple_count} apples. Thank you!")

############ ACTIVITY 2

# LOOPING
## while loop
num = 1

while num <= 10:
    print(num)
    num += 1

## for loop
for i in range(1, 11):
  print(i)

# BREAK in a while loop
num = 1

while num <= 10:
    print(num)
    if num == 5:
        print("Reached 5, stopping the loop early with break!")
        break
    num += 1

# BREAK in a for loop
for i in range(1, 11):
    print(i)
    if i == 5:
        print("Reached 5, stopping the loop early with break!")
        break

########## ACTIVITY 3
# MORE COMPLEX IF/ELSE USING AND AND OR
temp = int(input("What's the temperature in Celsius? "))
raining = input("Is it raining? (yes/no): ")

if temp < 10 and raining == "yes":
    print("Wear a raincoat and jacket.")
elif temp < 10 and raining == "no":
    print("Wear a jacket.")
elif temp >= 10 or raining == "no":
    print("No jacket needed.")


######## ACTIVITY 4
# MORE WAYS TO HANDLE USER INPUTS
temp = int(input("What's the temperature in Celsius? "))
raining = input("Is it raining? (yes/no): ").lower() ## change string to all lowercase

if temp < 10 and "yes" in raining:
    print("Wear a raincoat and jacket.")
elif temp < 10 and "yes" not in raining:
    print("Wear a jacket.")
elif temp >= 10 or "yes" not in raining:
    print("No jacket needed.")

############# ACTIVITY 5 - then move to lists.py