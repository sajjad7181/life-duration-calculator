function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    const resultDiv = document.getElementById('result');
  
    if (!birthdateInput) {
      alert('Please enter your birthdate');
      return;
    }
  
    const birthDate = new Date(birthdateInput);
    const today = new Date();
  
    if (birthDate > today) {
      alert('Birthdate cannot be in the future');
      return;
    }
  
    const diffTime = today - birthDate; // milliseconds
    console.log(diffTime);
    
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.4375); // average month length
    const years = Math.floor(days / 365.25);   // account for leap years
  
    document.getElementById('days').innerText = days;
    document.getElementById('weeks').innerText = weeks;
    document.getElementById('months').innerText = months;
    document.getElementById('years').innerText = years;
  
    resultDiv.classList.remove('d-none');
  }
  