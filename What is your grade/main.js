const btnCal = document.getElementsByTagName('button');
const result = document.getElementById("res");
const input = document.querySelector("input");
const x = document.querySelector("span");

x.addEventListener('click', e => {
    input.value = 0;1
});



btnCal[0].addEventListener('click', e => {
    result.innerHTML = getGrade(input.value);
});


const getGrade = (val) => {
    let Grade, message = '';
    getNum = parseInt(val)
    if (getNum >= 80) {
        Grade = "A";
    } else if (getNum >= 75 && getNum < 80) {
        Grade = "B+";
    } else if (getNum >= 70 && getNum < 75) {
        Grade = "B";
    } else if (getNum >= 65 && getNum < 70) {
        Grade = "C+";
    } else if (getNum >= 60 && getNum < 65) {
        Grade = "C";
    } else if (getNum >= 55 && getNum < 60) {
        Grade = "D+";
    } else if (getNum >= 50 && getNum < 55) {
        Grade = "D";
    } else {
        Grade = "F";
    }
    return Grade;

}