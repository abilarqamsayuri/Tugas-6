// // membuat program pengecekan user



function CekUser(data_username, data_password){

    let user = [
        ['admin', 'admin123'],
        ['santri', 'santri123'],
        ['uhuy', 'spontanuhuy']
    ]

for (user of user){
    let username = user[0] //ini adalah username
    let password = user[1] //ini adalah password

    if (u == data_username && p == data_password) {
        window.location = "home.html"
    }

}

}

function Login(){

    let username = document.getElementById('username').value

    let password = document.getElementById('password').value

    if (username.length < 1 || password.length < 1) 
    {
        alert("isi username atau password terlebih dahulu")
    }


    else if (password.length < 8)
    {
        alert("Password minimal 8 karakter")
    }


    else {
        CekUser(username, password)
    }

}

document.getElementById('submit').addEventListener('click', Login)

