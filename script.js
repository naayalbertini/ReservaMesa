function sendWhatsApp() {
    event.preventDefault();
    const nomeCliente = document.getElementById("nome_cliente").value;
    const nomeAluno = document.getElementById("nome_aluno").value;
    const turmaAluno = document.getElementById("turma_aluno").value;
    const numMesas = document.getElementById("mesas").value;
    const numMesaAdicional = document.getElementById("mesaAdicional").value;
    const nomeCadeira = document.getElementById("cadeira").value;

    const mensagem = `Olá, meu nome é ${nomeCliente}.|| Gostaria de reservar as mesas de número: ${numMesas}...|| Adicionei outra mesa: ${numMesaAdicional}. || Essa(s) mesa(s) é em nome do aluno: ${nomeAluno}... || Turma/Ano: ${turmaAluno}... || Acionei uma cadeira: ${nomeCadeira}...|| Me informe o valor total e o PIX?`;
  
    const whatsappLink = `https://api.whatsapp.com/send?phone=SEUNUMERO&text=${encodeURIComponent(mensagem)}`;
  
    window.location.href = whatsappLink;
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    const nomeCliente = document.querySelector('#nome_cliente');
    const nomeAluno = document.querySelector('#nome_aluno');
    const turmaAluno = document.querySelector('#turma_aluno');
    const mesas = document.querySelector('#mesas');
    const nomeCadeira = document.querySelector('#cadeira');
    const numMesaAdcional = document.querySelector ('#mesaAdicional');
    
  
    if (!nomeCliente.value || !nomeAluno.value || !turmaAluno.value || !mesas.value) {
      event.preventDefault(); // cancela o envio do formulário
      alert('Por favor, preencha todos os campos obrigatórios.');
    } else {
      sendWhatsApp();
    }
  });

// Quando o usuário rolar 20 pixels a partir do topo da página, mostrar o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Quando o usuário clicar no botão, rolar até o topo da página
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  
