let num1, num2 = 0;

function calculate(params) {

    const showResult = document.getElementById('result');
    showResult.style.cssText = `color:#fff;
    text-shadow: none;
    `;
    num1 = parseFloat(document.querySelector('#num1').value);
    num2 = parseFloat(document.querySelector('#num2').value);

    switch (params) {
        case `+`:
            showResult.innerHTML = Intl.NumberFormat().format((num1 + num2));

            break;
        case `-`:
            showResult.innerHTML = Intl.NumberFormat().format((num1 - num2));
            break;
        case `x`:
            showResult.innerHTML = Intl.NumberFormat().format((num1 * num2));
            break;
        case `÷`:
            if (num1 == 0 && num2 == 0) {
                showResult.style.cssText = `color:#ac0a0a;
                text-shadow: 1px 1px 4px #000;
                `;
                showResult.innerHTML = `Result is undefined`;
                break;
            } else if (num2 === 0) {
                showResult.style.cssText = `color:#ac0a0a;
                text-shadow: 1px 1px 4px #000;
                `;
                showResult.innerHTML = `Cannot divide by zero`;
                break;
            }
            showResult.innerHTML = Intl.NumberFormat().format((num1 / num2));
            break;
        case `Clear`:
            const allInput = document.querySelectorAll('input');
            allInput.forEach(item => {
                item.value = 0;
            });
            showResult.innerHTML = 0;
            allInput[0].focus();
        default:
            break;
    }

}

const btn = document.querySelectorAll("button");
btn.forEach(item => {
    item.addEventListener('mouseover', e => {
        e.target.style.cssText = `
        cursor:pointer;
        transition: 0.3s;
        background-color:#868686;
        color:#fff;
        `
    });

    item.addEventListener('mouseleave', e => {
        e.target.style.cssText = `
        transition: 0.3s;
        background-color:#fff;
        color: #000;

        `
    });

    item.addEventListener('click', e => {
        try {
            calculate(e.target.innerHTML);
        } catch (error) {
            console.error(error);
        }

    });
});

const allInput = document.querySelectorAll('input');
allInput.forEach(item => {
    item.addEventListener('focusin', e => {
        e.target.style.cssText = `
        cursor:pointer;
        transition: 0.5s;
        background-color:#868686;
        color:#fff;
        `
        if (e.target.value == 0) {
            e.target.value = '';
        }
    });
    item.addEventListener('focusout', e => {
        e.target.style.cssText = `
        transition: 0.5s;
        background-color:#fff;
        color:#000;
        `
        if (e.target.value === '') {
            e.target.value = 0;
        }
    });
    item.addEventListener('mouseover', e => {
        e.target.style.cssText = `
        cursor:pointer;
        transition:0.5s;
        background-color:#868686;
        color:#fff;
        `
    });
    item.addEventListener('mouseleave', e => {
        e.target.style.cssText = `
        cursor:pointer;
        transition: 0.5s;
        background-color:#fff;
        color:#000;
        `
    });
});

const result = document.querySelector('p');
result.addEventListener('mouseover', (e) => {
    let getE = e.target.innerHTML.replaceAll(",", "");
    try {
        if (isNaN(getE)) {
            e.target.style.cssText = `cursor: not-allowed;
            color: #ac0a0a;
            text-shadow: 1px 1px 4px #000; 
            `
        } else {
            e.target.style.cssText = `cursor: pointer;`
        }
    } catch (error) {
        console.error(error);
    }
});
result.addEventListener('click', (e) => {
    let getE = e.target.innerHTML.replaceAll(",", "");
    try {
        if (isNaN(getE)) {
            throw "Result can not be String.";
        }
        else {
            allInput[0].value = getE;
            allInput[1].focus();
            allInput[1].value = '';
        }
    } catch (error) {
        console.error(error);
    }
});