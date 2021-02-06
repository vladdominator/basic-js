const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
   if(typeof members !== 'object' || !members || members == null){
      return false;
   }
   let team = '';
   let arr = [];
   for(let i = 0; i < members.length; i++){
      if(typeof members[i] !== 'number' && members[i] && typeof members[i] === 'string'){
         arr.push(members[i].trim().toUpperCase().charAt(0));
      }
   }
   arr.sort();
   for(let i = 0; i < arr.length; i++){
      team = team + arr[i];
   }
   return team;
};
