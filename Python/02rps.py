## DON'T USE .lower() at first
player_choice = input("Choose rock, paper, or scissors: ").lower()
computer_choice = input("Computer chooses rock, paper, or scissors: ").lower()

if player_choice == computer_choice:
    print("It's a tie!")

elif (player_choice == "rock" and computer_choice == "scissors") or (player_choice == "paper" and computer_choice == "rock") or (player_choice == "scissors" and computer_choice == "paper"):
    print("You win!")

    ## USE THE ABOVE FORMAT FOR THE NEXT PART UNTIL THEY DO ACTIVITY 6

elif ("rock" in player_choice and "paper" in computer_choice) or \
     ("paper" in player_choice and "scissors" in computer_choice) or \
     ("scissors" in player_choice and "rock" in computer_choice):
    print("You lose!")

else:
    print("Invalid input! Please choose rock, paper, or scissors.")