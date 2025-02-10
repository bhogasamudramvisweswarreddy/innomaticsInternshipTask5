//1. ATM Withdrawal System
function atmWithdrawal(balance,amount,enteredpin,pin){
    if(enteredpin!==pin){
        return ("Incorrect Pin")
    }
    else{
        if(amount>balance){
            return ("Insufficient Funds")
        }
        else{
            if(amount%100!==0){
                return ("Enter amount of multiplies of 100")
            }
            else{
                return ("payment successful")
            }
        }
    }
}
//console.log(atmWithdrawal(10000,5900,5678,5678))


//2. Online Shopping Discount & Free Shipping
function calaculateFinalAmount(amount){
    if(amount>1000){
        return ((20/100)*amount)
        return "You get Freeshipping"
    }
    if(50<amount<1000){
        return ((10/100)*amount)
        return "You get Freeshipping"
    }
    if(10<amount<50){
        return "Express Shopping"
    }
    else{
        return "No chance to place the order"
    }
    }
//console.log(calaculateFinalAmount(50))


//3. Student Grading System with Extra Credit
function calculateGrade(marks,attendence){
    if(attendence>90){
       marks=marks+5
        }

     if(marks>90){
        console.log("A")
    }
    else if(marks>80 && marks<89){
        console.log("B")
    }
    else if(marks>70 && marks<79){
        console.log("C")
    }
    else if(marks>60 && marks<69){
        console.log("D")
    }
    else{
        console.log("F")
    } 
        }
 
 //calculateGrade(67,70)

//4. Smart Traffic Light System
 function trafficlightcontrol(density){
    if(density==="Heavy Traffic"){
        console.log("Green for 60 seconds")
    }
    if(density==="Moderate Traffic"){
        console.log("Green For 40 Seconds")
    }
    if(density==="Light Traffic"){
        console.log("Green For 20 seconds")
    }
}

//trafficlightcontrol("Heavy Traffic")

//5. Movie Ticket Pricing with Time and Age Discount
function calaculateTicketPrice(age,showTime){
    if(showTime<5){
        if(age>60){
            console.log(12-((50/100)*12))
        }
        else if(age<12){
            console.log(12-((60/100)*12))
        }
        else{
            console.log("12")
        }
    }
    else{
        if(age>60){
            console.log(12-((30/100)*12))
        }
        else if(age<12){
            console.log(12-((40/100)*12))
        }
        else{
            console.log("12")
        }
    }
}
//calaculateTicketPrice(65,6)
//calaculateTicketPrice(65,4)


//6. Job Application Filter
function isELigibleForJob(age,experience,qualification){
    if((age>=21 && age<=55) && experience>=2 && qualification==="Bachelors's Degree"){
        console.log("The appicant is eligible for job")
    }
    else{
        console.log("The appicant is not eligible for job")
    }
}
//isELigibleForJob(19,3,"Bachelors's Degree")



//7.E-commerce Coupon Redemption
function applyCoupon(orderAmount,couponCode){
    if(orderAmount>=500 && couponCode==="DISCOUNT10"){
        console.log((10/100)*orderAmount)
    }
    else if(orderAmount>=200 && couponCode==="FREESHIP"){
        console.log("You get Free Shipping")
    }
    else{
        console.log("No offers")
    }
}
//applyCoupon(300,"DISCOUNT10")





//8. Fitness Membership Plan
function choosePlan(planType,wantsTrainer,wantsDietPlan){
    if(wantsTrainer && planType==="Premium"){
        console.log("Premium ($50/month)=> Gym+Personal Trainer")
    }
    else if(wantsTrainer &&wantsDietPlan && planType==="VIP"){
        console.log("VIP ($80/month)=> Gym+Personal Trainer+Diet Plan")
    }
    else if(!wantsTrainer && !wantsDietPlan && planType==="Basic")
    {
        console.log("Basic ($20/month)=>Only Gym")
    }
    else{
        console.log("you didnt get any access on based on what you wants")
    }
}
//choosePlan("Premium",true,false)




//9. Electricity Bill Calculation with Peak Hours
function calculateteElectricityBills(units,timeOfDay){
    if(timeOfDay==="8AM-8PM"){
        if(units<100){
            console.log(units*5)
        }
        else if(units<=100 && units>=300){
            console.log(units*4)
        }
        else{
            console.log(units*3)
        }
    }
    else if(timeOfDay==="8PM-8AM"){
        if(units<100){
            console.log((units*5)*10/100+(units*5))
        }
        else if(units<=100 && units>=300){
            console.log(((units*4)*10/100)+(units*4))
        }
        else{
            console.log((units*3)*10/100+(units*3))
        }
    }
}
//calculateteElectricityBills(200,"8AM-8PM")
//calculateteElectricityBills(200,"8PM-8AM")



//10. Flight Ticket Booking System
function calculateFlightFare(classType,luggageWeight,isSenior,isStudent){
    let charge=300
    if (classType==="Business Class"){
        charge=charge+200
     }
    else if (classType==="first Class"){
        charge=charge+500
    }
     if(luggageWeight>=30){
        let chance=(((luggageWeight/10)-2)*50)
        charge=charge+chance
    }
     if(isStudent){
        console.log(charge-(charge*(15/100)))
    }
    else if(isSenior){
        console.log(charge-(charge*(10/100)))

    }
    else if(!isSenior && !isStudent){
        console.log(charge)

    }

}
//calculateFlightFare("Business Class",50,false,false)
//calculateFlightFare("first Class",50,false,true)
