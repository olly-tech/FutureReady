tasks = []

print("Please enter 3 tasks for your to-do list:")

for i in range(3):
    task = input(f"Task {i+1}: ")
    tasks.append(task)

print("Your To-Do List:")
for task in tasks:
    print("- " + task)