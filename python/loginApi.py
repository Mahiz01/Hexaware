
import requests
import json

def getEmployee():
    url ="http://localhost:5000/api/employee/login"
    token=''
    username = input('Enter username ')
    password = input('Enter password ')
    response = requests.post(url,json={
         "username": username,
        "password": password
    })

    if(response.status_code==200):
        info = response.json()
        # print(info)
        token = info
        return token 
    else:
        return ""
def getUserDetails(token):
    url ="http://localhost:5000/api/auth/user"
    header = {"Authorization":  f"Bearer {token}"}
    response = requests.get(url,headers=header)
    if(response.status_code==200):
        user = response.json()
        # print(user)
        return user
    else:
        print("invalid Credentials")
        return ""

while True:
    print("1. Employee Login")
    print("2. Admin Login")

    n= int(input("Enter your option"))

    if(n==1):
        token =getEmployee()
        # print("token-",token)
        if(token==""):
            print("Invalid Credentials of token") 
            break   
        user = getUserDetails(token)
        # print(user)
        if(user==""):
            print("Invalid Credentials")
            break

        # print(f"Welcome {user["name"]}  ROLE: {user["role"]}")
        print("welcome",user["name"],"role",user["role"])
        break
    if(n==2):
        print("Coming")
            
        




