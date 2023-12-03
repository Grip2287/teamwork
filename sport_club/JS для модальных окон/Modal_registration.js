function scrollToTop() {
    window.scrollTo({ top: 10, behavior: 'smooth' });
    open();
}
function open() {
    document.getElementById('bg_fon').style.display = 'flex';
    document.getElementById('registration').style.display = 'flex';
}
function сlose_modal_registration() {
    document.getElementById('bg_fon').style.display = 'none';
    document.getElementById('registration').style.display = 'none';
}
function alert_result() {
    alert("Успешно ожидайте принятие заявки");
    сlose_modal_registration()
}