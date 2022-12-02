let inputName = document.querySelector('.inputName');
let inputRow = document.querySelector('.inputRow');
let list = document.querySelector('.list ul');
let buttonSum = document.querySelector('.content__button button');
let contentWrapper = document.querySelector('.content__calculator');


let htmlRow = '';
let arrayName = [];
inputRow.addEventListener('keyup', (e) => {
    let value = e.currentTarget.value;

    if (value) {
        [...Array(Number(value))].forEach(e => {
            return htmlRow += `
            <div class="content__calculator--item">
         <input type="number" class="inputMoney" placeholder="Nhập số tiền">
     <input type="number" placeholder="Tỉ lệ phần trăm"
                                  class="inputPercent">
                          </div>
    `;
        });
    } else {
        htmlRow = '';

    }

    contentWrapper.innerHTML = htmlRow;

});

const handleDelete = (index) => {
    let html;
    arrayName = arrayName.filter(e => e !== arrayName[index]);
    if (arrayName.length <= 0) {
        list.innerHTML = '';
    } else {
        arrayName.forEach((e, index) => {
            return html += `
                                        <li>
                                <p class="name">
                                    ${e.name}
                                    <span onclick="handleDelete(${index})">X</span>
                                </p>
                                <p class="money" >
                                    ${e.money} K
                                </p>
                            </li>
            `;
        });
        list.innerHTML = html;
    }

};

buttonSum.addEventListener('click', () => {
    let sum = 0;
    let inputMoney = document.querySelectorAll('.inputMoney');
    let inputPercent = document.querySelectorAll('.inputPercent');
    if (inputMoney.length > 0) {
        for (let i = 0; i < inputMoney.length; i++) {
            if (inputMoney[i]?.value && inputPercent[i]?.value) {
                sum += Number(inputMoney[i].value) * Number(inputPercent[i].value) / 100;
            } else {
                sum = 0;
                break;
            }
        }

    }
    if (inputName.value && sum) {
        let html = ``;
        arrayName.push({
            name: inputName.value,
            money: sum
        });
        arrayName.forEach((e, index) => {
            return html += `
                                        <li>
                                <p class="name">
                                    ${e.name}
                                    <span onclick="handleDelete(${index})">X</span>
                                </p>
                                <p class="money" >
                                    ${e.money} K
                                </p>
                            </li>
            `;
        });
        list.innerHTML = html;
        inputRow.value = '';
        htmlRow = '';
        contentWrapper.innerHTML = '';
        inputName.value = '';
    }
});















