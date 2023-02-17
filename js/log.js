document.getElementById('btn-submit').addEventListener('click', function () {
    const emailInp = document.getElementById('email-field');
    const yourEmail = emailInp.value;

    const passInp = document.getElementById('password-field');
    const yourPass = passInp.value;

    if (yourEmail === 'baap@bank.com' && yourPass === 'baap') {
        window.location.href = 'index.html'
    } else {
        alert('Tui password voila gesos. tore ami tejjo korlam')
    }
})