//console.log('Hellow World')
//"john"
//declare a variable
var Ernest;
//to assign the description fair to the name Ernest
var Ernest = 'fair';
//console.log (Ernest);
console.log ("uche", Ernest);    
var dogName = "Rex"
dogName = "Bingo"
console.log (dogName);
var dogSound = "purr"
console.log (dogName, "says", dogSound);
console.log(2+6);
console.log(10==5)
console.log(10<43);
console.log(8 != 4)
console.log(6==6)
console.log (10*12)
//using the logical and(&&) operator
//A code to check if currrent time variable is between 9am and 5pm using the logical and operator(&&). 
//returns true only when the two conditions are true.
var currentTime = 8
console.log(currentTime>9 && currentTime<17);
console.log(currentTime);
// var currentTime = 7
// if (currentTime>9 && currentTime <17); {
// console.log(currentTime)
// } 
//using the logical or(||) operator
// A code to check if the CurrentTime is less that 7 but greater than 5 using the or simple
// that is currentTime is not between .returns false only when the two conditions are false
var currentTime = 7
console.log(currentTime>9 || currentTime<6)
// using the logical not (!) operator, switches true to false and false to true.
var petHungary = true
console.log (petHungary)
petHungary = !petHungary;
console.log (petHungary)
//using the modulus operator (%) to determine the remainder when a  number divides another number
var restaurantX = 5
var guestsX = 22
console.log (guestsX % restaurantX)
//equality operator(==) compares the value, the data type is not considered
console.log (5=="6")
console.log(5==5)
 //strict equality operator(===) compares the value and checks the data type
 console.log (5==="5")
 console.log (5===5)
 //inequlity operator (!=) checks if two values are not the same, data type not considered
 console.log (5 != "5")
 console.log (5 != 6)
 // strict inequlity operator(!==) checksif two values are not equal, data type is considered.
 console.log(5!=="5")
 console.log(5!==5)
 //Concatenation using the plus operator(+) to join strings. when used to join numbers, it funcions as the addition operator.
 console.log ("Uche" + "nna")
 //combining strings and numbers using the + operator which gives a string value
 console.log (30 + " years")
console.log(2 + "4")
// Addition assignment operator(+=) used to accumulate the values stored in a variable.
//eg: counting the number of overtime worked in a week
var overtime = 2
overtime += 3
overtime += 1
overtime += 4
overtime += 2
console.log(overtime)
//concatenation assignment operator, same with the Additon operator except it is used for strings.
var emptyString = ""
emptyString += "My"
emptyString += " Name"
emptyString += " is"
emptyString += " Jagaban"
emptyString += "..."
console.log(emptyString)
//operator precedence and associativity- a set of rules that determines which operator should be evaluated first.
//it also determines how the precedence will work when the code uses operators with same precedence
console.log(5>4>3)  //5>4 is true which is coerced to 1, hence 1> 3 is false. (left to right associative)
//You are coding an RPG game, where each character has certain skill levels based on the value saved in their score.
var score = 8
console.log("Mid-level Skills: ", score>0 && score<10)
//Imagine you are coding a video game. Currently, you’re about to code some snippets related to the game over condition.
var timeRemaining = 0
var energy = 10
console.log ("Game over: ", timeRemaining==0 || energy ==10)
//You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10)
var num1 = 2
var num2 = 5
var num3 = 25
var num4 = 56
var test1 = num1 % 2
var test2 = num2 % 2
var test3 =num3 % 2
var test4 = num4 % 2
var result1 = test1==0
var result2 = test2== 0
var result3 =  test3 ==0
var result4 = test4 ==0
console.log("Is ", num1, "an even Number? ", result1)
console.log ("Is ", num2, "an even Number? ", result2)
console.log ("Is ", num3, "an even Number? ", result3)
console.log ("Is ", num4, "an even Number? ", result4)
//using iteration index
for (i=0; i<=5; i++){
    console.log("Hello World");
}
//Using conditonal if else with the and operator
var i =7
var j =10
if (i>8 && j<11){
    console.log("Ernest");
} else{
    console.log("Uche")
}
// Using the conditonal if else with the Or operator
var i = 4
var j = 7
if (i >5 || j>6) {
    console.log("correct");
} else{
    console.log("Incorrect")
}
// conditional if, else if, else. statement and the switch statement.
var light = "orange"
if (light == "green") {
    console.log("go")
} else if( light == "orange"){
    console.log("get ready")
} else if ( light == "red"){
    console.log ("stop")
} else {
    console.log("The color does not exist")
}
//using the switch case statement to write the same statement
var light = "orange"
switch(light) {
    case"green":
    console.log("go");
    break;
    case "orange":
        console.log("get ready");
        break;
        case "red": 
        console.log("stop");
        break;
        default:
        console.log("The color does not exist");
}
//Income based on age limit using if else if
var age = 65
if (age >=65){
    console.log("you get your income from your pension")
} else if (age>=18 && age<65) {
    console.log("each month you get a salary")
} else if (age<18 && age >10) {
    console.log("you get an allowance every month")
} else console.log("This is not a valid age")
//coding the days of the week Program as a switch statement.
var day = "Monday"
switch (day) {
    case "Monday":
    console.log("go to work by 5:54 am");
    break;
    case "Tuesday":
    console.log("go t work by 6:00am");
    break;
    case "wednesday":
    console.log("work from home");
    break;
    case "Thursday":
    console.log ("go to work by 6:15am");
    break;
    case "Sunday":
    console.log ("go to Church");
    break;
    default: 
    console.log("Rest")
}
//using the loop constructs to perform repetitive tasks
//example, the for loop
for (var i=1; i<=3; i++){
    console.log(i);
}
console.log("Happy BIrthday");
//or for the decrement
for (var i=3; i>0; i--){
    console.log(i);
}
console.log("Happy Birthday");
// The While loop.
var count= 4
while(count>0) {
    count = count-1
    console.log (count);
}
console.log("Happy birthday")
//while loop test
var i = 6
while(i>1){
    i=i-1
    console.log(i)
}
console.log("Countdown finished!")
//Nested Loop
//eg: to list the number of days in week1 and week 2 simultaneously as in a table
for (var i=1; i<=2; i++){
    for (var j=1; j<=5; j++) {
    console.log("week " + i + " day " + j)
}
}
//using nested loops to display to display summer months over two years
for (var year = 2023; year<2025; year++){
    console.log(year);
    for(var month = 6; month<9; month++){
        console.log("---------", month)
    }
}
//Using nested loop for multiplication
for (var i =1; i<3; i++){
    for(var j =1; j<11; j++)
    {
        console.log(i + " times " + j + " equals " + i*j)
    }
}
//using nested loops for division
for (var i =100; i>10; i=i-10){
    for (var j=10; j>4; j=j-5){
        console.log(i + " divided by " + j + " equals " + i/j)
    }
}
//using loops to isplaying this grid of cards showcasing the letter cubes on sale
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
//more e examples of for loop on if else if conditions
for  (var i=1; i<=10; i++){
    if (i==1){
        console.log("Gold medal") 
        } else if (i==2){console.log("Silver medal")
        } else if (i==3){console.log ("bronzen medal")
        } else{console.log(i)
        }
    }
//using switch for the loop
for(var i = 1; i<=10; i++)
switch (i){
    case 1: 
    console.log("Gold medal");
    break;
    case 2:
    console.log("silver medal");
    break; 
    case 3:
    console.log("Bronze medal");
    break;
    default:
    console.log(i);
}
//Arrays, Objects and functions. used when you want to output a code repeatedly.
//declare and call a function
function Ernest(){
    var a = 200
    var b = 2
    var c = a*b
    console.log(c)
}
//to output, ie. execute a code inside the function body, call the name of the funciton(in this case *Ernest)
Ernest(); //wehre fixed values are assigned
// Making the above fucntion more flexible, where the values are not specific
//this enables the fucntion  to run as many times as possible any time the value is inputed.
function Ernest(a,b) {
    var c = a*b
    console.log(c)
}
Ernest(200,2)//where values are passed to the function 
Ernest(5,10)
//storing data in arrays(which allows the rearrangement of sequence of items) helps buid sequence of variable in a collection
var names =["Uche", "Ernest", "Nelson", "Alice"]
console.log(names[3])
//A function That makes an array as an input and displays all the items of this array
function countryArray(country){
    for (var i = 0; i<5; i++)
    console.log(i,country[i])
}
country = ["Nigeria", "Niger", "Angola", "Mali", "Singapore", "Egypt"]; //Array items are indexed from Zero  
countryArray(country);
// to get the length of an array which counts from 1
const length = country.length;
console.log("The length of the array is "+ length);
//using the name of the array.length to make code dynamic based on the number of elements contained in the array
function countryArray(country){
    for (var i = 0; i<country.length; i++)
    console.log(i+1,country[i]) //to count the index from instead of zero(use i+1)
}
country = ["Nigeria", "Niger", "Angola", "Mali", "Singapore","Egypt"]; //Array items are indexed from Zero  
countryArray(country);
//Adding more conditions to the elements of the array and using the Index
function countryArray(country){
    for (var i = 0; i<country.length; i++){
        if (country[i] == "Nigeria"){
            console.log(i, "Green")
        } else if (country[i] == "Niger") {
            console.log(i, "black")
        } else console.log(i, [country[i]])
    }
}
country = ["Nigeria", "Niger", "Angola", "Mali", "Singapore","Egypt"]; //Array items are indexed from Zero  
countryArray(country);
//Adding more conditions to the elements of the array and using the Index
function countryArray(country){
    for (var i = 0; i<country.length; i++){
        if (country[i] == "Nigeria"){
            console.log(i*100, "Green") //specifies the color for the country based on their position(index) in the array.
        } else if (country[i] == "Niger") {
            console.log(i*100, "black")
        } else console.log(i*100, country[i])
    }
}
country = ["Nigeria", "Niger", "Angola", "Mali", "Singapore","Egypt"]; //Array items are indexed from Zero  
countryArray(country); 
//mine, coding a funciton that will be able to take a word and locate the position of a choosen letter in that given word
function letterFinder(word, match) {
    for (var i=0;  i<word.length; i++) {
 if(word[i] == match) {
    console.log('found the', match, 'at', i)
}else{ console.log('---no match found at',i)
    }
  }   
}


letterFinder("text", "t")
//thiers
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")
//use of  objects in Javascript
//using java script to build a game(cookie selling based) Nature of game is turn based
//first set character traits
    // var storeManagerMovement = 4
    // var storeMangerSocialSkills = 50
    // var storeManagerStreetSmarts = 50
    // var storeMangerHealth = 30
//Uing objects to show that the variables are related and all describe the same character
 var storeManager ={} //creating or declaring an empty object literal (storeManager)
 storeManager.rangeTilesPerTurn = 4 //variable name(Eg rangeTilesPerTurn) beocmes a property key
 storeManager.SocialSkills = 50  //and variable value(eg 4) becomes the property value of the object
 storeManager.streetSmart = 50
 storeManager.health = 30
 storeManager.nextAchievemnet = "open a new store",
 console.log (storeManager)
 console.log(storeManager.nextAchievemnet)//outputs the traits of the storeManager as a property of the Object
//building an object by listing the key value pairs inside the object literal
//it specifies them as comma delimited properties Example below
var assistantManager = {
  movement: 4,
  socialDexterity: 40,
  healthStatus:50,
  streetAbility: 60,
  nextAchievemnet: "get Promoted"
}
console.log (assistantManager) //outputs the full object- traits of the assistantManager as a property of the object
console.log(assistantManager.healthStatus)//outputs an individual property
// object literals and bracket notation, An Alternative syntax to dot notation
var storeManager ={}
storeManager["rangeTilesPerTurn"] = 40
storeManager["SocialSkills"] = 30
storeManager["streetSmart"] = 50
storeManager["nextAchievemnet"] = "Open two New Stores"
storeManager.healthStatus = 75 //mixing object literals with dot notation
storeManager["Level of Empathy and care"] = 67 //use of object literals permits the addition of spaces between the property names
console.log(storeManager)
//use of bracket notation to evaluate expressionse eg below
var Coronation =["CTL", "CAM", "COSEC", "Insurance"]  //declaration of an arrray
var staffStrength ={
    CTL: 11,
    CAM: 20,
    COSEC: 15,
    Insurance : "100 staff"
}
console.log(staffStrength)  //ouptuts the property keys with the values
for (i=0; i<Coronation.length; i++) {
    console.log(staffStrength[Coronation[i]]) //ouputs the values of the Property keys in the array
} //allows the looping through each of the values stored in the staffStrength object based on each of it's properties' key

//Arrays are objects with their own built in properties and methods//
//Extend/add to an array-push()method and trim/remove the last memeber of an array-pop()method
var animals = []  //delcare and empty array
animals.push("jaguar") //adds jaguar to the empty array
animals.push("Tiger")
animals.push("Leopard")
//console.log (animals) //outputs all the animals added to the empty array as elemnts of the array
animals.pop("Tiger")  //removes the indicated element/object of the array
//console.log(animals)

//building a function that takes it's argument and pushes them to an array example below
function numberCount(one, two, three) {
    var count =[]
    count.push(one)
    count.push(two)
    count.push(three)
    //console.log(count)
     return count
}
//numberCount('jaguar', 'Tiger', 'Leopard')  //outputs the animals objects as the arguments pushed into the array
var animalArray = numberCount('jaguar', 'Tiger', 'Leopard')
console.log(animalArray)
//Math object cheat sheet(a popular javascript built in object)
var x = Math.max(3,4,5)
 console.log(x)
 var Y = Math.min(2.5, 3.8, 3.9, 2.4)
 //Math.round(Y)
 console.log(Math.round(Y))
 //Math Random Method
 var number = Math.random()
 console.log(number)  //genrates and ouputs any random decimal number
 console.log(number*10) //multiplies the the random decimal by 10
 //to generate and round up to an integer a random number between 0 and 10
 var randomNumber = Math.random() * 10 //delcares a random number muotiplied by 10
 var roundedNumber = Math.ceil(randomNumber) //passes the random and rounds it up to an integer
 console.log(roundedNumber)

 //Array characteristics of Strings...iterable(any data type that can be iterated over using a for or loop) eg arrays and strings
var fruits = ["carrot", "Apple", "Banana"]   //iterating over and array
console.log (fruits.length)
console.log(fruits[0])
console.log(fruits[1])

for (var i=0; i<fruits.length; i++){
    console.log(fruits[i])
}
//iterating over a stirng
var fruits = "Vegetable"   //Iterating over a String
console.log (fruits.length)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])   //note, push and pop methods can only be used in an array and not in a string

for (var i=0; i<fruits.length; i++){
    console.log(fruits[i])   //outputs the loop
}
var Ernest = "is becoming good in Coding"
console.log(Ernest)
//String cheat sheet
var Greeting = "Good Morning"
var Name = "Lisa"
console.log(Greeting.length) //Length of the string(length property)
console.log(Greeting.concat( Name)) //Concatenation
console.log(Greeting + Name) //concatenation
console.log(Greeting,Name) //concatenates with an added space
console.log(Greeting.charAt(1))  //reads the individual character based on the index postion
console.log(Name.charAt(2)) //charAt is similar to how individual elements are read in an array
console.log("Lisa".indexOf("s")) //outputs the Location of the first position that matches the character
console.log("Good Morning".lastIndexOf("o"))//returns the location of the lasct postion that matches the character, else it works as IndexOf
console.log(Greeting.split(" ")) //chops up the string into an array of subtrings
//Creating arrays and objects
var clothes =[]
clothes.push("Native", "Shirt", "Short Sleeve", "Polo","v-neck")
console.log(clothes)
clothes.pop()//or clothes.pop(clothes[4])// or clothes.pop("v-neck") ie removes the last array parameter/element
console.log(clothes)
clothes.push("Ankara") //adds a new parameter in the clothes array
console.log(clothes)
console.log(clothes[2])//returns the third item in the clothers array
var favCar = {}  //delaring and empty object Literal and storing it in favCar
favCar.color = "Ash" //assigning a color property to the favCar object with a value Ash
//console.log(favCar)
favCar.IsNew = true
console.log(favCar)
//object Method
var car = {}
 car.color = "White"; //property of the object
 car.mileage = "24238"; //Property of the object
 //console.log(car)
car.turnKey = function() { //adding a method to the car object which is called as car.turnKey, the function is a property of the object car and hence referred to as a method
    console.log("engine is running")
};
car.turnLightsOn = function() {  //property of the object, in this case a method
    console.log("The lights is turned on")
};
car.turnKey()
car.turnLightsOn()
console.log(car)
//typeOf operator- used to identify the data type of an element in javascript
var score = typeof(23.99)
console.log(score)
var country = typeof(function(){console.log("Very bad country")})
console.log(country)

//carrying out addition using function
var calculate = function add(a, b) {
    return a + b;
}
var number = calculate(30,20)
console.log("Result is:", number)
//Error handling, when a bug happens, the program keeps running, but behaves in a way that is not intended, but when and an error happens, the program stops running
function multiply(a,b) {  //note that addition of a string and a number in javascript results to a concatenation
    console.log(a+b)
}
multiply("50",5)
console.log("No error yet")
//Types of errors in javascript includes syntax error(an error with syntax in the code, eg missing"" in the declaration of a string), type error and Refrence error(when a variable is not declared)
//Try and catch blocks.built-in statemments that helps your code continue to run even if an error occurs
//Also use keywords like throw and catch used to catch the error
//Throw, try and catch for error handling..test a code of block for errors using the try catch statement, a piece of code that throws an error is wrapped inside the Try block and the error is caught inside the Catch block.
console.log(a + b)
console.log("This line will never be reached if the error(Undelared parameters) is not caught")
//using a try block to catch the error 
try{
    console.log(a + b) 
  }catch(error){
    console.log(error)
   console.log("There was an error")
   console.log("The error was not saved in the error list")
    }
 console.log("The program continued running despite the error")
 //manually throwing and error.
 try{
    throw new ReferenceError()
 } catch(error){
    console.log(error)
    console.log("There was a Reference error")
 }
 console.log("The Program continued running")
 //range error
 var num = (10).toString(100); //trying to convert base 10 number to a number that does not exist in javascript
 console.log(num)
 //Undefined data type, null data type and empty strings are three types of Empty values
 //Null data type-intentional absence of any object value
 var female = 'Maureenu'
 female = (female.match(/c/)) //The letter C does not exist in the string, so Null appears to indicate absence of an object
 //console.log((female.match(/u/)))
 console.log(female)
var school
console.log(school) //undefined value. Any use of the variable before the delcalration returns undefined
school = "Theoma"
 console.log(school)
 //Accessing an undefined object
 var game ={
    score: 1000
 }
console.log(game.Score)
var nothing = " "
console.log(nothing)//returns nothing or an empty string
//Error handling task
function addTwoNum(a,b) {
       try{
        console.log(a+b)
      } catch(error){
       console.log(error)
       
}
}
addTwoNum(5, "5")
//manually inputing an error to be catch to handle the fact that 5+5 is 10 and not 55
function addTwoNum(a,b) {
    try{
     if (typeof(a) !== "number") //checks if first argument is a number
     throw new ReferenceError("The first argument is not a number")
     else if (typeof(b) !== "Ernest") //checks if the second arument is a number
     throw new ReferenceError("The second argument is not a number")
     else
     console.log(a+b)
    } catch(err){   //note that err or error is the key word for catching error
    console.log("Error!",err)   
} 
}
addTwoNum(5, "5")
console.log("the code still works")
//Exercise, Defensive Programming-This is when we assume that the arguments a function will recieve(faulty inputs) are of wrong type, or value ie expecting something to go wrong in the code and finding a way to curb the error before it happens

    function letterFinder(word, match) {
        var setCondition = typeof(word) == 'string' && word.length >= 2
        var setCondition2 = typeof(match) == 'string' && match.length == 1

        if(setCondition == true && setCondition2 == true){
        for(var i = 0; i < word.length; i++){
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }
        else{
            console.log("Please pass correct arguments to the function.")
        }
    }
    letterFinder([],[])         // incorrect requirement input(failing test)
    letterFinder("Ernest", "0a")   //incorrect requirement input(failing test)
    letterFinder("Ernest", "0")     //correct input but without a match(Passing test)
    letterFinder("Ernest", "s")     //correct input with a match(passing test)
 //OR
function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        //if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder(6, "0")
letterFinder([],[])
letterFinder("cat","c")

//Introduction to functional programming, use of Paradigms(FP-functional programming and OOP-Object oriented Progamming.. combines both data and functions into object) as the different approaches to writing code
//functional programming style
var bags =  5000
var VAT = 1.1
function amount(price, Tax){
    return(price * Tax)
}
var total = amount(bags, VAT)
console.log(total)//Hence the variable *total* with is's value can now be used anywhere else in the program
//To calcualte a currency conversion ( using functional Programming style)
var firstCurrency = 1242.46
var secondCurrency = 0
var exchangeRate = 1
function convertCurrency(amount, rate){
    return(amount * rate)
}
var secondCurrency = convertCurrency(firstCurrency, exchangeRate)  //update the value of secondCurrency by assigning the function call to as it's new value.
console.log(secondCurrency)  //N/B functional programming is used to solve a problem by seperating data from it's function
//Return values from functions, many functions by default returns the value of undefined
console.log("Hello")  //returns the string Hello 
console.log()//returns an empty value
function consoleLog(val) {
    console.log(val)
    return val
}
consoleLog() //returns an undefined value.
consoleLog("Hello") //returns the value Hello when the custom consolelog() is run
//returning values from one function inside another function(Example)
function doubleIt(fig){
    return fig*2
}
//code a function that builds an object with a specific value
function objectComp(knee){
      return{
        prop: knee
      }
}   //call the objectComp function with any value
const resulto = objectComp(30)  //returns {prop:30}
console.log(resulto)
const double = doubleIt(20).toString() //call the first fucntion and converts it value to a string ie returns "20"
console.log(double)
const comp = objectComp(doubleIt(90)) //combining the function code which returns {prop: 180}
console.log(comp)
//using the retun keywords allows for multiple function calls, return data and manipulate values. This allows the return of custom values
//Function calling and recursion - writing recusrsive functions properly and avoiding getting stuck in an infinite loop
function recursion() {
    console.log("Uc1")
    console.log("Uc2")
    console.log("Uc3")
    console.log("Uc4")
    recursion() //adding name of the function itself, repeats the function in an infinite loop when the code is run. To prevent this, see edited code below
}
recursion()//returns sequentially Uc1 Uc2 & Uc3
//preventing code a recursion function from running to ann infinite loop.
let counter = 4
function recursion() {
    console.log(counter)
    counter = counter -1
    if(counter === 0)//the if condition prevents the function from running indefintely
   return
    recursion() //name of the function itself, repeats the function in an infinite loop when the code is run.
} //note that recursion is when a function calls itself. it is an alternative way to run a repitive code without the use of loops
recursion()
//Scope- Code accessibility(it determines which part of the code are accessible and which part are inaccessible)
var cookBeans = 20//(global scope)
function score(){   // (Local scope)
    console.log(cookBeans)
}
score()
//scope types- global and local.code that exist outside a function is a global scope while code that exist inside a function is called Local scope
//funcitonal programming vs Object oriented programming as the two prgoramming paradigms(or styles of coding)
//functional programming Examples
function getsum(a,b){
    return (a+b)
}
var int1 = 1200
var int2 = 1000
var sum = getsum(int1,int2)
console.log(sum)
//Note that in function programming, data and functionality are kept seperate, data is passed into functions only when something is to be computed. eg
function calculateDistance(speed, time){
    return speed*time
}
var speed = 12
var time = 5
var distance = calculateDistance(speed, time)
console.log(distance)//new values are returned and are used somewhere else in the code
//object oriented programming (OOP)- here data and functionality are grouped as properties and methods inside objects check the example below
var mostfeminist = {
    rational: false,           //property inside an object
    equality: function(){     //method inside an object
        this.rational = true
    }
}
console.log(mostfeminist.rational)  //rational property is false
mostfeminist.equality()          //call the equality method on the mostFeminist object
console.log(mostfeminist.rational)  //rational property changes to true
//important concepts in function programming
//*first class functions, higher order functions and Pure functions and side effects
//First class functions, functions in javascript are considered as first class citizens, this means that they are values we can
// * pass to other functions, save in a variable or return from other functions
//Example where a function invocation is passed to another function
function sumTwoNum(a, b){
    console.log(a+b)
}
function randomNum(){
    return Math.floor((Math.random() * 10) +1)  //function for Random Number
}
function specificNum(){
    return 40   //Function for specific number
}
var useRandom = false
var getNumber   //declares the variable getNumber unassigned, getNumber variable is assigned to either of the declared functions based on if useRandom is True or False
if (useRandom){
    getNumber = randomNum  //stores the function randomNum in the variable getNumber if useRandom is used
}else{
    getNumber = specificNum  //stores the function specificNum in the variable getNumber if useRandom is not used
}
sumTwoNum(getNumber(), getNumber())//output based on the value of useRandom varialble
//Higer Order Functions- 1) Accepts other functions as argument and 2) returns functions when invoked
//Example of a Higher Order Function
function sumTwoNum(getNumber1, getNumber2){ //function accepting other functions as argumnent
    console.log(getNumber1() + getNumber2())  
}

function randomNum(){
    return Math.floor((Math.random() * 10) +1)  //function for Random Number
}
function specificNum(){
    return 40   //Function for specific number
}
var useRandom = true
var getNumber   //declares the variable getNumber unassigned, getNumber variable is assigned to either of the declared functions based on if useRandom is True or False
if (useRandom){
    getNumber = randomNum  //stores the function randomNum in the variable getNumber if useRandom is used
}else{
    getNumber = specificNum  //stores the function specificNum in the variable getNumber if useRandom is not used
}
sumTwoNum(specificNum, specificNum)  //returns the value of the sum of the specificNum function

sumTwoNum(specificNum, randomNum)  //returns the specifiNum plus some randomNum added to it.
//pure funcitons and side effect- this returns the exact same result as long as it is given the same value example
function sumNum(a, b){
    console.log(a + b)
}
sumNum(7, 10)
//A pure function does not have side effect(ie an instance where a function makes a change outside itself)
//Writing codes in hands-on activities called Labs(Visual studio code Lab)

//Yet to do Programming Assignement-Building a Functional Program

//Scoping with var, let and const.
//Scope relates to code accessibility-it determines which part of the code is accessible by different parts of the program
//In ES5 Version of javascript, functions build local scope(Variable are codes accessible only within the function where it is declared), recall all codes outside a fucntion are refered to as Global scope
//however, the ES6 Version of Javascript introduced the Block scope-This states that a variable delcared in a block of code is only accessible inside that block. All the other code outside that code block cannot access it.
//Block scope is built when variables are declared using Let or Const.
//Example
let name = 'Ernest' //Global scope

if (name == "Ernest") {   //block scope contained within curly braces
    let name = 'Paul' 
} //Two seperate variables with the same name
console.log(name)
//Characteristics of Using the Let or Const key word in variable Declaration
//* you cannot use the variables before it is declared, The variables can't be redeclared and The declared variable is scoped to the block
//Let is used if the value might change in the future and Const is used if the value will never change
//Comparing var, let and const keywords.
//A variable declared with the Var keyword can be accessed before initialization as long as the variable is eventually iniitialized somewhere in the code
//Example

console.log(ErnestUc)
var ErnestUc  //output is undefined with No error(this means that the Javascript engine continues to run and does not stop)
//Using the var keyword, we can declare and redeclare the same variables without errors
//Example
var Ernest = "fair"
var Ernest = "dark"
var Ernest = "chocolate"
console.log(Ernest)
//variable decared with the let keywords cannot be accessed before declaring it.
//Example
console.log(Ernest)
let Ernest  //output- cannot access 'Ernest' before initialization

let Ernest
console.log(Ernest)// outputs Undefined without error
let Ernest = processEngineer
let Ernest = dataAnalyst
console.log(Ernest)//ouputs error-Syntax error, Identifier Ernest has already been declared
//however, while a let variable cannot be redeclared, it can be re-assigned
//Example
let paul //= "courages"  //Declaring the variable paul with the let Keyword(the variable paul can also be undefined ie not assigned to any value)
paul = "Brave"     // reassigning the variable paul to another string value
console.log(paul)   //outputs the last reassignment of the variable paul
//A variable declared with a const keyword must be initialized and it's used when the variable is not expected to change
//Example and also note that variables declared with const keyword must be assigned on declaration
const ErnestUchenna = "fair"
ErnestUchenna = "dark"  //variable declared with the const keyword cannot be reassigned
console.log(ErnestUchenna)  //outputs error - TypeError: Assignment to constant variable

//Practice examples
function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);//first call- animal.food ie dog.food + 10 = 20 ie 10+10
meal(dog);//second call-animal.food ie dog.food +10 = 30 ie 20+10

console.log(dog.food);//outputs 30
//compare example in OOp
function totalPrice(shoes, stateTax){
    return shoes * stateTax
}
var shoe = 100
var Tax = 1.2
var totalAmount = totalPrice(shoe, Tax)
console.log(totalAmount)
//Introduction to OOP(Object Oriented Programming)
//OOP revolves around the idea of organizing our programs using objects to group related data and functionality
//Expample-write a code that calculates the total cost of buying a pair of shoes
//Create and object and store all data related to that object including variables, functions and output statements
//Example below 
var purchase1 ={   //the object
    shoes: 100,     //object keys/variables with their values
    stateTax: 1.2,
    totalPrice: function(){  //functions inside objects are know as methods
        var calculation = purchase1.shoes * purchase1.stateTax
        console.log('Total Price:', calculation)
        //console.log(this.totalPrice, calculation)
    }
}
purchase1.totalPrice() //Outpuuts the total price of ie 100*1.2 = 120
//console.log(purchase1)
//building another object example
var purchase2 = {
    shoes: 60,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase2.shoes * purchase2.stateTax
        console.log("Total Price:", calculation) 
    }
}
purchase2.totalPrice()//accessing totalPrice method under purchase2 object
//improving the objects so that both methods are identical by using the this. keyword
//Example
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax  //making the code identical instead of having the object name, Also use of the This keyword makes it easy to not care about the objects name. This approach allows for the reuse of existing code, instead of writing a custome method for every object
        console.log("Total Price:", calculation)
    }
}
purchase1.totalPrice()
//However, the same method is being repeated for each new object that is built, which is wasteful and programs needs to be efficient. Hence Templates are made for Objects
//one of the most elegant ways to efficiently build new objects is by using classes
//where there is a need to build many many objects that have a certain specific set of properties and methods
//Example- To build hundreds of car objects for a car racing game- Use class- which is built using the class key word followed by the name of the class starting with a capital letter and a pair of curly braces.
//inside the curly braces, there is a constructor function which acceptes as many parameters as needed
//The role of the constructor function is to assign the passed in parameters to the future objects properties. The constructor function is used when instantiating new objects, instances of a given class. After the constructor is defined, you can add as many method as you want. Note that the function keyword is not used in classses, just the name of the method is needed
//Example
class Car{   //class named Car
    constructor(color, speed, model){  // Passed in Parameters whcih are assigned to object properties
    this.color = color;
    this.speed = speed;
    this.model = model;
    }
    turbocharger(){  //method1 within the clas
        console.log("\n* Turbocharger is active for " + this.color, + this.speed +"km/hr " + this.model)  
    }
    carTyre(){ //method2 within the class
        console.log("\nThe car Tyre is strong for all the Models")
    }
}
    //creating instances within the Car class
    const car1 = new Car("blue", 180, "Toyota")
    const car2 = new Car("Black", 175, "Benz")
    const car3 = new Car ("white", 160, "Honda")

car1.turbocharger();  //outputs the instance of the Car class with it's properties from method1
car2.turbocharger();
car3.turbocharger();
car1.carTyre(); //outputs the instance of the Car class with it's properties from method2
//Principles of OOp- there are four fundamental principles of OOP which includes Inheritance, encapsulation, abstraction, and Polymorphism.
//Objects exists in hierachical structure.(ie Original base or super class for Everything is the Object Class)
class Animal { /* ...class code here... */ }

var myDog = Object.create(Animal)

console.log (Animal)

class Animal {
    // Constructor to initialize properties of the Animal class
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    // Method to make the animal speak
    speak() {
        console.log(`${this.name} says ${this.sound}`);
    }

    // Method to describe the animal
    describe() {
        console.log(`${this.name} is a ${this.species}`);
    }
}

// Creating an instance of Animal class using Object.create
var myDog = Object.create(new Animal('Buddy', 'Dog', 'Woof')); //The object.create() method creates a new method using an existing object as the prototype for the newly created object
var myCat = Object.create(new Animal('Jacquar', 'Cat', 'Mew')); // Example,, myCat inherits directly from the instance of *Animal Class, Using Instances as prototype

// Accessing the methods
myDog.speak();    // Output: Buddy says Woof
myDog.describe(); // Output: Buddy is a Dog
myCat.speak()
myCat.describe()

console.log(Animal); // Outputs the Animal class definition
//Object.create: Inherits directly from an object or a prototype, without necessarily invoking a constructor. It's more flexible for some specific cases of prototypal inheritance.
//new: Creates a new instance of a class or constructor function, invoking the constructor and setting up a prototype chain.
//Inheritance(A base class, one or more subclasses that inherits from the properties of the base class-sometimes refers as the superclass), in some cases, other sub sub classes that inherits from the subclass
//Note-Each sub class inherits from its super class and hence a class might be a super class if there are classes inheriting from that subclass
//For Example Class Animal -> sub-class -> Bird -> sub sub-class -> Eagle (Bird inherits the properties of The base class animal and Eagle inherits the propertie of the subclass Bird which now serves as a superclass for it)
//Each of the classes Animal, Bird and Eagle are seperate blue prints for specific object instances that can be constructed as needed.
//Code Example
// Base class
class Animal {  //Constructor to initialize the properties of the animal class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {   //Method describing a feature of the animal
        console.log(`${this.name} is eating.`);
    }

    sleep() {   //second method describing another feature of the animal
        console.log(`${this.name} is sleeping.`);
    }
}

// Derived class (inherits from the base Class Animal using the Extend keyword)
class Bird extends Animal {
    constructor(name, age, canFly) {  //constructor to initialize the properties of the subclass-Bird
        super(name, age); // Call the parent constructor (Animal using the super Keyword)
        this.canFly = canFly;  //Declare the properties using this. keyword
    }

    fly() {    //Method describing the Fly feature of the subClass Bird
        if (this.canFly) {  //set conditions for the fly property
            console.log(`${this.name} is flying.`);  //ouputs conditions
        } else {
            console.log(`${this.name} cannot fly.`);
        }
    }
}

// Further derived class (inherits from Bird Also using the Extend Key word)
class Eagle extends Bird {
    constructor(name, age, canFly, wingspan) {  //Constructor to initialize the properties of the sub sub class Eagle
        super(name, age, canFly); // Call the parent constructor (Bird using the Super Keyword)
        this.wingspan = wingspan; // Declare the Additional property specific to Eagle
    }

    hunt() {  //Method to describe the hunt feature of the sub sub class Eagle
        console.log(`${this.name} with a wingspan of ${this.wingspan} meters is hunting.`);
    }
}

// Create an instance of Eagle
const eagle1 = new Eagle("Bald Eagle", 5, true, 2.5);//(ie Name, age, canFly and wingspan- for all properties in the different classes)

// Call methods
eagle1.eat();  // Inherited from Animal
eagle1.fly();  // Inherited from Bird
eagle1.hunt(); // Method specific to Eagle
eagle1.sleep(); //Inherited from animal
//Encapsulation-This has to do with making a code implementation "hidden" from other users such that they don't have to know how the code work so as not to be able to consume the code.
//Encapsulation prevents external code from being concerned with the internal workings of an object
//Example
var alphabet = "abc"
var uppercase = "abc".toUpperCase();//the Method toUpperCase which converts the lower case string to upper case is encapsulated(the user is not bothered about how it works)
console.log(uppercase)
//Abstraction-Writing code in a more generalized way, it is about extracting the concept of what we want to do rather than dealing with a specific manifestation of that concept.
//Polymorphism-that is...Multiple forms or taking on so many shapes, where same properties of different objects are used for different Purpose
//For example, the bell on a door and the bell on a bicycle. Check code below
const bicycle = {
    bell: function() {  //bell method as a property of the bicycle object (Hence written as a function associated with the object)
        return "Ring, ring! Watch out, please!"
    }
}

const door = {
    bell: function() {  //bell method as a property of the door object  hence written as a function associated with the object
        return "Ring, ring! Come to door, please!"
    }
}
//A Method is a function that is defined within an object.
console.log(bicycle.bell())
console.log(door.bell())
//Adding a funciton to make the code truly polymorphic
function ringTheBell(Any){
    console.log(Any.bell())
}
ringTheBell(bicycle)
ringTheBell(door)
//Another example on using the concate operator used by calling the built in concat() method which behaves exaclty the same way when the + operator is used
//Example of using the concat() method on two strings
var concatenation ="Ernest".concat("Uchenna")
console.log(concatenation)
var concatenation = "Ernest" + "Uchenna"
console.log(concatenation)   //both ouputs ErnestUchenna
//The concat() method can also be used on two arrays Example below
var arrayConcat = ["Ernest"].concat(["Uchenna"]) //Hence the concat() method exhibits a polymorphic behaviour as it behaved differently based on the data types(String and Array) in this context.
console.log(arrayConcat)
var plusOperator = [...["Ernest"], ...["Uchenna"]];  // Using spread operator
console.log(plusOperator);
//similarly, using the + operator
var plusOperator = ["Ernest"] + ["Uchenna"]
console.log(plusOperator)//outputs ErnestUchenna, because the + operator when used on arrays converts the arrays to strings and concatenates them.
//see Example of polymorphism using Classes
class Bird {  //Parent class Bird
    useWings() {  //The method that represents the ability of birds to fly
        console.log("Flying!")
    }
}
class Eagle extends Bird {  //A sub class of the base/Parent class Bird
    useWings() {   //Overridden method from base class which calls the parent class using super.wing() method and add/Prints it's own behaviour "Barely Flapping!"
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {  //does not call the super.useWings() method, Directly prints diving which shows the Penguin use of wings to Dive instead of to fly.(Same method called and used to build different objects-ie Functions with same exact name and functionality and behaves exactly the same)
        console.log("Diving!")
    }
}
//Object Instantiations
var strongEagle = new Bird(); //An  instance of the bird class created and assigned to the vairable strongEagle
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
strongEagle.useWings()// "Flying!"
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Flying! Diving!"
//The Penguin and Eagle sub-classes both inherit from the Bird super-class. The Eagle sub-class inherits the useWings() method from the Bird class, but extends it with an additional console log. The Penguin sub-class doesn't inherit the useWings() class - instead, it has its own implementation, although the Penguin class itself does extend the Bird class.  
//Constructors-Built in Object types in javascript includes  Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc.
//Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native objects. All the constructors are capitalized.
//An example - Create new date instance
const date = Date()  //Declare a Date() object and assigns it to the variable date
console.log(date)  //returns the current date and time as a string in a human-readable format, cannot be manipulated like an actual date object

const newDate = new Date()  //Creates the actual date object that is just more than a string. it has a wide range of methods and properties for working with dates and times (e.g., .getDay(), .getTime(), .getYear(), .setFullYear() etc.).
console.log(newDate) //outputs the date in ISO 8601 format ie2024-09-16T20:45:05.008Z(YYYY-MM-DD, T to seperate date from Time- HH:MM:SS.SSS(milliseconds) and Z shows the date is in UTC-Cordinated Universal Time- Zulu Time)

const newDate2 = new Date();
console.log(newDate2.getFullYear()); //outputs the current year

const newDate3 = new Date();
console.log(newDate3.getYear()); //outputs current Year minus 1900(Ie 124 which is the  number of years since 1900)