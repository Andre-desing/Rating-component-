

function submitbtn() {
    document.querySelector('.secondFace').style.display = 'block';
    var getSelectedValue = document.querySelector(
        'input[name="score"]:checked');

    if (getSelectedValue != null) {
        document.getElementById("selected").innerHTML
            = getSelectedValue.value;
    }

    var getSelectedValue = document.getElementById("score-btn").value;

    if (getSelectedValue != null) {
        document.getElementById("selected").innerHTML
            = getSelectedValue.value;

    }

}