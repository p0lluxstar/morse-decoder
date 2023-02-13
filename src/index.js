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

function decode(expr) {

    let arr = [];
    let res = '';
    
    for (let i = 0; i < expr.length; i += 10){ // создаем массив, из элементов по 10 символов
        arr.push(expr.substr(i, 10)); // метод substr() позволяет извлечь из строки определенное количество символов, начиная с заданного индекса
    };

    arr.forEach(el =>{
        let toMorse = '';
        for (let i = 0; i < el.length / 2; i++){
            if(el.substr(i * 2, 2) === '10'){
                toMorse += '.';
            }else if(el.substr(i * 2, 2) === '11'){
                toMorse += '-';
            };
        };

        Object.keys(MORSE_TABLE).forEach(key =>{ // сравниваем строку toMorse с ключами объекта MORSE_TABLE
            if(toMorse === key){
                res += MORSE_TABLE[key]; 
            };
        });
        
        if(toMorse === ''){
            res += ' ';
        }; 
    });

    return res;
};

module.exports = {
    decode
}