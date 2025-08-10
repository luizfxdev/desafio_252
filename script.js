// Função para calcular a vibração de um número
function calculateVibration(number) {
  return number % 2 === 0 ? number * 2 : number * 3 + 1;
}

// Função para gerar todas as combinações possíveis (subconjuntos não vazios)
function generateCombinations(arr) {
  const combinations = [];
  const n = arr.length;

  // Gera todas as combinações possíveis (2^n - 1, excluindo o conjunto vazio)
  for (let i = 1; i < 1 << n; i++) {
    const combination = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        combination.push(arr[j]);
      }
    }
    combinations.push(combination);
  }

  return combinations;
}

// Função para ativar o portal e encontrar combinações que somam 42
function activatePortal(sequence) {
  const vibrations = sequence.map(num => calculateVibration(num));

  // Cria array de objetos com número original e sua vibração
  const numberVibrationPairs = sequence.map((num, index) => ({
    original: num,
    vibration: vibrations[index],
    index: index
  }));

  // Gera todas as combinações possíveis
  const combinations = generateCombinations(numberVibrationPairs);

  // Array para armazenar todas as tentativas
  const allAttempts = [];
  let successfulCombination = null;

  // Testa todas as combinações
  for (let combination of combinations) {
    const sum = combination.reduce((total, item) => total + item.vibration, 0);
    const originalNums = combination.map(item => item.original);
    const vibrationNums = combination.map(item => item.vibration);

    const attempt = {
      originalNumbers: originalNums,
      vibrations: vibrationNums,
      sum: sum,
      success: sum === 42
    };

    allAttempts.push(attempt);

    if (sum === 42 && !successfulCombination) {
      successfulCombination = combination;
    }
  }

  // Ordena tentativas por tamanho da combinação (menores primeiro) e depois por soma
  allAttempts.sort((a, b) => {
    if (a.originalNumbers.length !== b.originalNumbers.length) {
      return a.originalNumbers.length - b.originalNumbers.length;
    }
    return a.sum - b.sum;
  });

  if (successfulCombination) {
    return {
      success: true,
      sequence: successfulCombination.map(item => item.vibration),
      originalNumbers: successfulCombination.map(item => item.original),
      calculation: sequence.map(num => {
        return `${num} → ${calculateVibration(num)}`;
      }),
      allAttempts: allAttempts
    };
  }

  // Se nenhuma combinação funcionar, retorna falha
  return {
    success: false,
    sequence: vibrations,
    calculation: sequence.map(num => {
      return `${num} → ${calculateVibration(num)}`;
    }),
    allAttempts: allAttempts
  };
}

// Função para processar a entrada do usuário
function processInput() {
  const input = document.getElementById('numbers').value.trim();
  const resultDiv = document.getElementById('result');
  const calculationDiv = document.getElementById('calculation');

  // Limpa resultados anteriores
  resultDiv.textContent = '';
  calculationDiv.textContent = '';

  // Valida a entrada
  if (!input) {
    resultDiv.textContent = 'Por favor, insira números separados por vírgula.';
    return;
  }

  try {
    // Converte a entrada em um array de números
    const numbers = input.split(',').map(num => {
      const parsed = parseInt(num.trim(), 10);
      if (isNaN(parsed)) throw new Error('Entrada inválida');
      if (parsed < 1 || parsed > 100) throw new Error('Números devem estar entre 1 e 100');
      return parsed;
    });

    if (numbers.length > 10) {
      throw new Error('Máximo de 10 números permitidos');
    }

    // Ativa o portal
    const portalResult = activatePortal(numbers);

    // Cria o relatório detalhado de todas as tentativas
    let detailedReport = '<strong>Entrada:</strong> [' + numbers.join(', ') + ']<br><br>';

    detailedReport += '<strong>Cálculo das vibrações:</strong><br>';
    portalResult.calculation.forEach(calc => {
      const [num, vibration] = calc.split(' → ');
      const isEven = parseInt(num) % 2 === 0;
      const formula = isEven ? `par: ${num}×2 = ${vibration}` : `ímpar: ${num}×3+1 = ${vibration}`;
      detailedReport += `- ${num} → ${vibration} (${formula})<br>`;
    });

    detailedReport += '<br><strong>Testando todas as combinações:</strong><br>';

    portalResult.allAttempts.forEach(attempt => {
      const status = attempt.success ? '✅' : '❌';
      const statusText = attempt.success ? 'SUCESSO!' : '';
      detailedReport += `Combinação [${attempt.originalNumbers.join(', ')}]: ${attempt.vibrations.join(' + ')} = ${
        attempt.sum
      } ${status} ${statusText}<br>`;
    });

    // Exibe o relatório detalhado
    calculationDiv.innerHTML = detailedReport;

    // Exibe o resultado final
    if (portalResult.success) {
      const successfulAttempt = portalResult.allAttempts.find(attempt => attempt.success);
      resultDiv.innerHTML =
        `<span style="color: #48ff00">PORTAL ATIVADO! 🎉</span><br>` +
        `Combinação vencedora: [${successfulAttempt.originalNumbers.join(', ')}]<br>` +
        `Vibrações: [${successfulAttempt.vibrations.join(', ')}]<br>` +
        `Soma = ${successfulAttempt.sum}`;
    } else {
      resultDiv.innerHTML =
        `<span style="color: #ff0000">FALHA NO PORTAL! 😞</span><br>` +
        `Nenhuma combinação atingiu exatamente 42.<br>` +
        `Total de combinações testadas: ${portalResult.allAttempts.length}`;
    }
  } catch (error) {
    resultDiv.textContent = `Erro: ${error.message}`;
    resultDiv.style.color = '#ff0000';
  }
}

// Função para limpar os campos
function resetFields() {
  document.getElementById('numbers').value = '';
  document.getElementById('result').textContent = '';
  document.getElementById('calculation').textContent = '';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('select-btn').addEventListener('click', processInput);
  document.getElementById('return-btn').addEventListener('click', resetFields);

  // Permite pressionar Enter no input
  document.getElementById('numbers').addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      processInput();
    }
  });
});
