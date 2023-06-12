
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













