const addBtn = document.querySelector('.addBtn');
const cardBody = document.querySelector('.card-body div');
const addAll = document.querySelector('.addAll');
const randomBtn = document.querySelector('.randomBtn');
const inputArr = [];
let currentIn = 1;
let inValues = [];
const randomBtnLast = document.querySelector('.randomBtnLast');

addBtn.addEventListener('click', e => {
    e.preventDefault();

    let count = +prompt('Введите количество участников', '2');

    if(count == 0 || count == 1){
        alert("Количество участников не может быть пустым или равно к единице!");
    }else {
        let input;
        for(let i = 0; i < count; i++){
            input = `<input class="form-control mb-3 inputs" placeholder="Имя участника №${currentIn}">`;
            inputArr.push(input);
            currentIn++;
        }

        inputLoad();

        addAll.style.display = "block";
        addBtn.style.display = "none";
    }
});

addAll.addEventListener('click', e => {
    e.preventDefault();

    let input = cardBody.querySelectorAll('.inputs');
    for (let i = 0; i < input.length; i++) { 
      if (input[i].value == "") {
        alert("Заполните все поля!");
        return;
      }
    }
    for (let i = 0; i < input.length; i++) {
       inValues.push(input[i].value);
    }

    showMembers();
    console.log(inValues);
    addAll.style.display = "none";
    randomBtn.style.display = "block";
});

randomBtn.addEventListener('click', e => {
    e.preventDefault();

    let winner = random();
    const members = document.querySelectorAll('.list');

    for(let i = 0; i < members.length; i++){
        if(winner == members[i].value){
            alert("Победил " + winner + "!");
            members[i].style.background = "#0FFF95";
            members[i].style.color = "#fff";
            break;
        }
    }

    randomBtn.style.display = "none";
    randomBtnLast.style.display = "block";
});

randomBtnLast.addEventListener('click', e => {
    e.preventDefault();

    let winner = random();
    const members = document.querySelectorAll('.list');

    for(let i = 0; i < members.length; i++){
        if(winner == members[i].value){
            alert("Победил " + winner + "!");
            members[i].style.background = "#0FFF95";
            members[i].style.color = "#fff";
        }else {
            members[i].style.background = "none";
            members[i].style.color = "#000";
        }
    }
})

const inputLoad = () => {
    cardBody.innerHTML = inputArr;
    let input = cardBody.querySelectorAll('.inputs');

    for(let i = 0; i < input.length; i++){
        if(input[i].nextSibling){
            input[i].nextSibling.remove();
        }else{
            return;
        }
    }
};

const showMembers = () => {
    const card_body = document.querySelector('.card-body');
    const filteredArr = inValues.map((index) => {
        return `
        <input type="submit" class="form-control mb-3 list" value="${index}">
        `
    }).join('');

    card_body.insertAdjacentHTML("afterbegin", '<h5 class="body-text mb-3">Список всех участников</h5>');

    cardBody.innerHTML = filteredArr;
}

const random = () => {
    let ran = Math.floor(Math.random() * inValues.length);
    let name = inValues[ran];

    return name
}