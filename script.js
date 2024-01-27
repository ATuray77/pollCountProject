const poll = new Map();
poll.set('React', 0);
poll.set('Vue', 0);
poll.set('Angular', 0);
poll.set('Svelt', 0);
poll.set('Other', 0);

function submitForm(e) {
    e.preventDefault();

    const selectedOption = document.querySelector("input[name='poll-option']:checked")

    if (!selectedOption) { //input validation
        alert('Please Select an Option');
        return;
    }

    let voteCount = poll.get(selectedOption.value)//using the get method on our map, to pull out the value of the selected option
    poll.set(selectedOption.value, voteCount + 1)  //running set() method on the map. After getting the value, add that to the vote count
    
    //display the result
    displayResults();

    //Disabled form fields after submit
    document.getElementById('poll-form')
            .querySelectorAll('input, button')
            .forEach((el) => el.setAttribute('disabled', true))
};

function displayResults() {
    const results = document.getElementById('results')//grabs the results div
    results.innerHTML = ' '; //clears the result when this runs initially
    for (const [option, votes] of poll) { //running a forOf loop here to display the results(keys and values)
        const optionElement = document.createElement('div');
        optionElement.classList.add(  //adds bootstrap classes
            'border-bottom', //border
            'p-2', //padding
            'd-flex', //flex box
            'justify-content-between'
            );

            optionElement.innerHTML = `<strong>${option}: </strong> ${votes} Votes`
            results.appendChild(optionElement)//adds that to the DOM
    }
}

document.getElementById('poll-form').addEventListener('submit', submitForm)