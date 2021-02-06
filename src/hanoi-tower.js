const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
   allDisks = Math.pow(2,disksNumber)-1;
   allSeconds = Math.floor((allDisks * 3600) / turnsSpeed);
   return {
      turns: allDisks,
      seconds: allSeconds
   }
};
