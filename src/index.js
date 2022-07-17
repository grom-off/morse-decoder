const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decodeMorse (morseString) {
     let trimmedMorseString = morseString.trim()
  let morseLetters = trimmedMorseString.split(' ');
  // the presence of two '' chars next to each other indicates the space between words
  let decodedMessage = ''
  // loop over the morse letters and convert them to the corresponding english letters according to the lookup table
  for (let i=0; i<morseLetters.length; i++) {
    if (morseLetters[i] === '') {
      morseLetters.splice(i, 1)
      decodedMessage += ' '
      continue
    }

    decodedMessage += MORSE_TABLE[morseLetters[i]]
  }

  return decodedMessage
}

module.exports = {
    decode
}
