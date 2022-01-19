// USE meaningful and pronounceabl name:
//bad =>
var yyyymmdstr = moment().format('YYYY/MM/DD');
//good =>
var yearMonthDay = moment().format('YYYY/MM/DD');

//USE ES6, the best choice is CONST
//bad =>
var FIRST_US_PRESIDENT = 'George Washington';
//good =>
const FIRST_US_PRESIDENT = 'George Washington';

//USE the same vocab for the same type of variable
//bad =>
getUserInfo();
getClientData();
getCustomerRecord();
//good =>
getUser();

//Don't use magic numbers
//bad =>
for (var i = 0; i < 525600; i++) {
  runCronJob();
}
//good =>
const minutesInYear = 525600;
for (var i = 0; i < minutesInYear; i++) {
  runCronJob();
}

//USE explanatory variables(пояснювальні змінні)
//bad =>
const cityStateRegex = /^(.+)[,\\s]+(.+?)\s*(\d{5})?$/;
saveCityState(
  cityStateRegex.match(cityStateRegex[1]),
  cityStateRegex.match(cityStateRegex[1])
);
//good =>
const cityStateRegex = /^(.+)[,\\s]+(.+?)\s*(\d{5})?$/;
const match = cityStateRegex.match(saveCityState);
const city = match[1];
const state = match[2];
saveCityState(city, state);

//Don't add unneeded context
//bad =>
var car = {
    carName = "Honda",
    carModel = "Civic",
    carColor = "Gray"
};
function paintCar(car){
    car.carColor = 'Red'
}
//good => 
var car = {
    name = "Honda",
    model = "Civic",
    color = "Gray"
};
function paintCar(car){
    car.color = 'Red'
}

//Short circuiting is cleaner than conditionals 
//bad => 
function createMicrobrewery(name) {
    var breweryName;
    if (name) {
        breweryName = name 
    }
    else {
        breweryName = 'Mohamed Blinskyy';
    }
}
//good => 
function createMicrobrewery(name) {
    var breweryName = name || 'Mohamed Blinskyy';
}