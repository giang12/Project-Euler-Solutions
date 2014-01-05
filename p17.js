/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
 */

var startTime = new Date();

var Converter = (function () {

    var oneTo19 = ["", "one", "two",
        "three", "four", "five", "six",
        "seven",
        "eight", "nine", "ten", "eleven",
        "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen",
        "eighteen", "nineteen"
    ];
    var multipleTens = ["", "ten", "twenty",
        "thirty", "forty", "fifty", "sixty",
        "seventy", "eighty", "ninety"
    ];
    var magnitude = ["", "thousand",
        "million", "billion", "trillion",
        "quadrillion", "quintillion",
        "sextillion", "septillion",
        "octillion",
        "nonillion", "decillion",
        "undecillion", "duodecillion",
        "tredecillion",
        "quattuordecillion",
        "quindecillion", "sexdecillion",
        "septdecillion",
        "octdecillion", "novemdecillion",
        "vigintillion"
    ];

    var MAX = magnitude.length * 3;

    function numberToWord(num, and) {

        and = typeof and === "boolean" ? and : false;
        var numString = num.toString().split("");

        if (numString.length > MAX)
            throw "Out of Range";
        //Special cases
        if(num == '0')
			return "zero";
        if(numString[0] == "-"){
			numString.shift();
			return "Negative " + numberToWord(numString.join(""));
        }

        //General cases
        var arr = [];

        while (numString.length) {
            arr.push(parseInt(numString.splice(-3, 3).join(""), 10));
        }
        var result = "";
        var step = 0;

        if (arr.length && and) {
            result = convertHundred(arr.shift(), and) + (magnitude[step] ===
                "" ? "" : " " + magnitude[step]) + (result === "" ? result :
                " " + result);
            step++;
        }
        while (arr.length) {
            result = convertHundred(arr.shift()) + (magnitude[step] === "" ?
                "" : " " + magnitude[step]) + (result === "" ? result : " " +
                result);
            step++;
        }

        return result;
    }

    function convertHundred(num, and) {

        if (typeof num !== "number")
            throw "Unexpected Argument";
        if (num > 1999)
            throw "Out of Bound";

        and = typeof and === "boolean" ? and : false;
        var hundred = Math.floor(num / 100),
            ten = Math.floor(num / 10) % 10,
            unit = num % 10;

        var firstPart = hundred > 0 ? oneTo19[hundred] + " hundred" : "";
        var secondPart = ten < 2 ? oneTo19[10 * ten + unit] : multipleTens[
            ten] + oneTo19[unit];

        var result;
        if (firstPart === "")
            result = secondPart;
        else if (secondPart === "")
            result = firstPart;
        else if (and)
            result = firstPart + " and " + secondPart;
        else
            result = firstPart + " " + secondPart;

        return result;
    }

    return {
        numberToWord: numberToWord,
        convertHundred: convertHundred
    };
})();


console.log(Converter.numberToWord(423142400, true));//four hundred twentythree million one hundred fortytwo thousand four hundred

console.log(Converter.numberToWord(13101, true));//thirteen thousand one hundred and one

console.log(Converter.numberToWord(9007199254740992,true));//nine quadrillion seven trillion one hundred ninetynine billion two hundred fiftyfour million seven hundred forty thousand nine hundred and ninetytwo

console.log(Converter.numberToWord(123123123123123));//one hundred twentythree trillion one hundred twentythree billion one hundred twentythree million one hundred twentythree thousand one hundred twentythree

console.log(Converter.numberToWord(-123123123123123));//Negative one hundred twentythree trillion one hundred twentythree billion one hundred twentythree million one hundred twentythree thousand one hundred twentythree

console.log(Converter.numberToWord(0,true));//0

var START = 1;
var END = 1000;
var sum = 0;
for (var x = START; x < END + 1; x++) {
    sum += Converter.numberToWord(x, true).replace(/\s/g, '').length;
}
console.log(sum);


console.log("Elapsed Time: " + (new Date() - startTime) / 1000 +" s");









