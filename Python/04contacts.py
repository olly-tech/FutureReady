# Create a contacts dictionary with some sample entries
contacts = {
    "Alice": "07700 900123",
    "Bob": "07700 900456",
    "Charlie": "07700 900789"
}

# Ask the user for a name to look up
name = input("Enter the name to look up their phone number: ")

# Check if the name is in the dictionary
if name in contacts:
    print(f"{name}'s phone number is: {contacts[name]}")
    
    # Ask if the user wants to update the phone number
    update = input("Do you want to update this phone number? (yes/no): ").lower()
    
    if update == "yes":
        new_number = input("Enter the new phone number: ")
        contacts[name] = new_number
        print(f"{name}'s phone number has been updated to: {contacts[name]}")
    else:
        print("No changes made.")
else:
    print(f"Sorry, {name} is not in the contacts.")
