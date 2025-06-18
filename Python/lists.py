# LISTS

## Creating a list
fruits = ["apple", "banana", "cherry"]
print(fruits)  # Output: ['apple', 'banana', 'cherry']

## Accessing list items by index (starting at 0)
print(fruits[0])  # Output: apple

## Getting length of list
fruitslength = len(fruits)
print(fruitslength) # Output: 3 (3 items in list)

## Adding items
fruits.append("orange")
print(fruits)  # ['apple', 'banana', 'cherry', 'orange']

## Removing items
fruits.remove("banana")
print(fruits)  # ['apple', 'cherry', 'orange']

## Adding items in middle of list
fruits.insert(1, "cherry") # inserts "cherry" in second position

## Removing items in middle of list
fruits.pop(1) # removes second item in list


## looping through fruits
for fruit in fruits:
    print(fruit)



############ ACTIVITY 6

# DICTIONARIES --> OPTIONAL 
## Creating a dictionary
contact = {
    "name": "Alice",
    "phone": "123-456-7890"
}

print(contact["name"])  # Output: Alice

## Adding or updating a key
contact["email"] = "alice@example.com"
print(contact) # output now has email key/value added to it

## Use .get() method to get 
print(contact.get("phone"))  # 123-456-7890

print(contact["address"]) # ERROR
print(contact.get("address", "Not found"))  # Not found

## updating a value in a more complex way
complex_update = contact.get("bananas", 0) + 2 ## will add 2 to the banana count if there's already bananas in the dictionary, otherwise it will start at 0 and add 2
print(complex_update) ## 2 (but if we add bananas to dictionary, this can change)

# COUNTING ITEMS EXAMPLE
counts = {} # empty dictionary to store how many times the fruits appear

items = ["apple", "banana", "apple", "orange", "banana", "banana"]

# loop goes through each fruit in the list at a time. In 1st loop, item = "apple", in 2nd loop, item = "banana", 3rd loop item = "apple" etc.
for item in items:
    # counts.get(item, 0) checks if item is already in the counts dictionary. If it is, then add 1 to the disctionary, or it will add the item to the dictionary
    counts[item] = counts.get(item, 0) + 1
    print(counts) ## this will show what happens each round to counts


print(counts)
# Output: {'apple': 2, 'banana': 3, 'orange': 1}

############# ACTIVITY 7 - then go to functions.py
