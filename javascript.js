function sendEmail() {
    let name = getElementById("Name").value;
    let email = getElementById("Email").value;
    let message = getElementById("message").value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "dhrruvsharma@outlook.com",
        Password: "C7ADC34324CC8E2BB3E50849DA3A3322128F",
        To: 'dsd71213@gmail.com',
        From: email,
        Subject: "Someone Contacted You",
        Body: "Name: " + name + "<br> Email: " + email + "<br> Message: " + message
    }).then(function (message) {
        alert("mail sent successfully")
    });
}