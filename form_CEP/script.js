// const cepInput = document.getElementById("cep");

// cepInput.addEventListener("blur", () => {
//   const cep = cepInput.value;
  
//   if (!cep) return;
  
//   const cepRegex = /^[0-9]{8}$/;
  
//   if (!cepRegex.test(cep)) {
//     alert("CEP inválido. Por favor, insira um CEP válido com 8 dígitos.");
//     cepInput.value = "";
//   } else {
//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//       .then(response => response.json())
//       .then(data => {
//         document.getElementById("city").value = data.localidade;
//         document.getElementById("street").value = data.logradouro;
//         document.getElementById("state").value = data
 
(function() {
  // Quando o formulário é enviado
  $('#address-form').submit(function(e) {
    e.preventDefault();
    
    // Obtém o valor do CEP
    var cep = $('#cep').val().replace(/\D/g, '');
    
    // Verifica se o CEP é válido
    if (cep.length != 8) {
      alert('CEP inválido!');
      return;
    }
    
    // Faz uma requisição GET para a API ViaCEP
    $.get('https://viacep.com.br/ws/' + cep + '/json/', function(data) {
      // Preenche os campos de rua, número, cidade e estado
      $('#street').val(data.logradouro);
      $('#number').val(data.numero);
      $('#city').val(data.localidade);
      $('#state').val(data.uf);
    });
  });
  
  // Formata o campo CEP
  $('#cep').mask('00.000-000');
});