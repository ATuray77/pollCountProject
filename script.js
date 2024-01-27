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

    let voteCount = //using the get method on our map
};



document.getElementById('poll-form').addEventListener('submit', submitForm)