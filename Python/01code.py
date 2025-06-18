secret_code = 1234  # secret code as integer

guess_input = input("Enter your 4-digit guess: ")

guess = int(guess_input)  # This will crash if input is not numeric

if guess >= 10000:
    print("You have entered too many digits.")
elif guess < 1000:
    print("You have not entered enough digits.")
else:
    if guess == secret_code:
        print("Congratulations! You guessed the secret code.")
    else:
        print("Incorrect guess. Try again!")


## AFTER ACTIVITY 2

secret_code = 1234  # secret code as integer

guess_input = input("Enter your 4-digit guess: ")

try:
    guess = int(guess_input)

    if guess >= 10000:
        print("You have entered too many digits.")
    elif guess < 1000:
        print("You have not entered enough digits.")
    else:
        if guess == secret_code:
            print(f"Congratulations! You guessed the secret code.")
        else:
            print(f"Incorrect guess. Try again!")
except:
    print("Sorry, that’s not a number. Please enter only digits.")


## After Activity 3

secret_code = 1234
attempts = 0
max_attempts = 3

while attempts < max_attempts:
    guess_input = input("Enter your 4-digit guess: ")
    
    try:
        guess = int(guess_input)
        
        if guess >= 10000:
            print("You have entered too many digits.")
        elif guess < 1000:
            print("You have not entered enough digits.")
        else:
            if guess == secret_code:
                print("Congratulations! You guessed the secret code.")
                break  # Exit loop on success
            else:
                print("Incorrect guess. Try again!")
                
        attempts += 1  # Count this as an attempt only if input is numeric
        
    except:
        print("Sorry, that’s not a number. Please enter only digits.")

if attempts == max_attempts:
    print("Game over! You've used all your guesses.")

### as a for loop
secret_code = 1234
max_attempts = 3

for attempt in range(max_attempts):
    guess_input = input(f"Attempt {attempt + 1} of {max_attempts}. Enter your 4-digit guess: ")
    
    try:
        guess = int(guess_input)
        
        if guess >= 10000:
            print("You have entered too many digits.")
        elif guess < 1000:
            print("You have not entered enough digits.")
        else:
            if guess == secret_code:
                print("Congratulations! You guessed the secret code.")
                break  # Exit loop on success
            else:
                print("Incorrect guess. Try again!")
                
    except:
        print("Sorry, that’s not a number. Please enter only digits.")
else:
    # This else runs if the loop completes without a break (no correct guess)
    print("Game over! You've used all your guesses.")
