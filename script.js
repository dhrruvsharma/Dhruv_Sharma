let nm = undefined;
let m = undefined;
let msg = undefined;
function sendEmail() {
    nm = document.getElementById("Name").value;
    m = document.getElementById("Email").value;
    msg = document.getElementById("message").value;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "dhrruvsharma@outlook.com",
        Password: "C7ADC34324CC8E2BB3E50849DA3A3322128F",
        To: 'dsd71213@gmail.com',
        From: "dhrruvsharma@outlook.com",
        Subject: "Someone contacted you",
        Body: "Name: " + nm + "<br> Email: " + m + "<br> Message: " + msg,
    })
        .then(function (message) {
            alert("mail sent successfully")
        })
}