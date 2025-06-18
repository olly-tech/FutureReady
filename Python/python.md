# Python Course
## Using Python with VSCode
- Download Python here: https://www.python.org/downloads/

### On Mac (from beginning of using VSCode)
- In VSCode extensions, type in "Python" and download official Microsoft version.
- Open VSCode on your files/folder: Cmd + Shift + P --> "Python: Select Interpreter" --> Make sure it's on the most recent number i.e., Python 3.13.4 or similar

Disable Code Runner extension - it doesn't work with input(). If they don't want to disable it:
- Cmd + Shift + P --> "Preferences: Open User Settings (JSON)" and add this piece of code inside the brackets at the bottom:
```
    "code-runner.executorMap": {
    "python": "python3 -u"
    },
    "code-runner.runInTerminal": true 
```


Other settings:
- Turn on AutoSave: File --> AutoSave
- Turn off CoPilot: 
    - Extensions --> Disable GitHub Copilot
    - Keep CoPilot on but turn off autocomplete: 
        - Find GitHub Copilot: Inline Suggest Enabled — uncheck this to stop inline autocompletion.
        - Find GitHub Copilot: Suggestion Enabled — uncheck to disable suggestion popup.
        - Restart VSCode for changes to take effect

### On PC 
should be very similar!

## ACTIVITIES PART 1
### Activity 1: Create a 4 digit code breaker
Instructions:
The user should be able to input a number.

If their guess matches your secret code, the console should print a message that congratulates them.

If the number the user enters is more than 4 digits, then the console should print a message that tells them they have entered too many digits

If the number the user enters is less than 4 digits, then the console should print a message that tells them they have not entered enough digits.

If the number the user enters is 4 digits, but incorrect the console should print a message that tells them their guess was incorrect.


### Activity 2: Add error handling to code breaker
Instructions:
Edit your code breaker. 
The user should be unable to put in anything that is not an integer.

### Activity 3: Edit code breaker to increase functionality
Instructions:
Edit your code breaker. 
Now, the user should be given 3 guesses before losing the game entirely.

### Activity 4: rock paper scissors game
Instructions:
The user should be able to input their choice of rock, paper or scissors

You can set the computer's choice as you wish

if the user chooses rock and the pc chooses paper, 
or the user chooses paper and the pc chooses scissors 
or the user chooses scissors and the pc chooses rock, 
the console should print that the user loses.

otherwise, the console should print that the user wins!


### Activity 5: Rock Paper Scissors Error Handling
Instructions:

Edit your rock paper scissors game to be able to handle a user inputting things like:
-  "RoCK" or "rock" or "ROCK"
- "rock please" or "i want RoCK"
You may need multiple if/else statements

Challenge: can you include any more good error handling measures for the game?

**take break here?**

## ACTIVITIES PART 2
### Activity 6: Create a to do list
The user should be asked to enter three tasks.
These tasks should be stored in a list.
Loop through the list and print each task to the user.

Challenge: can you edit your app so that the user can choose whether you display their tasks or not? HINT: you may want to use an if/else condition

Challenge: can you edit your app so that the user can choose to remove any task from the list? HINT: You may want to give the tasks on the printed To Do List numbers that the user can reference

### Activity 7: Contacts
Create a contacts dictionary with name and phone number. Ask user for a name to look up the phone number - if their name isn't in your dictionary, print an error message. If their name is in the dictionary, ask the user if they want to update the phone number, and allow them to do so if they say yes.

Challenge: Can you allow the user to add a new contact to their contacts?

Challenge: Can you create error handling for the user's input so that they only enter an 11 digit number (as this is the length of a phone number)?

Challenge: Can you make your program run until the user decides to quit?

### Activity 8: Edit Programs
Edit your contacts dictionary program by incorporating a menu and by using functions.
Your menu should allow the user to exit the program.

CHALLENGE: edit your to do list program by incorporating a way for the user to give their tasks a deadline and to be told if their tasks are due.

## ACTIVITIES PART 3

### Activity 9: Reading Files
You will need the customers.txt file.

Create a program that will read the customers.txt file and print a message that tells the user how many customers are in the list.

CHALLENGE: Can you amend the customers.txt file to include an additional name?

### Activity 10: Edit your file reading program
Edit your reading files program so that the user can check if a customer is in the file by entering a name.

CHALLENGE: If the name that the user searched is not in the file, can you edit your program so that the user will be asked whether they'd like to add the name to the customer file. The program should then add the name to the file if the user says yes. 

CHALLENGE: Can you edit your program to allow your user to remove a name from the customer list?