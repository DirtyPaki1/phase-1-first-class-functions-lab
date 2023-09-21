// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray) {
  return driversArray.slice(0, 2);
};
const returnLastTwoDrivers = function(driversArray) {
  return driversArray.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer;
  };
}

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(10)); // Output: 30
const originalFare = 10;
function fareDoubler(fare) {
  return fare * 2;
}





function selectDifferentDrivers(arrayOfDrivers, driverSelector) {
  if (driverSelector === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers);
  } else if (driverSelector === returnLastTwoDrivers) {
    return returnLastTwoDrivers(arrayOfDrivers);
  }
}





