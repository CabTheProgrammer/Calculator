
//Array for the display
let DispString = "";
let disp = document.querySelector("#display");

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
 document.querySelector("#EQUAL").addEventListener("click",()=> sigma(DispString));


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

//section for refreshing display
function DispCls()// Probably gonna use the 'CE' button to call this function
{
    DispString = "";
    DispUpdate("0");
}

function DispUpdate(val)
{
    // disp.innerHTML = " ";
    disp.textContent = val;
    return 0;
}

// Section for the string to store input
function DispVal(character)
{
    DispString += character;        
    
    DispUpdate(DispString);
    // console.log(DispString);
}

function Clear()
{
   
    
    DispString = DispString.slice(0,-1);  
    
    // console.log("Current Value in String: " + DispString);
    // console.log("Length of the string" + DispString.length);
    DispUpdate(DispString);
    if(DispString.length == 0)
        DispUpdate("0");
}

// Function to evaluate string passed to it 😓
function sigma(string)
{   
    let OpArray = ["+","-","/","*"];
    counter = 0;
    let lh = "";
    let rh = "";
    let operator = "";
    let ans = 0;
    let calcuflag = false;

    // lets try this now
    console.log("starting loop");
    while(counter < string.length)
    {  
        if(OpArray.indexOf(string[counter]) !== -1)
           {
                console.log("Operator detected at counter = "+ counter);
                operator = string[counter];
                counter += 1;
                continue;
           }

        if(operator === "")
            lh += string[counter];
        else
            {
                rh += string[counter];
                if(OpArray.indexOf(string[counter+1] ) !== -1)
                    calcuflag = true;
            }
        
        console.log("Lh is now: " + lh);
        console.log("Rh is now: " + rh);
        console.log("Operator is now: " + operator);
        counter += 1;
        
         if(counter == string.length|| calcuflag == true)
            {   
                let buffer = ans;
                if(operator ==="/" || operator ==="*")
                    {   
                        if(ans == 0)
                            buffer = lh;
                        ans = operate(+buffer,+rh,operator);
                    }
                else
                   ans += operate(+lh,+rh,operator);

                console.log(" Current Ans: " + ans);
                console.log("Was doing "+lh+operator+rh+"="+ans);
                console.log("LH: " + lh);
                console.log("RH: " + rh);
                console.log("Operator: " + operator);

                
                lh ="";
                rh = "";
                operator = "";
                calcuflag = false;
            }        
    }

    console.log("Computing:  "+lh+operator+rh+" = "+ans);
    // console.log("RH: " + rh);
    // console.log("LH: " + lh);
    // console.log("Operator: " + operator);
    console.log("Counter: " + counter);
    console.log("String Length: " + string.length);
    DispString = "";
    DispUpdate(ans);

}