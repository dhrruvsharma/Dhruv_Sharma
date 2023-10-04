function sendEmail() {
    sendEmail.send({
        Host: "smtp.gmail.com",
        Username: "dhrruvsharma@outlook.com",
        Password: "dsd71213@gmail",
        To: 'dsd71213@gmail.com',
        From: document.getElementById("Email").value,
        Subject: "Someone Contacted You",
        Body: "Name: " + getElementById("Name").value
            + "<br> Email: " + getElementById("Email").value
            + "<br> Message: " + getElementById("message").value
    }).then(
        message => alert("Message sent successfully")
    );
}