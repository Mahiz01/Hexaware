import schedule
import requests
import json
import time

def userLogin():
    URL = "https://reqres.in/api/login"
    obj ={
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
    response=requests.post(URL,obj)
    if(response.status_code==200):
        info = response.json()
        token = info
        return token['token']
    else:
        return ""

def fetchAllUsers():
    # with open("reqres.json","r") as file:
    #     token = json.loads(file)
    URL ="https://reqres.in/api/usera?page=1"
    response  = requests.get(URL)
    return response.json()

def fetchUserAutomate():
    def new_automation():
        URL ="https://reqres.in/api/usera?page=1"
        response  = requests.get(URL)
        print(response.json()) 
    schedule.every(10).seconds.do(new_automation)
    while True:
        schedule.run_pending()
        time.sleep(1)

while True:
    print("1.Login")
    print("2.Fetch all Users")
    print("3.Automate the fetch for every 30sec")
    print("4.exit")
    n =int(input("Enter the Option: "))
    if(n==1):
        token =userLogin()
        if(token == ""):
            print("Invalid Credentials")
        else:
            print("Login Success")
            with open("reqres.json","w") as file:
                json.dump(token,file,indent=2)
    if(n==2):
        res = fetchAllUsers()
        print(res)
    if(n==3):
        fetchUserAutomate()
        
    if(n==4):
        break
    