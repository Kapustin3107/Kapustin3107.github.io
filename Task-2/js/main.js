const PACK_VALUE_FIRST = 8;
const PACK_VALUE_SECOND = 6;
const ONE_PIECE_SQUARE = 4;
const RESULT_OUTPUT = document.querySelector(".result");
const SIX_PIECES_OUTPUT = RESULT_OUTPUT.querySelector(".six-pieces-output");
const EIGHT_PIECES_OUTPUT = RESULT_OUTPUT.querySelector(".eight-pieces-output");
function howMAnyPiecesNeed(totalSquare){
    return totalSquare / ONE_PIECE_SQUARE;
}
function totalSquare(width, height){
    return  width * height;
}
function howMany(pieces){
    let result = {};
    result[PACK_VALUE_FIRST] = 0;
    result[PACK_VALUE_SECOND] = 0;
    if (pieces <= PACK_VALUE_SECOND){
        result[PACK_VALUE_SECOND] = 1;
    } else if (pieces <= PACK_VALUE_FIRST){
        result[PACK_VALUE_FIRST] = 1;
    } else if(pieces % 2 == 0 && pieces > PACK_VALUE_FIRST * 2){
        let oveloadedEight = Math.ceil(pieces / PACK_VALUE_FIRST);
        let diff = oveloadedEight * PACK_VALUE_FIRST - pieces;
        if(pieces / diff == 0){
            result[PACK_VALUE_FIRST] = diff;
        } else {
            result[PACK_VALUE_FIRST] = oveloadedEight - (diff / 2);
            result[PACK_VALUE_SECOND] = diff / 2;
        }
    } else {
        result[PACK_VALUE_FIRST] = pieces / PACK_VALUE_FIRST;
        result[PACK_VALUE_FIRST] = 1;
    }
    return result;
}
function renderResult(arr){
    SIX_PIECES_OUTPUT.textContent = arr[PACK_VALUE_SECOND];
    EIGHT_PIECES_OUTPUT.textContent = arr[PACK_VALUE_FIRST];
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