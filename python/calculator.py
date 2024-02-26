def addnumb() :
    x = int(input("First Number"))
    y = int(input("Second Number"))
    z = x + y
    txt = "Your number is {}"
    print(txt.format(z))
def multnumb() :
    x = int(input("First Number"))
    y = int(input("Second Number"))
    z = x * y
    txt = "Your number is {}"
    print(txt.format(z))
puh = input("Do you wanna add or multiply?")
if puh == "add" :
    addnumb()
elif puh == "multiply" :
    multnumb()
else :
    print("stop")