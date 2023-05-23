
function limpa_formulário_cep() {
  document.getElementById('endereco').value = ("");
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    document.getElementById('endereco').value = (conteudo.logradouro);
  }
  else {
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}
    
function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');

    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {
            document.getElementById('endereco').value="...";

            var script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            document.body.appendChild(script);
        } //end if.
        else {
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        limpa_formulário_cep();
    }
};