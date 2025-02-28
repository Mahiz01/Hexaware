import requests
import json
api_url="https://jsonplaceholder.typicode.com/users"

res = requests.get(api_url)
data = res.json()

for u in data:
    print(f"{u['name']}  -  {u['username']}  -  {u['address']['city']}")
    

