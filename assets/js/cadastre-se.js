const password = document.getElementById('password')
const confirmarPassword = document.getElementById('confirma-password')

function cadastrarUsuario() {
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')

    if (password.value == confirmarPassword.value) {
        // Cadastrar no local storage

        // Verifica se a lista existe no local storage
        let lista = window.localStorage.getItem('usuarios')

        if (lista == undefined) {
            // Não existe a lista, então cria e adiciona o usuário
            lista = []

            // Adicionar o usuário na lista
            let usuario = {
                'nome': nome.value,
                'email': email.value,
                'password': password.value 
            }
            lista.push(usuario)

            // Salvar no local storage a lista
            window.localStorage.setItem('usuarios', JSON.stringify(lista))
            alert('Usuário cadastrado')
        } else {
            // Adicionar novos usuários
            // Primeiro buscar a lista no local storage
            let listaE = window.localStorage.getItem('usuarios')
            listaE = JSON.parse(listaE)
            
            let usuarioA = {
                'nome': nome.value,
                'email': email.value,
                'password': password.value
            }

            //Adiciona na lista
            listaE.push(usuarioA)

            // Salvar no local storage
            window.localStorage.setItem('usuarios', JSON.stringify(listaE))
            alert('Usuário cadastrado')

            // Limpar os dados dos campos

            nome.value = ''
            email.value = ''
            password.value = ''
            confirmarPassword.value = ''
        }

    } else {
        alert('Senha não confere, verifique seus dados')
        password.value = ''
        confirmarPassword.value = ''
    }
}

function toggleSenha() {
    const exibirSenha = document.getElementById('exibir-senha')

    if (exibirSenha.checked == true) {
        // Mostrar as senhas
        password.type = 'text'
        confirmarPassword.type = 'text'
    } else {
        // Esconder as senhas
        password.type = 'password'
        confirmarPassword.type = 'password'
    }
}