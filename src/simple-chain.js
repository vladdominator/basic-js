const CustomError = require("../extensions/custom-error");
let stringValue = ``;
let arr = [];
const chainMaker = {
   flag:false,
   getLength() {
      this.clean();
      if (this.stringValue === '') return 0;
      return arr.length;
     },
     addLink(value) {
         this.clean();
         if (arguments.length === 0) {
            arr.push('()');
          }
         arr.push(value);
         return this;
     },
     removeLink(position) {
      this.clean();
       for(let i = 0;i < arr.length; i++){
          if (i == position - 1){
             arr.splice(i,1);
          }
          else if (arguments.length === 0 || 
           typeof(position) !== 'number' || 
            Number.isNaN(position) || 
           !Number.isInteger(position) ||
           position <= 0 ||
           position > this.getLength()) {
            this.flag = true;
             throw new Error('error in position');
           }
       }
       return this;
     },
     reverseChain() {
       this.clean();
       arr.reverse();
       return this;
     },
     finishChain() {
       for(let i = 0; i < arr.length;i++){
          if(arr.length === 1){
            stringValue = stringValue + `( ${arr[i]} )`;
          }
          else if(i === 0){
            stringValue = stringValue + `( ${arr[i]} )~~`;
          }
          else if(i === arr.length - 1){
           stringValue = stringValue + `( ${arr[i]} )`;
          }
          else{
            stringValue = stringValue + `( ${arr[i]} )~~`;
          }
       }
       this.flag = true;
       return stringValue;
     },
     clean(){
      if(this.flag){
         arr = [];
         stringValue = ``;
         this.flag = false;
       }
     }
 };

module.exports = chainMaker;
