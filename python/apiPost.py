import requests

import requests
import json
apiUrl="https://jsonplaceholder.typicode.com/posts"
postData={
    "title":"foo",
    "body":"bar",
    "userId":1
}
response=requests.post(apiUrl,postData)
#i wnat to check weather this above api has worked or not
#best way to do that is to check status_code,if 200 then all ok and in some cases it may be 201 that is also ok 
#to know that we use print(response)then we can know exact response 
print(response)
if response.status_code==200 or response.status_code==201:
    p=response.json()
    print("post inserted",p)
else:
    print("op failed")