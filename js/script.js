jQuery(function($){
  $("#cep").mask("00000-000")
  $('.cpf-cnpj').change(function(){
    var campo = $(this).val();
    if (campo == "cpf"){	
      $("#InputCpf-cnpj").val('');
      $("#label-cpf-cnpj").html('CPF');
      $("#InputCpf-cnpj").mask("999.999.999-99");
    }
    else if (campo == "cnpj"){
      $("#InputCpf-cnpj").val('');
      $("#label-cpf-cnpj").html('CNPJ');
      $("#InputCpf-cnpj").mask("99.999.999/9999-99");
    }			
  });
});

function validação(){
    var nome = document.getElementById('nome').value;
    var cpfcnpj = document.getElementById('InputCpf-cnpj').value;
    var cep = document.getElementById('cep').value;
    var estado = document.getElementById('estado').value;
	
    if(nome == "" || cpfcnpj == "" || cep == "" || estado == ""){
        alert("Todos os campos devem ser preenchidos!!!");
        return false;
    }else{
		return true;
	}
}
