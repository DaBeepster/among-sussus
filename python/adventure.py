def prologue():
    begin = input("Begin? Y/N")
    if begin == "Y" :
        print("Begins")
    elif begin == "N" :
        print("Okay...")
    else: 
        print("what?")
        prologue()
def prologue1():
    option = int(input("Do you 1. Go inside, 2. Leave"))
    if option == 1 :
        print("WIP")
    elif option == 2 :
        print("You walk away, going down the road home.")
        homeroute()
    else :
        prologue1()
def homeroute() :
    print("On your way home, you hear noises coming from the trees by the road")
nam = input("Enter Your Name")
print("Hello, " + nam + ", welcome to your doom!")
prologue()
print("You find yourself standing before an abandoned mansion late at night. What do you do?")
prologue1()