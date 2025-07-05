function calculateAge() {
    const birthdateInput = document.getElementById('birthDate').value;
    const birthDate = new Date(birthdateInput); // convert to Date()
    const today = new Date();


    if (!birthdateInput) {
        alert('Please enter your birthdate!');
        return;
    }

    if (birthDate > today) {
        alert("You haven't been born yet!😂 Please enter your birth date correctly");
        return;
    }

    const diffTime = today - birthDate; // milliseconds

    const days = Math.floor(diffTime / (24 * 60 * 60 * 1000));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.4375); // average month length
    const years = Math.floor(days / 365.25);   // for leap years

    document.getElementById('days').innerText = days;
    document.getElementById('weeks').innerText = weeks;
    document.getElementById('months').innerText = months;
    document.getElementById('years').innerText = years;


    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('d-none');

}