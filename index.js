/**
 * Shows in DOM the secondFace section, along with the selected value.
 * @param {HTMLInputElement} selectedValue
 */
const renderSecondFade = (selectedValue) => {
    // Looks for elements in DOM before changing them.
    const secondFace = document.querySelector('.secondFace');
    const selectedSpanText = document.querySelector("#selected");
    // Checks that the secondFace and selectedSpanText exits in DOM.
    if (secondFace && selectedSpanText) {
        secondFace.style.display = 'block';
        selectedSpanText.textContent = selectedValue.value;
    }
}

/**
 * Looks for the selected value,
 * then triggers the secondFace section just if the user selects a value.
 */
const handleSubmit = () => {
    const getSelectedValue = document.querySelector(
        'input[name="score"]:checked');
    if (getSelectedValue) {
        renderSecondFade(getSelectedValue)
    }
}