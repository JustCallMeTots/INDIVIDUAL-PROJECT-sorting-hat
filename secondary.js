const students = [
    {
        name: 'Mortimer Hornbeam',
        house: 'Horned Serpent',
        pronouns: 'He/Him'
    },
    {
        name: 'Ginger Inkwell',
        house: 'Thunderbird',
        pronouns: 'She/Her'
    },
    {
        name: 'Fennel Flocks',
        house: 'Wampus',
        pronouns: 'She/Her'
    },
    {
        name: 'Greed',
        house: 'Puckwudgie',
        pronouns: 'They/Them'
    }
];

const houses =['Thunderbird', 'Wampus', 'Horned Serpent', 'Puckwudgie']
const sort = houses[Math.floor(Math.random() * houses.length)]

// console.log(sort);


const renderToDom = (divId, textToRender) => {
    const firstYears = document.querySelector(divId);
    firstYears.innerHTML = textToRender;
}

const sortingBtn = () => {
    const domString = 
    `<div class="cardSort text-center">
   
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <form>
        <div class="form-floating mb-3">
            <input type="name" class="form-control" id="name" placeholder="name">
            <label for="floatingInput">Full Name</label>
            </div>
            <div class="form-floating">
            <input type="text" class="form-control" id="pronouns" placeholder="Password">
            <label for="floatingPassword">Pronouns</label>
        </div>
        
        <button type="submit" class="btn btn-secondary" id="soringHat">Sort Me!</button>
      </form>  
      <div>
    </div>
    
  </div>
    `
    renderToDom('#sortingBtn', domString)

}





const cardsOnDom = (students) => {
    let domString ='';
    for (const children of students) {
        domString += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h1 class="name">${children.name}</h1>
                <p class="pronouns">${children.pronouns}</p>
                <p class="house">${children.house}</p>
                <button type="button" class="btn btn-outline-danger"><b>Ex-spell</b></button>
            </div>
        </div>
        `;
        
    }
    renderToDom('#studentList', domString);
}


// %%%%%%%%% Event Listeners %%%%%%%%%
const eventListeners = () => {


   const form = document.querySelector('form');
   form.addEventListener('submit', (e) => {
       e.preventDefault();

        const houses = ['Thunderbird', 'Wampus', 'Horned Serpent', 'Puckwudgie']
        const sort = houses[Math.floor(Math.random() * houses.length)]

        const newStudentObj = {
            name: document.querySelector('#name').value,
            house: sort,
            pronouns: document.querySelector('#pronouns').value
        }
        students.push(newStudentObj);

        cardsOnDom(students)
        form.reset();
    });
};

const startApp = () => {
    sortingBtn();
    cardsOnDom(students);
    eventListeners();
};
startApp();