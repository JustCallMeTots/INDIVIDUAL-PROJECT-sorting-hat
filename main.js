// console.log('Shalom yall');



const renderToDom = (divId, textToRender) => {
    const firstYears = document.querySelector(divId);
    firstYears.innerHTML = textToRender;
}


const landingPage = () => {
    const domString = `
        <div class="card1">
            <h1>Welcome Student</h1>
            
            <div class="card-body1">
                <h5 class="card-title">Sorting Hat</h5>
                <p class="card-text">Welcome to Ilvermorny </p>
                <a href="sort.html" class="btn btn-primary">Sort Me!</a>
            </div>
        </div>
    `;
    renderToDom('#openingCard', domString)
};
landingPage();

// MAGICAL WIZARD CARDS! ABRACA-FUCK YOU!

const cardsOnDom = (students) =>{
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
cardsOnDom(students);




