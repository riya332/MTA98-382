// Create a function to return the new date after adding months to the passed date

function calculateMonths(passedDate, months ){
   var passedMonths = passedDate.getMonth();
   passedDate.setMonth(passedMonths + months);
   return passedDate;
}

// complete Date functions here : 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


