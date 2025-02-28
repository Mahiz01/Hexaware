// var userName = "Mahiz";
// console.log(userName );
// const Name = "Harry"; // fixed value 
// console.log(Name);

// let email = "sk@gmail.com";
// email ='gh@gmail.com';
// console.log(email);


// function welcome00(){ // traditional way 
//     return "HI";
// }
// console.log(welcome00());

// function welcome01(g){ // traditional way 
//     return g;
// }
// console.log(welcome01("mahi"));


// const welcom11 = (gg)=>{ // arrow 
//     return "welcom11 " +gg;
// }
// console.log(welcom11("mona"));

// const welcom12 = (gg)=>{ // arrow 
//     return "welcom12 " + gg;
// }
// console.log(welcom12("mona"));


// const formatName = (name) =>{ // using array
// name = name.toLowerCase();
// let arr = name.split(" ");
// console.log(arr.join("_"));
// }
// formatName("Harry Potter bek");


// const formatName1 =(name)=>{ // using method 
//     name = name.toLowerCase().replaceAll(" ","_"); 
//     return name;
// }
// console.log(formatName1("Harry Potter bek"));


// let amount = 5000;

// // const balanaceCheck = (amount)=>
// //     console.log(amount) ;

// const withDraw = (amount,needed,balanaceCheck)=>{
//     amount = amount - needed;
//     console.log(needed);
//     setTimeout(()=>
//         balanaceCheck(amount),3000
//     )
    
// }


// withDraw(amount,1000,()=>{console.log(amount)});



// const bookTicker =(movieName,ticketCost,confirmTicket,ProcessTicker)=>{
// console.log(`Ticket Booking for ${movieName} in process, pls wait for Conformation`);
// setTimeout(()=>{confirmTicket(movieName)},2000);
// setTimeout(()=>{ProcessTicker(ticketCost)},3000);
// }
// bookTicker("Xmen",200,(movieName)=>console.log(`Booking confirm for ${movieName} wait till we take u to the payment screen`),(ticketCost)=>console.log(`Payement confirm for ${ticketCost}, Njoy your movie !!!`));


// Updated code 
// let movies ={
//     "Xmen":0,
//     "Black Room":3
// }

// const confirmTicket = (movieName)=>{
//     if(movies[movieName]>0){console.log(`Booking confirm for ${movieName} wait till we take u to the payment screen`);
//     movies[movieName] -=1;
//     console.log(`Remaining Movie tickets for ${movieName} `+movies[movieName])
// }
//     else{
//         console.log("HOUSE FULL");
        
//     }
    
// }

// const bookTicker =(movieName,ticketCost,confirmTicket,ProcessTicker)=>{
//     if(movieName in movies){
//         console.log(`Ticket Booking for ${movieName} in process, pls wait for Conformation`);
//     setTimeout(()=>{confirmTicket(movieName)},2000);
//     setTimeout(()=>{ProcessTicker(ticketCost)},3000);
//     }
//     else{
//         console.log("No Such Movie");
//     }
    
//     }
//     bookTicker("Black Room",200,confirmTicket,(ticketCost)=>console.log(`Payement confirm for ${ticketCost}, Njoy your movie !!!`));
    

    
const bookTicket =(movieName,ticketCost,confirmTicket)=>{
console.log(`Ticket Booking for ${movieName} in process, pls wait for Conformation`);
setTimeout(()=>{confirmTicket(movieName,ProcessTicker,ticketCost)},2000);
}
const confirmTicket = (movieName,ProcessTicker,ticketCost)=>{
    console.log(`Booking confirm for ${movieName} wait till we take u to the payment screen`)
    setTimeout(()=>{ProcessTicker(ticketCost)},3000);
}
const ProcessTicker=(ticketCost)=>{
    console.log(`Payement confirm for ${ticketCost}, Njoy your movie !!!`);
}
bookTicket("Xmen",200,confirmTicket);


// const emp = {
//     id:1,
//     name:"jk",
//     empid:"ed234",
//     dept:"Docker",
//     salary:1200
// }

// const emp1 = {
//     id:2,
//     name:"kj",
//     empid:"de934",
//     dept:"Vs",
//     salary : 1500
// }

// let arr =[emp1,emp]
// console.log(arr.length);
// let new_arr =[]
// new_arr.push(arr[0]);
// console.log("------------------------- new_array")
// console.log(new_arr[0])
// console.log("------------------------- original array")
// arr.forEach((e)=>{console.log(e)});

// let fileterdArray = arr.filter((e)=>e.dept==="Vs")
// console.log(fileterdArray);
// console.log("------------------------- new filtered array")
// let IncrementedArray = arr.filter((e)=>e.name==="kj").map((e)=>({...e,salary: e.salary+e.salary*0.1}));
// console.log(IncrementedArray);
// console.log("------------------------- incremented array")
// console.log(...arr.filter((e)=>e.name=="kj"));
// console.log("------------------------- soring")
// arr.sort((a,b)=>(a.id-b.id));
// console.log(arr);



