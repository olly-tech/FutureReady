# FILES
## Python can open/read/write + edit files stored on computer. E.g., .txt or .csv files
## Use for saving data, reading settings or storing logs

# OPEN FILES
readfile = open("example.txt", "r") # opens file to read

# READING A FILE
content = readfile.read() # reads whole file
line = readfile.readline() # reads one line at a time
lines = readfile.readlines() # reads all lines into a list

# USING WITH BLOCK
## closes the file automatically and stops errors with the file from crashing the whole program
with open("example.txt", "r") as readfile:
    content = readfile.read()
    print(content)
## read will end in error if the file doesn't exist.

# EDITING A FILE
with open("example.txt", "w") as writefile: # opens file to write
    content = writefile.read() # this will print nothing as the whole file is wiped when you use "w". You must use a read with block FIRST before doing any writing
    writefile.write("Hello World!")



with open("example.txt", "a") as appendfile: # opens file to append
    appendfile.write("\nAnother line.")


############# ACTIVITY 9

items = ["Apples", "Bread", "Milk"]

with open("shopping.txt", "w") as shopfile:
    for item in items:
        shopfile.write(item) ## continue to next with block to show why line 38 should be used.
        # shopfile.write(item + "\n") 
    
with open("shopping.txt", "r") as shopfile:
    contents = shopfile.read()
    print(contents) ## compare with the actual .txt file
    # print(f"Shopping List:\n{contents}")

## SEARCHING A FILE
search_item = input("Enter the item to search for: ")
# clean user input
search_item = search_item.lower()

with open("shopping.txt", "r") as readfile:
    # read all lines into list
    items = readfile.readlines()

# flag to check if item was found
found = False

# loop through each line in file
for item in items:
    # clean file input
    item = item.lower()
    item = item.strip()
    # if searched item is found in the file, then change flag and stop the for loop
    if search_item == item:
        found = True
        break

if found:
    print(f"{search_item} was found in the list")
else:
    print(f"{search_item} was not found in the list")

############# ACTIVITY 10