window.onload = function () {
    let btn = document.getElementById("registration-button");

    btn.addEventListener('click', function (event) {

        event.preventDefault();

        document.getElementById('registration').style.display = 'none';
        document.getElementById('content-page').style.display = 'block';
    })
}