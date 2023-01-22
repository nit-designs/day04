//a. How to compare two JSON have the same propertes without order?

let obj1 = {name:"Person 1",age:5};
let obj2 = {age:5,name:"Person 1"};

//sort the keys values in objects
let sortedobj1 = Object.keys(obj1).sort();
let sortedobj2 = Object.keys(obj2).sort();
//convert to string
let obj1Strings = JSON.stringify(sortedobj1);

let obj2Strings = JSON.stringify(sortedobj2);
if(obj1Strings === obj2Strings)
{
    console.log("objects has same properties");
}
else
{
    console.log("Objects not same Properties")
}

//output:objects has same properties

//b.Use the rest countries 'API URL -> and dispaly all the country flags in the console

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        var countries = JSON.parse(request.responseText);
        for (var i = 0; i < countries.length; i++) {
            console.log(countries[i].flag);
        }
    }
};
//output:EN
//c.use the same rest countries and print all countries names,regions,sub-region and populations

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        var countries = JSON.parse(request.responseText);
        for (var i = 0; i < countries.length; i++) {
            console.log(countries[i].name);
            console.log(countries[i].region);
            console.log(countries[i].subregion);
            console.log(countries[i].population);
        }
    }
};

//output:Eritrea,Africa,East Africa,5352000