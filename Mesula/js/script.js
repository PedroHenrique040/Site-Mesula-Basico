let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn'). onclick =() => {
    searchForm.classList.toggle('active')
}

function VerificarRegistro()
{
    var ok = true ;

    var nomer = document.form1.nome.value  ;
    if(  nomer.length < 3  ){
        ok = false ;
        document.querySelector('#erroNome')
            .textContent = "Preencha corretamente o campo Nome" ;
    }
    else {
        delete document.querySelector('#erroNome').textContent;
    }

    var senhar = document.form1.senha.value  ;
    if( senhar.length == 0){
        ok = false ;
        document.querySelector('#erroSenha')
            .textContent = "Preencha corretamente o campo Senha" ;
    }
    if( senhar.length < 8 && senhar.length > 0){
        ok = false ;
        document.querySelector('#erroSenha')
            .textContent = "Minimo 8 caracteres para a senha" ;
    }

    var emailr = document.form1.email.value  ;
    if(  emailr.indexOf( "@" ) < 0 ){
        ok = false;
        document.querySelector('#erroEmail')
            .textContent = "Preencha corretamente o campo Email" ;
    }


    if(ok){
        document.form1.submit();
    }
}



function VerificarLogin()
{
    var ok = true ;

    var i = document.form1.senha.value  ;
    if( i.length < 8 ){
        ok = false ;

    }

    var e = document.form1.email.value  ;
    if(  e.indexOf( "@" ) < 0  ){
        ok = false;

    }
    
    if(ok == false){
      document.querySelector('#erroGeral')
            .textContent = "Email ou Senha incorretos" ;
    }

    if(ok){
        document.form1.submit();
    }
}
