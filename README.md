# 🌌 Enigma do Portal Espacial

[![Status](https://img.shields.io/badge/status-ativo-success.svg)]()
[![Licença](https://img.shields.io/badge/licença-MIT-blue.svg)]()

> *"A resposta para o universo é 42. Agora, encontre a combinação certa!"* 🌠

Um desafio interativo de lógica com tema espacial onde você deve encontrar combinações numéricas que ativam um portal dimensional!

![Demo](https://via.placeholder.com/800x400/0a0e27/00ff41?text=Portal+Espacial+Demo)

---

## 📖 Sobre o Projeto

Você é um viajante espacial preso em um portal misterioso. Para escapar, deve inserir sequências numéricas que, quando transformadas pelas regras quânticas do portal, somem exatamente **42** - a resposta para a vida, o universo e tudo mais.

### 🧮 Regras do Portal

O portal transforma cada número em uma "vibração" seguindo estas regras:

- **Números pares**: `vibração = 2 × número`
- **Números ímpares**: `vibração = 3 × número + 1`

O algoritmo verifica automaticamente **todas as combinações possíveis** de subconjuntos para encontrar aqueles cuja soma das vibrações seja igual a 42.

---

## 🚀 Demo

[🔗 Clique aqui para experimentar](https://seu-usuario.github.io/portal-espacial)

---

## ✨ Funcionalidades

- ✅ Cálculo automático de vibrações quânticas
- ✅ Verificação inteligente de todas as combinações
- ✅ Validação de entrada em tempo real
- ✅ Interface responsiva e temática espacial
- ✅ Efeitos visuais com animações CSS
- ✅ Feedback detalhado dos cálculos

---

## 🎮 Como Usar

### 1️⃣ Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/portal-espacial.git
cd portal-espacial
```

### 2️⃣ Execução

Abra o arquivo `index.html` em qualquer navegador moderno. Não é necessário servidor local!

### 3️⃣ Jogando

1. **Digite os números**: Insira de 1 a 10 números inteiros (entre 1 e 100), separados por vírgula
   - Exemplo: `5,10,6,3`

2. **Clique em SELECIONAR**: O portal calculará as vibrações e verificará as combinações

3. **Veja o resultado**: 
   - ✅ Portal ativado: Sua sequência contém uma combinação vencedora!
   - ❌ Portal inativo: Tente outra sequência

4. **Clique em RETORNAR**: Limpa os campos para uma nova tentativa

---

## 💡 Exemplos

| Entrada | Sequência Vencedora | Cálculo | Soma |
|---------|---------------------|---------|------|
| `10, 7` | `[10, 7]` | `(2×10) + (3×7+1)` | 42 ✅ |
| `14, 3, 2` | `[14, 3, 2]` | `(2×14) + (3×3+1) + (2×2)` | 42 ✅ |
| `8, 5, 3` | `[8, 5, 3]` | `(2×8) + (3×5+1) + (3×3+1)` | 42 ✅ |
| `5, 10, 6, 3` | `[5, 10]` | `(3×5+1) + (2×10)` | 36 + 20 = 42 ✅ |

---

## 🎨 Design

- **Tema Espacial**: Fundo estrelado com nebulosas animadas
- **Efeitos Neon**: Botões com glow e gradientes coloridos
- **Animações Suaves**: Transições e keyframes personalizados
- **Totalmente Responsivo**: Adapta-se a smartphones, tablets e desktops

---

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Animações e design responsivo
- **JavaScript (ES6+)** - Lógica do jogo e algoritmos

---

## 📁 Estrutura de Arquivos

```
portal-espacial/
├── index.html          # Página principal
├── styles.css          # Estilos e animações
├── script.js           # Lógica do portal
├── space-bg.jpg        # Imagem de fundo (opcional)
└── README.md           # Este arquivo
```

---

## 📌 Regras e Restrições

- ✔️ Máximo de **10 números** por entrada
- ✔️ Apenas números inteiros entre **1 e 100**
- ✔️ Podem ser usados **subconjuntos** da sequência original
- ✔️ A ordem dos números não importa

---

## 🧪 Algoritmo

O projeto utiliza um algoritmo de **força bruta otimizado** que:

1. Calcula a vibração de cada número da entrada
2. Gera todos os subconjuntos possíveis (exceto o conjunto vazio)
3. Verifica quais subconjuntos têm soma igual a 42
4. Retorna a primeira combinação válida encontrada

**Complexidade**: O(2^n) onde n é a quantidade de números (limitado a 10)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido com 💜 por **[@luizfx.dev](https://github.com/luizfx)**

---

## 🎯 Roadmap

- [ ] Sistema de pontuação
- [ ] Níveis de dificuldade (diferentes somas-alvo)
- [ ] Modo multiplayer
- [ ] Histórico de tentativas
- [ ] Easter eggs espaciais

---

## 🌟 Agradecimentos

Inspirado em "O Guia do Mochileiro das Galáxias" de Douglas Adams.

---

**Pronto para decifrar o portal? Baixe o código e comece agora!** 🪐

