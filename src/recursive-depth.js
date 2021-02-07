const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
   calculateDepth(arr, count = 1, res = []) {
      res.push(count);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
          this.calculateDepth(arr[i], count + 1, res);
        }
      }
  
      return res.sort((a, b) => b - a).pop();
    }
};