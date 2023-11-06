// 01  Declare a function fullName and it will print out your full name.
function fullName() {
    let fname = "Ragukumaran Piratheep";
    
    console.log("My Full Name is: "+fname);
    }
    fullName();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 02 Declare a function fullName, and now it takes firstName and lastName as parameters and returns your full name.
    function fullName() {
    let firstname = "Ragukumaran";
    let lastname = "Piratheep";
    console.log("My Full Name is: "+firstname+" "+lastname);
    }
    fullName();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 03 Declare a function addNumbers, and it takes two parameters and it returns the sum.
function addNumbers(a, b) {
    return (a + b);
    }
    let result=addNumbers(5,10);
    console.log(`The sum of ${result}`);
    

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 04 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length,width) {
    return length*width;
}

console.log(areaOfRectangle(10,8));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  05 A perimeter of a rectangle is calculated as follows: perimeter = 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length,width) {
    return 2*(length+width);
}

console.log(perimeterOfRectangle(10,8));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  06 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function calculateVolume(length, width, height){
    const volume = length * width * height;
    
    return `The volume of Rectangle is :${volume}`;
    }  
    console.log(calculateVolume(10,8,5));


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  07 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r) {
    return Math.PI*r*r;
    }
    console.log("Area of the circle is: "+ areaOfCircle(4).toFixed(2));

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  08 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
    return 2*Math.PI*r;
}
console.log("Circumference of the circle is: "+circumOfCircle(4).toFixed(2));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  09 The temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which converts oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celcious) {
    return f = celcious*(9/5)+32;
}
console.log(convertCelsiusToFahrenheit(67));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//  10 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older. Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function bmi(weight, height) {
    return weight/(height*height);

    if (bmi<18.5) {
        return "Underweight";
    }
    else if(bmi<24.9) {
        return "Normal Weight";
    }
    else if(bmi<29.9) {
        return "Overweight";
    }
    else {
        return "Obese";
    }

}
console.log(bmi(75, 1.62).toFixed(2));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
