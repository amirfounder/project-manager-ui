const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export default Object.freeze({
  ALPHABET_LOWER: alphabet.toLowerCase().split(''),
  ALPHABET_UPPER: alphabet.toUpperCase().split(''),
  API_URL: 'http://127.0.0.1:5000'
})