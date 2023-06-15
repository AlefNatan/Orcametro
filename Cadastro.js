document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('toggle');
  const nomeInput = document.getElementById('nome');
  const cpfInput = document.getElementById('cpf');
  const cepInput = document.getElementById('cep');
  const placeholders = {
    pessoaFisica: { nome: 'Nome', cpf: 'CPF', cep: 'CEP' },
    pessoaJuridica: { nome: 'Nome da empresa', cpf: 'CNPJ', cep: 'CEP da empresa' }
  };

  const alterarPlaceholders = () => {
    const { nome, cpf, cep } = toggleSwitch.checked ? placeholders.pessoaJuridica : placeholders.pessoaFisica;
    nomeInput.placeholder = nome;
    cpfInput.placeholder = cpf;
    cepInput.placeholder = cep;
  };

  toggleSwitch.addEventListener('change', alterarPlaceholders);
});

document.addEventListener('DOMContentLoaded', function() {
  // Função para fazer a busca do CEP
  function buscarCep() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if (data.erro) {
          console.log("CEP não encontrado.");
        } else {
          console.log("Logradouro:", data.logradouro);
          console.log("Bairro:", data.bairro);
          console.log("Cidade:", data.localidade);
          console.log("Estado:", data.uf);
        }
      })
      .catch(function(error) {
        console.log("Erro na requisição: " + error.message);
      });
  }

  // Associar a função de busca ao evento "blur" do campo de CEP
  document.getElementById("cep").addEventListener("blur", buscarCep);
});













