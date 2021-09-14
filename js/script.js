

function changeData(value){  // parameters
    var treatWithFriends = "First give me treat then only u can go with your partner!!!"; // data types with it's value.
    var xyz = "str" + 45;
    console.log(value);
    window.alert("Happy Wedding dear "+ value +"," + treatWithFriends);
    document.getElementById("test").innerHTML = value;
}

var abc = [2,3,4,5,6] // global scope variable
function cube(num){
    return num*num*num;   // function return
}
function sum(num){    // function declare with parameters
    console.log("Num", num)
    num = Number(num) + 1;
    console.log(num);
    return num;
}
//-------------------------
// let & const --- block level scope variable

function esStart(){
    let inputValue =  document.getElementById("num1").value;
    console.log(inputValue)
    document.getElementById("cube").innerHTML = cube(inputValue);
    console.log(cube(inputValue)); 
    sum(inputValue); // function calling/invocation
    document.getElementById("sum").innerHTML = sum(inputValue);

    if(true){
        let firstName = "Ankit";
        // firstName = "aaaaa";
        const lastName = "Sharma";
        // lastName = "hsachsd";  // we can't reassign value in const
        var otherName = "Sumit";
        console.log(firstName, lastName, otherName);
    }
    // console.log(firstName, lastName, otherName);
}



