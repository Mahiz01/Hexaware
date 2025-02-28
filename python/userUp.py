import json
import os
FILE_NAME="user_new.json"

def fileCheck():
    if(os.path.exists("user_new.json")):
        with open("user_new.json","r") as f:
            return json.load(f)
    return []
# print(fileCheck())
def signUp(dict):
    user = fileCheck()
    with open("user_new.json","w") as file:
        user.append(dict)
        json.dump(user,file)
def login(username,password):
    users = fileCheck()
    if not users:
        print("login first")
    else:
        for user in users:
            if(user["username"]==username and user["password"]==password):
                print("login successfully")
                break
            else:
                print("user not found")
                break
s=True
l=["1.SignUp","2.SignIn","3.Exit "]
while(s):
    print(l)
    n= int(input("enter your Option"))
    if(n==1):
        n = input()
        m = input()
        dict={
            "username":n,
            "password":m
        }
        signUp(dict)
    elif (n==2):
        n = input()
        m = input()
        login(n,m)
    else:
        print("Exiting")
        s=False


    

