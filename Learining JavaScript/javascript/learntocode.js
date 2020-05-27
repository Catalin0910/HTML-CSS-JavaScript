//var name = "Jack";
//var age = 27;
//var shootingScore = 45.6;
//
//var message = "Hi, my name is " + name + " and i have " + age + " years old";

//var firstName = "Catalin";
//var lastName = "Cebuc";
//var dateOfBirth = "30-05-99";
//var age = 20;
//var profileImgUrl ="http://coolpicks.com//johnjacob.jpg";
//
//var loginWelcomeMessage = "Welcom, " + firstName + " " + lastName + ". Happ " + age + " birthday";
//
//console.log(loginWelcomeMessage);
//
//var sum = 10 + 15;
//var sub = 15- 10;
//var mult =10 * 3;
//var div = 9/3;
//var mod = 10 % 3;
//
//
//var msg ="10 / 3 = 3 with a remainder of " + mod;
//
//var result = 10 * (5 + 3) - 4;
//var result1 = 10 * 5 +3 - 4;
//var result2 = 10 * 5 +3 - 4 - 500;
//
//console.log(sum);
//console.log(sub);
//console.log(mult);
//console.log(div);
//console.log(msg);
//console.log(result);
//console.log(result1);
//console.log(result2);

//var student1 = "Timmy";
//var student2 = "Janny";
//var student3 = "Arun";

//var balances =[50.45, 4000.12, -300.50];

//ARRAY LIST
//var studentNames= ["Timmy", "Janny", "Arun"];
//var naughtyList =[];
//naughtyList.push(studentNames[0]);
//
//var index = naughtyList.indexOf("Timmy");
//
//if(index > -1) {
//    naughtyList = naughtyList.splice(index, 1);
//}
//console.log(index);

//var myAccountBalance = 300;
//var nikeSBShoes = 799.23;
//var coupon = 500;
//== equal to
// <= less then or equal to
// >= greater then or equal to
/// === sa caut pe net diferenta dintre == si ===

//var val1 = 20;
//var val2 ="20";
//if(val1 === val2 )
//    {
//        console.log("Astia sunt la fel!");
//    }
//else {
//    console.log("Unul nu e la fel!");
//}


//if (nikeSBShoes <= myAccountBalance) {
//    myAccountBalance = myAccountBalance -nikeSBShoes;
//    console.log("You can buy this");
//    console.log("Account balance: " + myAccountBalance);
//}
//else if(nikeSBShoes -coupon <= myAccountBalance) {
//    console.log("The cupon save you");
//    myAccountBalance -= nikeSBShoes-coupon;
//    console.log("You can buy this");
//    console.log("Account balance: " + myAccountBalance);
//}
//else{
//    console.log("you can t not afford that")
//}

//LOGIC OPERATOR
//if (1 === 1 && 2 === 2 ||  "joe" === "joe") {
//    console.log("This are both true");
//}
//
//if ( true && true) {
//    console.log("These are the same");
//}
//
//if ( 1=== 3 || "joe" === "joe") 
//    console.log("Hai sa vedem daca da true");
//
//
//var dog1 = 5;
//var dog2 = 10;
//var dog3 = 1;
//var dog3disableHandicap = true;
//
//if((dog1 > dog2 && dog1 >dog3) && !dog3disableHandicap)
//    {
//        console.log("Cel mai dragut dog1")
//    }
//else if((dog2 > dog1 && dog2 >> dog3) && !dog3disableHandicap)
//    {
//        console.log("Dog 2 dragut");
//    }
//else if((dog3 >> dog1 && dog3 >> dog2) || dog3disableHandicap)
//    {
//        console.log("Dog3 cel mai dragut");
//    }

// LOOPS
//var total = 10;
//for (var x=0 ; x < total ; x++) 
//    {
//        //iterate until told not to
//        console.log(x);
//    }

//var stundents = ["Cata", "Iulia", "Cezin", "Tuca", "Andreea"]
// for ( var i=0; i< stundents.length; i++)
//     {
//         console.log(stundents[i]);
//     }

// FUNCTIONS

//var length1 = 15;
//var width1 = 10;
//var area1 =length1 * width1;
//
//var length2 =12;
//var width2 =14;
//var area2 =length2 * width2;
//
//
//console.log(area1);
//console.log(area2);

//function area(lenght, width) {
//    return lenght * width;
//}
//
//var rectanglesAreas = [];
//rectanglesAreas.push(area(10,15));
//var area1 = area(10, 15);
//rectanglesAreas.push(area(14, 2));
//rectanglesAreas.push(area(4, 5));
//
//console.log(rectanglesAreas);
//console.log(area1);
//
//var bankBalance = 500;
//function makeTransaction(priceOfSale) {
//    if(priceOfSale <= bankBalance)
//        {
//            bankBalance -= priceOfSale;
//            console.log("Purchase succesful");
//        }
//    else {
//        console.log("Insufficient Funds");
//    }
//}
//
//console.log(bankBalance);
//makeTransaction(79.00);
//
//console.log(bankBalance);
//makeTransaction(2.32);
//
//console.log(bankBalance);
//makeTransaction(10.45);
//
//console.log(bankBalance);
//makeTransaction(450.00);
//console.log(bankBalance);
//
//var transactions = function(priceOfSale) {
//        if(priceOfSale <= bankBalance)
//        {
//            bankBalance -= priceOfSale;
//            console.log("Purchase succesful");
//        }
//    else {
//        console.log("Insufficient Funds");
//    }
//};
//
//var printCostumerName =function(first, last)
//{
//    console.log("First name: " + first + " Last name: " +last);
//}
//
//var applyForCreditCard = function(creditScore, soul)
//{
//    //call some functions to process application
//}
//
//var bankOperations = [];
//transactions(300);
//printCostumerName("Cebuc", "Catalin");
//bankOperations.push(transactions);
//bankOperations.push(printCostumerName);
//bankOperations.push(applyForCreditCard);
//
//console.log(bankOperations);


//OBJECTS

//var student0 = {
//    firstName: "SUlica",
//    lastName: "Spataru",
//    age: 21
//};
////create a new empty object
//var student1 = new Object();
//student1.firstName ="Catalin";
//student1.lastName = "Cebuc";
//student1. age = 20;
//
//var student2 = {};
//student2.firstName = "Bucica";
//student2.lastName = "COitze";
//student2.age = 22;
//
//
//var students = []
//students.push(student0);
//students.push(student1);
//students.push(student2);
// for ( var i=0; i< students.length; i++)
//     {
//         console.log(students[i]);
//     }
//console.log(students);

//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student["firstName"]);
//console.log(student["lastName"]);

//BIND face diferenta dintre functii si preia doar ce trebuie


//Percentage calculators functions
var numField1 =document.getElementById('numField1');
var numField2 =document.getElementById('numField2');
var resultField =document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentsOfY');


form.addEventListener('submit', function(event) {
    if(!numField1.value || !numField2.value){
        alert("Please enter values in the fields")
    }
    else {
        var x = parseFloat(numField1.value);
        var y= parseFloat(numField2.value);
        
        var result = x / y;
        var percent =result * 100;
        
        
        resultField.innerText = "Result: " + percent + "%";
        event.preventDefault();
    }

});
