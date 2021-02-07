const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
   let istance = str;
   let returnValues = '';
   if(!options.additionSeparator){
      options.additionSeparator = '|';
   }
   if(!options.separator){
      options.separator = '+';
   }
   if(!(str instanceof String) || !(options.addition instanceof String)){
      str = String(str);
      options.addition = String(options.addition);
   }
   if(options.addition && options.repeatTimes != undefined){
         for(let i = 0; i < options.additionRepeatTimes; i++){
            if(i == options.additionRepeatTimes - 1){
               istance = istance + options.addition;
            }
            else{
               istance = istance + options.addition + options.additionSeparator;
            }
         }
   }
   else{
      returnValues = istance + options.addition;
   }
      for(let i = 0; i < options.repeatTimes; i++){
         if(i == options.repeatTimes - 1){
            returnValues = returnValues + istance;
         }
         else{
            returnValues = returnValues + istance + options.separator;
         }
      }
   return returnValues;
};
