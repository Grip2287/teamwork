function checkLogin() {
    var login = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (login === "admin" && password === "root") {
        window.location.href = "../Личный кабинет/Админ/admin.html";
    } else {
        window.location.href = "../Личный кабинет/Пользователь/User.html";
    }
}