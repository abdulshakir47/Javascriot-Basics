// Condtionals In Javascript


var temparature = 20;
if(temparature < 20){
    console.log("Its very cold outside");
}
else if(temparature<30){
    console.log("Temparature Moderate Outside");
}

else{
    console.log("Its Really Hot outside")
}


// Allow the user to access the course
// if they loggedin through gmail or facebook or email

// Here we can use logical conditional like && or || Operator

var email = true;
var google = false;
var facebook = false;
if(email|google|facebook){
    console.log("Login Success");
}
else{
    console.log("They didnt logged In..");
}

// Ternary Operators In Javascript

 // Show the user signout if he is loggedin
 //else show him a sign in button


 // Here we are going to use ternary Operator

 var authenticated = true;

 authenticated?console.log("Logout"):console.log("Login");




// Break and Continue In javascript
var array = [1,2,3,4,5];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element == 3){
        break;
    }
    console.log(element);

}


// Switch Case In Javascript
// Creating Privilidge application 

var user = "testprep";
switch (user) {
    case "admin":
        console.log("You get the full access");
        break;
    case "Subadmin":
        console.log("You get access to create and delete courses");
        break;
    case "user":
        console.log("You get access to consume the contents");
        break;
    default:
        console.log("Trial User");
        break;
}



 