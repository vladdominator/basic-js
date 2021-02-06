const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
   if (arguments.length === 0) {
      return 'Unable to determine the time of year!';
    }
   if (!(date instanceof Date) || date == null || !date) {
      throw new Error();
    }
    date.getYear();
   let month = date.getMonth();
   if(month === 11 || month === 0 || month === 1){
      return 'winter';
   }
   else if(month === 8 || month === 9 || month === 10){
      return 'autumn';
   }
   else if(month === 2 || month === 3 || month === 4){
      return 'spring';
   }
   else {
      return 'summer';
   }
};
