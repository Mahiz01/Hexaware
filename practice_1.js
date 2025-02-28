let bus =[
    {
        busName: "Hyderabad",
        busNum: 1,
        availableSeates: 20
    },
    {
        busName: "delhi",
        busNum: 2,
        availableSeates: 10
    },
    {
        busName: "Mumbai",
        busNum: 3,
        availableSeates: 5
    }
]
// bus.forEach((b)=>{console.log(b)});

const conformBooking=(numPeople)=>{
    console.log(`Seates are booked for ${numPeople}`);
}
const Booking =(busName,numPeople,conformBooking)=>{
    // it creates a new array it doesnt changes the original array
    let filteredBus = bus.filter((e)=>e.busName===busName).map((e)=>({...e,availableSeates:e.availableSeates-numPeople}));  
    console.log(filteredBus); 
    let selectedBus = bus.find((e)=>e.busName==busName);
    if(selectedBus){
        if(selectedBus.availableSeates>=numPeople){
            selectedBus.availableSeates-=numPeople;
            setTimeout(()=>{conformBooking(numPeople)},3000)
            // setTimeout(()=>{conformBooking,numPeople},3000);
        }
        else{
            console.log(`Available seats are lesser than ${numPeople}`);
        }
    }
    else{
        console.log("No such Bus");
    }
   
}
Booking("Hyderabad",2,conformBooking);