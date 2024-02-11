const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      repostas: [
        "var",
        "let",
        "const"
      ],
      correta: 2 // "const"
    },
    {
      pergunta: "Qual dos seguintes não é um tipo de dado em JavaScript?",
      repostas: [
        "String",
        "Number",
        "Float"
      ],
      correta: 2 // "Float"
    },
    {
      pergunta: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
      repostas: [
        "//",
        "/*",
        "#"
      ],
      correta: 0 // "//"
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      repostas: [
        "pop()",
        "shift()",
        "splice()"
      ],
      correta: 0 // "pop()"
    },
    {
      pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
      repostas: [
        "+",
        "-",
        "*"
      ],
      correta: 0 // "+"
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      repostas: [
        "console.log()",
        "print()",
        "display()"
      ],
      correta: 0 // "console.log()"
    },
    {
      pergunta: "Qual método é usado para adicionar um novo elemento ao final de um array em JavaScript?",
      repostas: [
        "push()",
        "append()",
        "concat()"
      ],
      correta: 0 // "push()"
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      repostas: [
        "==",
        "===",
        "!="
      ],
      correta: 1 // "==="
    },
    {
      pergunta: "Qual dos seguintes não é um loop em JavaScript?",
      repostas: [
        "for",
        "while",
        "repeat"
      ],
      correta: 2 // "repeat"
    },
    {
      pergunta: "Qual método é usado para retornar o tamanho de um array em JavaScript?",
      repostas: [
        "length()",
        "size()",
        "length"
      ],
      correta: 2 // "length"
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let reposta of item.repostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = reposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.repostas.indexOf(reposta)
      // função para verificar se a reposta selecionada é a correta
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
    }
    // remover o texto Resposta A
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }