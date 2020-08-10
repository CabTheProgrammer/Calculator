
//Array for the display
let DispString = "";
let disp = document.querySelector("#display");

let Buffer = "";
let buffcount = 0;
let Bstring ="";
//Event listeners
document.querySelector("#ZERO").addEventListener("click",()=> DispVal("0"));
document.querySelector("#ONE").addEventListener("click",()=> DispVal("1"));
document.querySelector("#TWO").addEventListener("click",()=> DispVal("2"));
document.querySelector("#THREE").addEventListener("click",()=> DispVal("3"));
document.querySelector("#FOUR").addEventListener("click",()=> DispVal("4"));
document.querySelector("#FIVE").addEventListener("click",()=> DispVal("5"));
document.querySelector("#SIX").addEventListener("click",()=> DispVal("6"));
document.querySelector("#SEVEN").addEventListener("click",()=> DispVal("7"));
document.querySelector("#EIGHT").addEventListener("click",()=> DispVal("8"));
document.querySelector("#NINE").addEventListener("click",()=> DispVal("9"));


//Other buttons
document.querySelector("#C").addEventListener("click",()=> Clear());
document.querySelector("#CE").addEventListener("click",()=> DispCls());
document.querySelector("#PLUS").addEventListener("click",()=> DispVal("+"));
document.querySelector("#MULTIPLY").addEventListener("click",()=> DispVal("*"));
document.querySelector("#DIVIDE").addEventListener("click",()=> DispVal("/"));
document.querySelector("#MINUS").addEventListener("click",()=> DispVal("-"));
// document.querySelector("#EQUAL").addEventListener("click",()=> DispVal("="));


// Functions to calculate stuff
//Function to add 2 numbers
function add(num1,num2)
{
    return num1 + num2;
}

//Function to subtract num2 from num1 
function sub(num1,num2)
{
    return num1 - num2;
}

//Function to multiple 2 numbers
function mul(num1,num2)
{
    return num1 * num2;
}

//Function to divide num1 by num2 
function div(num1,num2)
{
    return num1/num2;
}

//master function for calculations
function operate(num1, num2, operator)
{
    let ans;
    if(operator == '+')
        ans = add(num1,num2);
    else if (operator == '-')
        ans = sub(num1,num2);
    else if ( operator == "/")
        ans = div(num1,num2);
    else 
        ans = mul(num1,num2);
    return ans;
}

function NotEmpty(value)
{
    return value !== "";
}
//section for refreshing display
function DispCls()// Probably gonna use the 'CE' button to call this function
{
    
    Buffer.length = 0;
    Buffer = Buffer.filter(NotEmpty);
    Bstring = "";
    DispString = "";
    console.log(Buffer);
    console.log(Buffer.length);
    DispUpdate("0");
}

function DispUpdate(val)
{
    // disp.innerHTML = " ";
    disp.textContent = val;
    return 0;
}

// TODO: Use a string instead of an array for the buffer

// Section for the string to store input
function DispVal(character)
{
    if(character === "+" || character === "-" || character === "*" || character === "/")
    {   
        console.log("Activate!");
        Bstring = character;
        buffcount += 1;
        Buffer[buffcount] = Bstring;
        DispString += character;
        buffcount += 1;
        Bstring = "";
        
    }
    else
    {   
        Bstring += character;
        DispString += character;
        Buffer[buffcount] = Bstring;
    }
    
    DispUpdate(DispString);
    console.log(Buffer);
}

function Clear()
{
    console.log(Buffer);
    
    DispString = DispString.slice(0,-1);
    Buffer[buffcount] = DispString;    
    
    console.log(Buffer);
    console.log(DispString);
    console.log(DispString.length);
    DispUpdate(DispString);
    if(DispString.length == 0)
        DispUpdate("0");
}

