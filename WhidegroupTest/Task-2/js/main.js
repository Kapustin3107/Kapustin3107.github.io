const PACK_VALUE_FIRST = 8;
const PACK_VALUE_SECOND = 6;
const ONE_PIECE_SQUARE = 4;
const RESULT_OUTPUT = document.querySelector(".result");
let sixPiecesOutput = RESULT_OUTPUT.querySelector(".six-pieces-output");
let eightPiecesOutput = RESULT_OUTPUT.querySelector(".eight-pieces-output");

function howMAnyPiecesNeed(totalSquare){
    return totalSquare / ONE_PIECE_SQUARE;
}

function totalSquare(width, height){
    return  width * height;
}

function checkIsEven(num){
    return  num % 2 === 0 ? true : false;
}

function testOne(quantity){
    if(!checkIsEven(quantity)){
        quantity++;
    }
        let resilt1 = quantity / PACK_VALUE_FIRST;
        let result2 = Math.ceil(resilt1);
        let result3 = result2 * PACK_VALUE_FIRST;
        let result4 = result3 - quantity;
        let result5 = result4 / 2;
        let result6 = result2 - result5;
    console.log("шестерки " + result5 + " " + "восьмерки " + result6);
}

function howMany(pieces){
    console.log(pieces);
    let result = {};
    result[PACK_VALUE_FIRST] = 0;
    result[PACK_VALUE_SECOND] = 0;
    if (pieces <= PACK_VALUE_SECOND) {
        result[PACK_VALUE_SECOND] = 1;
    } else if (pieces <= PACK_VALUE_FIRST) {
        result[PACK_VALUE_FIRST] = 1;
    } else {
        testOne(pieces);
    }
    return result;
}

function renderResult(arr){
    sixPiecesOutput.textContent = arr[PACK_VALUE_SECOND];
    eightPiecesOutput.textContent = arr[PACK_VALUE_FIRST];
}
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(`.app__form`);
    const lengthSelect = form.querySelector(`.app-form-length`);
    const widthSelect = form.querySelector(`.app-form-width`);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const width = lengthSelect.value;
        const height = widthSelect.value;
        let total = totalSquare(width, height);
        let pieces = howMAnyPiecesNeed(total);
        let resultArray =  howMany(pieces);
        renderResult(resultArray);
    });
});
