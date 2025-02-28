l=["1.SignUp","2.SignIn","3.Exit "]
import json
s =True
while(s):
    print(l)
    n =int(input("Enter ur Option "))
    if(n==1):
        name= input()
        password = input()
        dict={
            "username":name,
            "password":password
            }

        with open("user.json","r") as file:
            userCredentials = json.load(file)
        if(userCredentials):
            userCredentials.append(dict)
        else:
            userCredentials=[]
        with open("user.json","w") as file:
            json.dump(userCredentials,file)
        print("Added Successfully")
        
    if(n==2):
        name= input()
        password = input()
        with open("user.json","r") as file:
            userCredentials = json.load(file)
            for t in userCredentials:
                if(t["username"]==name and t["password"]==password):
                    print("Login Successfully")
                else:
                    print("User not found")
                    break 
    else:
        s = False
        break
