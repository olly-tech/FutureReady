# FUNCTIONS AND CREATING A FULL PROGRAM

# CREATING A MAIN MENU MESSAGE
menu_message = """
-------------------------
Main Menu
[1] Convert your age into months
[2] How old will you be in 2032?
[3] How long is it until your birthday?
[4] Exit
-------------------------
"""

###################
    ## MAIN MENU LOGIC - introduce before introducing functions
        # print(menu_message)
        # choice = input("Choose an option: ")

        # if choice == "1":
        #     """convert age to months"""
        # elif choice == "2":
        #     """how old will you be in 2032"""
        # elif choice == "3":
        #     """how long until your birthday?"""
        # elif choice == "4":
        #     """exit"""
        # else:
        #     """Error: not an option"""

    ## Then put in the while True: like below and add break
    ## then put into function for main menu and call it. 
    ## then add date user inputs
###################


def main_menu():

    birthdate = input("Please enter your birthdate in the following format: DD/MM/YYYY")
    currentdate = input("Please enter the today's date in the format DD/MM/YYYY")

    while True:
        print(menu_message)
        choice = input("Choose an option: ")

        if choice == "1":
            """convert age to months"""
        elif choice == "2":
            """how old will you be in 2032"""
        elif choice == "3":
            """how long until your birthday?"""
            time_until_birthday(birthdate)
        elif choice == "4":
            """exit"""
            break
        else:
            """Error: not an option"""

main_menu()


########################################
# These functions will need to be moved above main_menu fxn to work 

def age_in_2032(birthdate):
    birth_year = int(birthdate[6:])
    age_2032 = 2032 - birth_year
    print(f"In 2032, you will be {age_2032} years old.")

def convert_to_months(birthdate, currentdate):
   birth_year = int(birthdate[6:])
   birth_month = int(birthdate[3:5])
   current_year = int(currentdate[6:])
   current_month = int(currentdate[3:5])

   # Calculate total years and months difference
   age_years = current_year - birth_year
   age_months = current_month - birth_month

   # If the current month is before the birth month, subtract one year and adjust months
   if age_months < 0:
        age_years -= 1
        age_months += 12

   # Convert total age to months
   total_months = (age_years * 12) + age_months

   print(f"You are approximately {total_months} months old.")


def time_until_birthday(birthdate, currentdate):
    # Extract day and month values from the birthdate and current date
    birth_day = int(birthdate[0:2])
    birth_month = int(birthdate[3:5])
    current_day = int(currentdate[0:2])
    current_month = int(currentdate[3:5])

    # Work out how many months until the birthday
    months_until = birth_month - current_month

    # If the birthday month has already passed, add 12 to wrap around the year
    if months_until < 0:
        months_until += 12

    # If the birthday day has already passed this month, subtract 1 month
    if birth_day < current_day:
        months_until -= 1

    print(f"There are about {months_until} month(s) until your next birthday.")

##############################################

## Importing modules - using datetime OPTIONAL

# put at the top of the file
from datetime import datetime ## imports the current date (datetime)

# Rewritten time_until_birthday to be more exact!
def time_until_birthday(birthdate):
    birth_day = int(birthdate[0:2])
    birth_month = int(birthdate[3:5])

    # Get current date directly
    current_date = datetime.today()
    print(current_date) ## shows output of datetime

    # Birthday this year
    this_year_birthday = datetime(year=current_date.year, month=birth_month, day=birth_day)

    # If birthday this year has passed, consider next year
    if this_year_birthday < current_date:
        next_birthday = datetime(year=current_date.year + 1, month=birth_month, day=birth_day)
    else:
        next_birthday = this_year_birthday
    
    # Calculate the difference between the next birthday and today
    # This subtraction returns a timedelta object, and we get the number of days
    days_until = (next_birthday - current_date).days

    print(f"There are {days_until} day(s) until your next birthday.")

###############################

############ ACTIVITY 8 - then move to file.py ##

