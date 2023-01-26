const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  let arr = [];
  let arr2 = [];
  let arr3 = [];
  let len = 10;
  let str = "";
  let exp = expr.split("");
  for (let i = 0; i < exp.length; i += len) {
    arr.push(exp.slice(i, i + len));
  }

  arr.map((el) => {
    for (let j = 0; j < el.length; j++) {
      if (el[j] == "1" || isNaN(el[j])) {
        arr2.push(el.slice(j, el.length));
        break;
      }
    }
  });
  for (let k = 0; k < arr2.length; k++) {
    let a = [];
    if (arr2[k].includes("*")) {
      arr2[k].forEach((element) => {
        a.push(element);
      });
    } else {
      for (let l = 0; l < arr2[k].length; l += 2) {
        if (l % 2 == 0) {
          a.push(`${`${arr2[k][l]}${arr2[k][l + 1]}` === "10" ? "." : "-"}`);
        }
      }
    }

    arr3.push(a.join(""));
  }
  arr3.map((el) =>
    el.split("").length > 5 ? (str += " ") : (str += MORSE_TABLE[el])
  );

  return str;
}

module.exports = {
  decode,
};
