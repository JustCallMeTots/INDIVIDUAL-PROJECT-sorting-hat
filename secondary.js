const studentIdNum = Math.floor(Math.random() * 100000000) +1;
const students = [
    {
        name: 'Mortimer Hornbeam',
        house: 'Horned Serpent',
        pronouns: 'He/Him',
        studentId: '111111111'
    },
    {
        name: 'Ginger Inkwell',
        house: 'Thunderbird',
        pronouns: 'She/Her',
        studentId: '222222222'
    },
    {
        name: 'Fennel Flocks',
        house: 'Wampus',
        pronouns: 'She/Her',
        studentId: '333333333'
    },
    {
        name: 'Greed',
        house: 'Puckwudgie',
        pronouns: 'They/Them',
        studentId: '444444444'
    }
];


const followersGormlaith =[
    
        {
            name: 'Carnelian Cork',
            house: 'Horned Serpent',
            pronouns: 'He/Him',
            studentId: '555555555'
        },
        {
            name: 'Azalea Hedge',
            house: 'Thunderbird',
            pronouns: 'She/Her',
            studentId: '666666666'
        },
        {
            name: 'Fen Nightshade',
            house: 'Wampus',
            pronouns: 'She/Her',
            studentId: '777777777'
        },
        {
            name: 'Coralia',
            house: 'Puckwudgie',
            pronouns: 'They/Them',
            studentId: '888888888'
        }
    
];



//  console.log(students);

const houses =['Thunderbird', 'Wampus', 'Horned Serpent', 'Puckwudgie']
const sort = houses[Math.floor(Math.random() * houses.length)]

// console.log(sort);


const renderToDom = (divId, textToRender) => {
    const firstYears = document.querySelector(divId);
    firstYears.innerHTML = textToRender;
}

const filterBtn = () => {
    const domString = `
    <button type="button" class="btn btn-dark" id="Horned Serpent">Horned Serpent</button>
    <button type="button" class="btn btn-dark" id="Thunderbird">Thunderbird</button>
    <button type="button" class="btn btn-dark" id="Wampus">Wampus</button>
    <button type="button" class="btn btn-dark" id="Puckwudgie">Puckwudgie</button>
    <button type="button" class="btn btn-dark" id="allWizards">All Wizards</button>
    `
    renderToDom('#filterBtn', domString)
}

const sortingBtn = () => {
    const domString = 
    `<div class="cardSort text-center">
   
    <div class="card-body">
      <h5 class="card-title">Ilvermorny sorting ceremony</h5>
      <p class="card-text">Enter your information below to be sorted into a house.</p>
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
     
    </div>
    
  </div>
    `
    renderToDom('#sortingBtn', domString)

}

const cardOnDom = (followersGormlaith) => {
    let domString ='';
    for (const member of followersGormlaith) {
        domString +=
        `
        <div class="card3" style="width: 18rem;">
            <div class="card-body">
                <h1 class="name">${member.name}</h1>
                <p class="pronouns">${member.pronouns}</p>
                <p class="house">${member.house}</p>
                <button type="button" class="btn btn-outline-danger" id="delete--${member.studentId}">Re-Enroll</button>
            </div>
        </div>
        `;
    }
    renderToDom('#followersGormlaith', domString);
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
                <button type="button" class="btn btn-outline-danger" id="delete--${children.studentId}">Ex-spell</button>
            </div>
        </div>
        `;
        
    }
    renderToDom('#studentList', domString);
}

const goodTitle = () => {
    const domString = `
    <header>Currently enrolled students</header>
    `;
    renderToDom('#studentTitle', domString)

}

const evilTitle = () => {
    const domString = `
    <header>Followers of Gormlaith Gaunt</header>
    `;
    renderToDom('#evilTitle', domString)

}
// %%%%%%%%% *********Event Listeners********* %%%%%%%%%

const eventListeners = () => {



    // THESE ARE THE FILTER BUTTONS YOU DUMB MOTHERFUCKER

    document.querySelector('#filterBtn').addEventListener('click', (e) => {
        // console.log('ahhhhhhhhh', e.target.id);
        
        if (e.target.id === 'allWizards') {
            cardsOnDom(students);
            
        } else if (e.target.id) {
            const kids = students.filter(taco => taco.house === e.target.id);
            cardsOnDom(kids); 
        } 
    })

    document.querySelector('#filterBtn').addEventListener('click', (e) => {
        // console.log('ahhhhhhhhh', e.target.id);
        
        if (e.target.id === 'allWizards') {
            cardOnDom(followersGormlaith);
            
        } else if (e.target.id) {
            const kids = followersGormlaith.filter(taco => taco.house === e.target.id);
            cardOnDom(kids); 
        } 
    })



    // THIS IS THE BULLSHIT DELETE BUTTON THAT LEARNED THE TRUTH OF IT EVIL WAYS AND DECIDED TO FINALLY WORK PROPERLLY


    document.querySelector('#studentList').addEventListener('click', (e) => {
        if (e.target.id) {
            const [method, studentId] = e.target.id.split('--');

            const index = students.findIndex(wand => wand.studentId === studentId);
            
            if (e.target.id.includes('delete')){
                // console.log('ahhhhhhh')

              const expelledStudent = students.splice(index, 1);

                console.log(expelledStudent);
                followersGormlaith.push(...expelledStudent)


                cardsOnDom(students)
                cardOnDom(followersGormlaith)
            }
        }
    })

    document.querySelector('#followersGormlaith').addEventListener('click', (e) => {
        if (e.target.id) {
            const [method, studentId] = e.target.id.split('--');
            const index = followersGormlaith.findIndex(evil => evil.studentId === studentId);

            if (e.target.id.includes('delete')){
                const reEnrolled = followersGormlaith.splice(index, 1);

                students.push(...reEnrolled)

                cardOnDom(followersGormlaith)
                cardsOnDom(students)
            }
        }
    })


    // THIS IS MY NEW STUDENT FORM IT WORKS ALMOST PERFECTLY

   const form = document.querySelector('form');
   form.addEventListener('submit', (e) => {
       e.preventDefault();

        const houses = ['Thunderbird', 'Wampus', 'Horned Serpent', 'Puckwudgie']
        const sort = houses[Math.floor(Math.random() * houses.length)]
        const studentIdNum = String(Math.floor(Math.random() * 10000000) +1);

        const newStudentObj = {
            name: document.querySelector('#name').value,
            house: sort,
            pronouns: document.querySelector('#pronouns').value,
            studentId: studentIdNum,
        }
        students.push(newStudentObj);


    

        cardsOnDom(students)
        form.reset();
    });



   
};





const startApp = () => {
    sortingBtn();
    filterBtn();
    cardsOnDom(students);
    goodTitle();
    cardOnDom(followersGormlaith);
    evilTitle();
    eventListeners();
};
startApp();