function runRomanConvert() {
    var n = parseInt(document.querySelector('.rom-input').value);
    document.querySelector('.rom-output').innerHTML = convert(n);
}

  var romanNumerals = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], // Ones
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'], // Tens
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], // Hundreds
        ['', 'M', 'MC', 'MCC', 'MCD', 'MD', 'MDC', 'MDCC', 'MDCCC', 'MCM'] // Thousands
  ];

function convert(num) {

var numeral = '';
var digits = num.toString().split('').reverse();

for (var i = 0; i < digits.length; i++) {
  numeral = romanNumerals[i][parseInt(digits[i])] + numeral;
}
  return numeral;

}