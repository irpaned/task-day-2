function sumbitHandler () {
    let name = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name == "") {
        return alert ("please entered your Name!")
    } else if (email == "") {
        return alert ("please entered your Email!")
    } else if (phonenumber == "") {
        return alert ("please entered your Phone Number!")
    } else if (subject == "") {
        return alert ("please entered your Subject!")
    } else if (message == "") {
        return alert ("please entered your message!")
    }

    // menampung data
    const data = {name, email, phonenumber, subject, message}

    const yourEmail = "muhammadirfan2823@gmail.com"

    let a = document.createElement ("a")
    a.href = `https://mail.google.com/mail/view-cm&fs-1&to=${yourEmail}&su-${subject}&body-${message}`
    a.click():

    console.log(data)
}