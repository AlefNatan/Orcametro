window.addEventListener("DOMContentLoaded", function() {
    var dataAtualElement = document.getElementById("dataAtual");
    var dataAtual = new Date();
  
    var opcoesFormato = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    var formatoData = new Intl.DateTimeFormat('pt-BR', opcoesFormato).format(dataAtual);
  
    dataAtualElement.innerText = formatoData;
  });

window.addEventListener("DOMContentLoaded", function() {
  const divs = document.querySelectorAll('.container');

  for (let i = 1; i < divs.length; i++) {
    divs[i].classList.add('hidden');
  }

  const divsArray = Array.from(divs); // Converter a NodeList em um array para usar o método indexOf()

  divsArray.forEach(function(div, index) {
    const adicionar = div.querySelector('img[alt="Adicionar"]');
    const lixeira = div.querySelector('img[alt="lixeira"]');
    const celulaSeguinte = divsArray[index + 1];

    adicionar.addEventListener('click', function() {
      adicionar.classList.add('hidden');
      if (celulaSeguinte) {
        celulaSeguinte.classList.remove('hidden');
      }
    });

    lixeira.addEventListener('click', function() {
      const celula = this.parentNode;
      celula.classList.add('hidden');
      const celulaAnterior = divsArray[index - 1];
      if (celulaAnterior) {
        const adicionarCelulaAnterior = celulaAnterior.querySelector('img[alt="Adicionar"]');
        adicionarCelulaAnterior.classList.remove('hidden');
      }
      if (index === divsArray.length - 1) {
        const ultimaCelula = divsArray[divsArray.length];
        ultimaCelula.classList.remove('hidden');
      }
    });
  });
});

window.addEventListener("DOMContentLoaded", function() {
    // Selecionando todas as divs com a classe "container"
    const divs = document.querySelectorAll('.container');
  
    // Iterando sobre cada div
    divs.forEach((div) => {
      // Capturando o primeiro e o terceiro input da div
      const input1 = div.querySelector('input:nth-of-type(1)');
      const input3 = div.querySelector('input:nth-of-type(3)');
  
      // Obtendo os valores dos inputs
      const value1 = parseFloat(input1.value);
      const value3 = parseFloat(input3.value);
  
      // Verificando se os valores são numéricos antes de realizar a multiplicação
      if (!isNaN(value1) && !isNaN(value3)) {
        const resultado = value1 * value3;
  
        // Atualizando o conteúdo do elemento <p> com o resultado
        const resultadoElemento = div.querySelector('p.p');
        resultadoElemento.textContent = resultado.toFixed(2);
      }
    });
  });
  
  window.addEventListener("DOMContentLoaded", function() {
    // Obtendo todas as divs com classe "container"
    var divs = document.querySelectorAll(".container");
  
    // Função para atualizar a multiplicação e calcular o subtotal
    function atualizarMultiplicacao() {
      var subtotal = 0; // Variável para armazenar a soma dos resultados
  
      // Iterando sobre todas as divs
      divs.forEach(function(div) {
        // Obtendo os elementos dentro de cada div
        var input1 = div.querySelector(".input1");
        var input3 = div.querySelector(".input3");
        var resultado = div.querySelector(".p");
  
        // Convertendo os valores para números
        var valor1 = parseFloat(input1.value);
        var valor3 = parseFloat(input3.value);
  
        // Verificando se os valores são válidos
        if (isNaN(valor1)) {
          valor1 = 0;
        }
        if (isNaN(valor3)) {
          valor3 = 0;
        }
  
        // Realizando a multiplicação
        var multiplicacao = valor1 * valor3;
  
        // Atualizando o conteúdo do elemento <p>
        resultado.innerHTML = multiplicacao.toFixed(2);
  
        // Somando o resultado ao subtotal
        subtotal += multiplicacao;
      });
  
      // Exibindo o subtotal na div desejada
      var subtotalElement = document.querySelector(".valor");
      subtotalElement.innerHTML = subtotal.toFixed(2);
    }
  
    // Adicionando o evento de escuta nos inputs de todas as divs
    divs.forEach(function(div) {
      var input1 = div.querySelector(".input1");
      var input3 = div.querySelector(".input3");
      input1.addEventListener("input", atualizarMultiplicacao);
      input3.addEventListener("input", atualizarMultiplicacao);
    });
  
    // Chamando a função inicialmente para exibir os resultados
    atualizarMultiplicacao();
  });
  
  
  

  





  
  
  

