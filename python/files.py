import json 

todos=[
    {
        "title":"Complete the project",
        "priority":2
    },

    {
        "title":"Mail to Hr",
        "priority":1
    },
    {
        "title":"Check Status",
        "priority":4
    },
    {
        "title":"Assign Tasks",
        "priority":3
    }

]

sorted_todos = sorted(todos,key=lambda x:x["priority"])

with open("Sorted_json_file.json","w") as file:
    "obj" =   {
        "title":"Completed Successfully",
        "priority":5
    }
    # json.dump(sorted_todos,file,indent=3)
    file.write("obj")
    
print("Added")