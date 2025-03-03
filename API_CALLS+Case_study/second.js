let data = [];
// const example1 = () => { return "Hello"; };
// console.log(example1()); // Output: "Hello"
// const example2 = () => {}; 
// console.log(example2()); // Output: undefined
// const example3 = () => "Hello";
// console.log(example3()); // Output: "Hello"

let trimmedArray = []
const callback = (users)=>{
    users.forEach((u)=>{
        let trim = {
            id : u.id,
            name : u.name,
            email: u.email,
            city : u.address.city,
            companyName : u.company.name
        }
        trimmedArray.push(trim);
    })
    console.log(trimmedArray);
}
function getAllusers(callback){
    fetch("https://jsonplaceholder.typicode.com/Users")
    .then((response)=>response.json()) // implicit return (return whats given inside)
    .then(j=> {
        callback(j);
    });
}
// getAllusers(callback);

const getCommentsByID =(postId) =>{
    fetch("https://jsonplaceholder.typicode.com/comments?postId="+postId)
    .then((res)=>res.json())
    .then((res)=>
        {let comments = res
    console.log(comments)})
    .catch((err)=>
    console.log(err));
}
// getCommentsByID(10);

const getAllCommentsByID = async(postId) =>{
    try{
        let res =await fetch("https://jsonplaceholder.typicode.com/comments?postId="+postId);
    let comments = await res.json();
    console.log(comments);
    console.log("Successfully fetched data...!");
    }
    catch(error){
        console.log(`Cannot find the comment with postId ${postId}`)
    }
}

// getAllCommentsByID(12)

const getAllTodos = async( req ) =>{
try{
        let needed ;
        if(req.toLowerCase() =="incomplete")
        {
            needed = false;
        }
        else if(req.toLowerCase() =="complete") 
        {
            needed = true;
        }
        let data = await fetch("http://jsonplaceholder.typicode.com/todos");
        let res = await data.json();
        console.log(`${req} titles are:`);
        let filteredArray = res.filter((e)=>e.completed == needed).map((e)=>(console.log(e.title)));

    }
    catch(error)
    {
        console.log(`we do not find such requests ${req}`);
        console.log(`error is ${req}`);
    }
}
// getAllTodos("complete");


const deConstructor =(data,addtoDb) =>{
    let {name,id,phoneNum} = data;
    // console.log(name+id+phoneNum);
    console.log("original data: "+Object.values(data));
    let deConstructedArray ={
        fstname: name.split(" ")[0],
        lasname:name.split(" ")[1],
        id:id,
        countryCode: phoneNum.split("-")[0],
        contact : phoneNum.split("-")[1] 
    }
    addtoDb(deConstructedArray);
    console.log("deConstructed array: "+Object.values(deConstructedArray));
}
const addtoDb =(data) =>{
    console.log("added successfully to the db...!")
}
// deConstructor({name:"shaik mahiz",id:1,phoneNum:"12-123456789"},addtoDb);

const displayGadgets =async ()=>{
        let data = await fetch("https://api.restful-api.dev/objects");
        let res = await data.json();
        let finalArray = []
        res.forEach((e)=>{
            let final = {
                id : e.id,
                name: e.name.split(",")[0],
                color: e.data==null ?"No color":"color" in e.data || e.name.split(",").length==3 ? e.data.color || e.name.split(",")[-1]:"No color",
                price : e.data==null? "No price":"price" in e.data ? e.data.price:0
            }
            finalArray.push(final);
        })
        console.log(finalArray);
}
 displayGadgets();

const displayRecordById = async (req) =>{
        
            let data = await fetch("https://api.restful-api.dev/objects");
        let res = await data.json();
        let finalA =  res.filter((e)=>e.id==req)
         if(finalA.length==0){
            console.log("Invalid Number")
         }
         else{
           console.log(finalA); 
         
        }
    }

displayRecordById(1);
