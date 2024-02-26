nam = input("What's your name?")
print("Hello, " + nam + ", how has your day been?")
mood = int(input("1. Good, 2. Fine, 3. Bad"))
if mood == 1 :
    print("That's good! I'm glad you're having a good day, " + nam + "!")
elif mood == 2 :
    print("Oh. Well, as long as it's not bad, I'm glad.")
elif mood == 3 :
    print("Oh no! Well, I hope your day gets better, " + nam + ".")
else :
    print("I'm not sure I understand...")