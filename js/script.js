function calculate(originalAmountId, originalFoodId, replacementFoodId, resultId) {
    const originalAmount = parseFloat(document.getElementById(originalAmountId).value);
    const originalFoodValue = parseFloat(document.getElementById(originalFoodId).value);
    const replacementFoodValue = parseFloat(document.getElementById(replacementFoodId).value);

    if (isNaN(originalAmount) || originalAmount <= 0) {
        document.getElementById(resultId).innerText = "يرجى إدخال كمية صحيحة.";
        return;
    }

    const replacementAmount = (originalAmount * originalFoodValue) / replacementFoodValue;
    document.getElementById(resultId).innerText = `الكمية المطلوبة من البديل هي: ${replacementAmount.toFixed(2)} جم`;
}

function showCalculator(type) {
    const calculators = ['protein', 'nuts', 'fruits'];
    calculators.forEach(calc => {
        document.getElementById(calc).style.display = 'none';
    });
    document.getElementById(type).style.display = 'block';
}