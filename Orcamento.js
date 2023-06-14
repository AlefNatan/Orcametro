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
        lixeira.classList.add('hidden');
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
          const lixeiraCelulaAnterior = celulaAnterior.querySelector('img[alt="lixeira"]')
          adicionarCelulaAnterior.classList.remove('hidden');
          lixeiraCelulaAnterior.classList.remove('hidden');
        }
       // Limpar campos da div
        const camposDiv = celula.querySelectorAll('input[type="text"]');
        camposDiv.forEach(function(campo) {
        campo.value = ' ';
        campo.dispatchEvent(new Event('input', { bubbles: true }));
        });

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
    var divs = document.querySelectorAll(".container");
  
    function formatarReais(valor) {
      var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      });
  
      return formatter.format(valor);
    }
  
    function formatarPorcentagem() {
      var porcInput = document.getElementById("porc-input");
      var valor = porcInput.value.replace("%", "");
      porcInput.value = valor + "%";
    }
  
    function atualizarMultiplicacao() {
      var subtotal = 0;
      var desconto = 0;
  
      divs.forEach(function(div) {
        var input1 = div.querySelector(".input1");
        var input3 = div.querySelector(".input3");
        var resultado = div.querySelector(".p");
  
        var valor1 = parseFloat(input1.value.replace(",", "."));
        var valor3 = parseFloat(input3.value.replace(",", "."));
  
        if (isNaN(valor1)) {
          valor1 = 0;
        }
        if (isNaN(valor3)) {
          valor3 = 0;
        }
  
        var multiplicacao = valor1 * valor3;
  
        resultado.innerHTML = formatarReais(multiplicacao);
  
        subtotal += multiplicacao;
      });
  
      var porcInput = document.getElementById("porc-input");
      var porcentagem = parseFloat(porcInput.value);
  
      if (isNaN(porcentagem) || porcentagem < 0) {
        porcentagem = 0;
      } else if (porcentagem > 100) {
        porcentagem = 100;
        porcInput.value = "100%";
      }
  
      desconto = (subtotal * porcentagem) / 100;
  
      var descontoElement = document.getElementById("val");
      descontoElement.innerHTML = formatarReais(desconto);
  
      var subtotalElement = document.querySelector(".valor");
      subtotalElement.innerHTML = formatarReais(subtotal);
  
      var valTotElement = document.querySelector(".ValTot");
      var valorTotal = subtotal - desconto;
      valTotElement.innerHTML = formatarReais(valorTotal);
    }
  
    divs.forEach(function(div) {
      var input1 = div.querySelector(".input1");
      var input3 = div.querySelector(".input3");
      input1.addEventListener("input", atualizarMultiplicacao);
  
      input3.addEventListener("input", function() {
        // Verifica se o valor inserido possui mais de duas casas decimais
        var inputValue = input3.value;
        if (/\.\d{3,}$/.test(inputValue)) {
          // Remove qualquer dígito além das duas casas decimais
          input3.value = parseFloat(inputValue).toFixed(2);
        }
        atualizarMultiplicacao();
      });
    });
  
    var porcInput = document.getElementById("porc-input");
    porcInput.addEventListener("input", function() {
      formatarPorcentagem();
      atualizarMultiplicacao();
    });
  
    atualizarMultiplicacao();
  });
  
  

  





  
  
  

