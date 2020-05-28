const getS = selector => document.querySelector(selector);
const getId = id => document.getElementById(id);

// ПЕРШИЙ СПОСІБ

getS('.btn-edit').onclick = function () {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    // const content = getS('.top-block').innerHTML;
    // getS('.edit-area').value = content;
    getS('.edit-area').value = getS('.top-block').innerHTML;
}

getS('.btn-save').onclick = function () {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
}

getS('.btn-style').onclick = function () {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
}

function fontSize() { //доступ до кожного елементу (чи до його значення value) на який клікаємо і  
    //console.log(event.target.value); //на який в html повісили onclick з ф-цією fontSize ()
    getS('.top-block').style.fontSize = event.target.value;
}
  
//Не розумію, чому не спрацьовую, видно щось видалила випадково.
let fF = document.getElementById('fontFamily');
fF.onchange = function (e) {
    // console.log(e.target.value);
    // console.log(this.value);
    getS('.top-block').style.fontFamily = this.value; // не можна використовувати при стрілочній ф-ї
}

// коли до класу colors + hide тоді:
//кольоровий кубик для тексту
getS('.btn-text-color').onclick = function () { //так як попередньо в css створювали клас show для приховування
    let colors = ['red', 'green', 'blue', 'yellow', 'deeppink', 'black', 'purple', 'gray', 'brown'];
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function () { //можна зразу повісити клік на зміну кольору тексту
            getS('.top-block').style.color = this.style.backgroundColor;

        }
    }
    getS('.colors').classList.remove('hide');
}

// кольоровий кубик для фону
getS('.btn-bg-color').onclick = function () {
    let bgcolors = ['coral', 'green', 'blue', 'yellow', 'deeppink', 'black', 'purple', 'gray', 'brown'];
    for (let a = 0; a < getS('.colors').children.length; a++) {
        getS('.colors').children[a].style.backgroundColor = bgcolors[a];
        getS('.colors').children[a].onclick = function () { //можна зразу повісити клік на зміну кольору тексту
            getS('.top-block').style.backgroundColor = this.style.backgroundColor;

        }
    }
    getS('.colors').classList.remove('hide');
}

// getS('.btn-text-color').onclick = function(){ //ця ф-я спрацьовує коли в сss .colors{ display:none;}
//     getS('.colors').style.display='flex'; 
// }


/*start function bold and cursive style*/
function fontWeight() {   // в чекбоксах є checked він повертає true, false 
    //console.log(event.target.checked);        // ми можемо через нього перевірити є галочка чи нема
    if (event.target.checked) {
        getS('.top-block').classList.add('bold');
    }
    else {
        getS('.top-block').classList.remove('bold');
    }
}
function fontStyle() {
    if (event.target.checked) {
        getS('.top-block').classList.add('cursive');
    }
    else {
        getS('.top-block').classList.remove('cursive');
    }
}
//можна спробувати тарнарний вираз
/*end function bold and cursive style*/

getS('.btn-add').onclick = function () {
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');

}



// Вибір input radio :приховуємо список і показуємо таблицю і навпаки

getId('table').onchange = function () {
    if (event.target.checked) {
        getS('.create-table').classList.add('show');
        getS('.create-list').classList.remove('show');
        getS('.create-list').classList.add('hide');

    }
}

getId('list').onchange = function () {
    if (event.target.checked) {
        getS('.create-list').classList.add('show');
        getS('.create-table').classList.remove('show');
    }

}

//формуємо таблицю

const table = document.forms['form-table'];

getS('.btn-create-table').onclick = function () {
    const countTR = table.countTR.value;
    const countTD = table.countTD.value;
    const widthTD = table.widthTD.value;
    const heightTD = table.heightTD.value;
    const widthBD = table.widthBD.value;
    const typeBD = table.typeBD.value;
    const colorBD = table.colorBD.value;

    getS('.edit-area').value += `<table>`;
    for (let i = 0; i < countTR; i++) {
        getS('.edit-area').value += `<tr>`
        for (let a = 0; a < countTD; a++) {
            getS('.edit-area').value += `<td style = "width: ${widthTD}px; height: ${heightTD}px; border: ${widthBD}px ${typeBD} ${colorBD}">TD</td>`;

        }
        getS('.edit-area').value += `</tr>`;
    }



    getS('.edit-area').value += `</table>`;

    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
}


//формуємо список

const list = document.forms['form-list'];

getS('.btn-create-list').onclick = function () {
    const countLi = list.count.value;
    const typeLi = list.type.value;

    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;  //спосіб як згенерувати лішки (створити)
    for (let i = 0; i < countLi; i++) {
        getS('.edit-area').value += `<li>item ${i + 1}</li>`;
    }

    getS('.edit-area').value += '</ul>';

    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');


    //console.log(countLi,typeLi); 
};



