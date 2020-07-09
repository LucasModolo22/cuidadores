const URL_API = 'https://cuidadores-api-pjxy6vdnga-uw.a.run.app'

document.getElementById('entrar-id').addEventListener('click', async () => {

    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;

    if (email == '' || password == ''){
        window.alert('Preencha todos os campos');
        return;
    };

    var payloadJSON = JSON.stringify({email: email});

    await fetch(`${URL_API}/user/email`, {
        method: "POST",
        body: payloadJSON,
        headers: {"Content-Type": "application/json; charset=UTF-8"}
    }).then(async (response) => {
        if (response.status == 400) {
            window.alert('Nenhum cadastro encontrado com esse email');
            return;
        } else {
            await response.json().then((user) => {

                var date = new Date();
                date.setDate(date.getDate() + 2); 
                
                if (user.data.cuidador.length == 1) {
                    if (user.data.cuidador[0].senha == password) {

                        var userInfo = JSON.stringify(user.data.cuidador[0])
                        var userInfoStr = btoa(userInfo)

                        document.cookie = `user=${userInfoStr};expires=${date.toUTCString()};path=/;`;

                        window.location.href = 'logincuidador.html'
                        
                    } else {
                        window.alert('Senha incorreta');
                        return;
                    }
                } else {
                    if (user.data.responsavel[0].senha == password) {
                        
                        var userInfo = JSON.stringify(user.data.responsavel[0])
                        var userInfoStr = btoa(userInfo)

                        document.cookie = `user=${userInfoStr};expires=${date.toUTCString()};path=/;`;

                        window.location.href = 'loginresponsavel.html'

                    } else {
                        window.alert('Senha incorreta');
                        return;
                    }
                }
            });
        }
    });
});