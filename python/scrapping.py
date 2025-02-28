from bs4 import BeautifulSoup
import requests
import schedule
import time

url = "https://www.bbc.com/news"

response = requests.get(url)

def getNews():
    if response.status_code==200:
        soup = BeautifulSoup(response.text,'html.parser')
        data = soup.find_all("h2")
    for d in data:
        print("Headlines ",{d.contents[0]})
schedule.every(10).seconds.do(getNews)

while True:
    schedule.run_pending()
    time.sleep(1)