//Listen For Submit
document.getElementById('loan-form').addEventListener('submit', calculateResults)

//Calculate Results
function calculateResults(e){
    
    //UI Variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value)
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

   //Compute Monthy Payments
   const x = Math.pow(1 + calculatedInterest, calculatedPayments);

   const monthly = (principal * x * calculatedInterest) / (x - 1);

   if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
   }else{
    showError('Please Check your numbers')
   }
     e.preventDefault();
}


   //Show Error
   function showError(error){
    const errorDiv = document.createElement('div');

    //Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');


    //Add class
    errorDiv.className = 'alert alert-danger';

    //Create Text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert Error above heading
    card.insertBefore(errorDiv, heading);

    //Clear error after 3 seconds
    setTimeout(clearError, 3000);

   }

   function clearError(){
    document.querySelector('.alert').remove();
   }