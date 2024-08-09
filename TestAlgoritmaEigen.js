function reverseLetter(input) {
    const number = input.substring(input.length -1);
    const letter = input.substring(0, input.length-1);

    const reverseLetter = letter.split('').reverse().join('');

    return reverseLetter + number;
}

function longestWord(input) {
    const splitLetter = input.split(' ');

    let lengthWord = 0;
    let word = "";
    splitLetter.forEach(element => {
        if (element.length > lengthWord) {
            lengthWord = element.length;
            word = element;
        }
    });
    return word+": "+lengthWord;
}

function matchingArray(input, query) {
    let result = [];
    query.forEach(element1 => {
        let counter = 0;
        input.forEach(element2 => {
            if (element1 == element2) {
                counter = counter + 1;
            }
        });
        result.push(counter);
    });
    return result;
}

function calculateDiagonalMatrix(inputMatrix) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    const n = inputMatrix.length;

    for (let index = 0; index < n; index++) {
        firstDiagonalSum += inputMatrix[index][index];
        secondDiagonalSum += inputMatrix[index][n - index - 1];
    }

    return Math.abs(firstDiagonalSum - secondDiagonalSum);
}

//Nomor 1
const input = "NEGIE1";
const result = reverseLetter(input);
console.log(result);

//Nomor 2
const sentence = "Saya sangat senang mengerjakan soal algoritma";
const result2 = longestWord(sentence);
console.log(result2);

//Nomor 3
const INPUT = ['xc', 'dz', 'bbb', 'dz'];  
const QUERY = ['bbb', 'ac', 'dz'];
const result3 = matchingArray(INPUT, QUERY);
console.log(result3);

//Nomor 4
const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];

const result4 = calculateDiagonalMatrix(matrix);
console.log(result4);