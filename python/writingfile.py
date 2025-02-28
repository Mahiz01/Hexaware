import json 


def readFile():
    try:
        with open("Sorted_json_file.json","r") as file:
            todos = json.load(file)
        for t in todos:
            print(t)
    except Exception as e:
        print(e)
readFile()