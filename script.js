function calculateTip() {
    let amount = document.getElementById('billTotal').value;
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const currency = document.getElementById('currency').value;
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous error message
    errorMessage.innerText = '';

    // Validate the amount: it should be a non-negative number
    if (isNaN(amount) ||  amount < 0) {
        errorMessage.innerText = 'Please enter a valid amount (non-negative number).';
        document.getElementById('tipAmount').value = '';
        document.getElementById('totalBill').value = '';
        document.getElementById('tipPercentage').value = '';
        return;
    }   
    console.log(amount);
    amount = parseFloat(amount);
    // Calculate the tip amount in USD
    let tipAmount = (amount * tipPercentage) / 100;
    let totalAmount = amount + tipAmount;

    let conversionRate =1;
    if (currency === 'INR') {
        conversionRate = 84.07; // Conversion rate from USD to INR
    } else if (currency === 'JPY') {
        conversionRate = 149.34; // Conversion rate from USD to JPY
    }

    // Convert tip and total amounts to selected currency
    tipAmount = tipAmount * conversionRate;
    totalAmount = totalAmount * conversionRate;

    //display values
    document.getElementById('tipValue').innerText = tipPercentage;
    document.getElementById('tipAmount').value = tipAmount.toFixed(2) 
    document.getElementById('totalAmount').value = totalAmount.toFixed(2) 
    document.getElementById('tipPercentage').value = tipPercentage; 
}