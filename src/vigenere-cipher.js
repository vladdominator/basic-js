const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  mode = true;

  constructor(flag = true) {
    this.mode = flag;
  }


  encrypt(message, key) {
    if (arguments.length < 2) {
      throw new Error();
    }

    let strArray = message.toUpperCase().split('');
    let keyAbout = key.toUpperCase().split('');

    let ArrayPrototype = [];
    let j = 0;
    for (let i = 0; i < strArray.length; i++) {
      if (this.letters.includes(strArray[i])) {
        ArrayPrototype[i] = [strArray[i],keyAbout[j]];
        j++;
        if (j === keyAbout.length) {
          j = 0;
        }
      } else {
        ArrayPrototype[i] = strArray[i];
      }
    }

    let strArrayDefend = [];
    for (let i = 0; i < ArrayPrototype.length; i++) {
      if (ArrayPrototype[i] instanceof Array) {
        let pos = (this.letters.indexOf(ArrayPrototype[i][0]) + this.letters.indexOf(ArrayPrototype[i][1])) % 26;
        strArrayDefend[i] = this.letters[pos];
      } else {
        strArrayDefend[i] = ArrayPrototype[i];
      }
    }

    if (!this.mode) {
      strArrayDefend.reverse();
    }

    return strArrayDefend.join('');
  } 

  decrypt(message, key) {
    if (arguments.length < 2) {
      throw new Error();
    }

    let strArray = message.toUpperCase().split('');
    let keyAbout = key.toUpperCase().split('');

    let ArrayPrototype = [];
    let j = 0;
    for (let i = 0; i < strArray.length; i++) {
      if (this.letters.includes(strArray[i])) {
        ArrayPrototype[i] = [strArray[i], keyAbout[j]];
        j++;
        if (j === keyAbout.length) {
          j = 0;
        }
      } else {
        ArrayPrototype[i] = strArray[i];
      }
    }

    let strArrayDefend = [];
    for (let i = 0; i < ArrayPrototype.length; i++) {
      if (ArrayPrototype[i] instanceof Array) {
        let pos = (this.letters.indexOf(ArrayPrototype[i][0]) - this.letters.indexOf(ArrayPrototype[i][1]) + 26) % 26;
        strArrayDefend[i] = this.letters[pos];
      } else {
        strArrayDefend[i] = ArrayPrototype[i];
      }
    }

    if (!this.mode) {
      strArrayDefend.reverse();
    }

    return strArrayDefend.join('');
  }
}

module.exports = VigenereCipheringMachine;
