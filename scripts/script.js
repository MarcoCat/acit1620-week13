function handleClick(event) {
    switch (event.target.textContent) {
        case 'Submit':
            sumbitNames()
            break;

        case 'Change Background Color':
            changeBG()
            break;
    }
}

function sumbitNames() {
    let fname = document.querySelector('#firstname');
    let lname = document.querySelector('#lastname');
    let pname = document.querySelector('#progName');
    students.push({ 'firstName': fname.value, 'lastName': lname.value, 'progName': pname.value });
    populateList(students[students.length - 1]);
    fname.value = '';
    lname.value = '';
    pname.value = '';
    console.log(students);
}

function changeBG() {
    document.body.classList.toggle('bgcolor');
}

function populateList(student) {
    let newLi = document.createElement('li');
    newLi.textContent = `${student.firstName} ${student.lastName}`;
    if (student.progName === 'CIT') {
        let citList = document.querySelector('.CIT');
        citList.appendChild(newLi);
    }
    else if (student.progName === 'CST') {
        let cstList = document.querySelector('.CST');
        cstList.appendChild(newLi);
    }
}

let students = []

document.body.addEventListener('click', handleClick);