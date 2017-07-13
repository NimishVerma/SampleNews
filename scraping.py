from bs4 import BeautifulSoup as BS
import requests
import json
import re

url="http://www.newsx.com/"
r = requests.get(url)
data = r.text
soup = BS(data,"html.parser")
objects=[]
class MyData:
    def __init__(self,title,imageurl,articleurl):
        self.t =title
        self.i=imageurl
        self.a=articleurl
        
for i in range(10):
    title=soup.find_all("div",{"class":"thumbnail"})[i].find_all("h3")[0].text
    title=title.rsplit()
    title = ' '.join(title)
    imageurl=soup.find_all("div",{"class":"thumbnail"})[i].find_all("img")[0]['src']
    articleurl=soup.find_all("div",{"class":"thumbnail"})[12].find_all("a")[0]['href']
    a=MyData(title,imageurl,articleurl)
    objects.append(a)

print json.dumps([ob.__dict__ for ob in objects])
