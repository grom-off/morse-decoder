const MORSE_TABLE = {
    '0000001011':     'a',
    '0011101010':   'b',
    '0011101110':   'c',
    '0000111010':    'd',
    '0000000010':      'e',
    '0010101110':   'f',
    '0000111110':    'g',
    '0010101010':   'h',
    '0000001010':     'i',
    '0010111111':   'j',
    '0000111011':    'k',
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
  let morseLetters = trimmedMorseString.split('**********');
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
