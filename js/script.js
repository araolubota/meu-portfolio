function atualizarMetadados() {
  const elementoTempo = document.getElementById("footer-time");
  const elementoData = document.getElementById("footer-date");

  const agora = new Date();

  // Formata o tempo (HH:MM:SS)
  const tempoStr = agora.toTimeString().split(" ")[0];

  // Formata a data (DD/MM/AAAA)
  const dia = String(agora.getDate()).padStart(2, "0");
  const mes = String(agora.getMonth() + 1).padStart(2, "0");
  const ano = agora.getFullYear();
  const dataStr = `${dia}/${mes}/${ano}`;

  // Altera apenas se os elementos existirem na página atual
  if (elementoTempo) elementoTempo.textContent = tempoStr;
  if (elementoData) elementoData.textContent = dataStr;
}

// Executa a função a cada segundo
setInterval(atualizarMetadados, 1000);
// Executa imediatamente ao carregar
document.addEventListener("DOMContentLoaded", atualizarMetadados);
