document.addEventListener('DOMContentLoaded', function() {

  // HISTÓRIA
  var secaoContagem = document.querySelector('.contagem');
  secaoContagem.innerHTML = '<h2>História de Contagem</h2>' +
    '<div id="historia-texto" style="display:none">' +
    '<p>Contagem é um município brasileiro do estado de Minas Gerais, Região Sudeste do país. Pertence à Região Metropolitana de Belo Horizonte e é o terceiro município mais populoso do estado.</p>' +
    '<p>A cidade surgiu no século XVIII (por volta de 1716) como um posto fiscal da Coroa Portuguesa. O nome deriva da contagem de gado, mercadorias e escravos que passavam pela região, essencial para a taxação de impostos destinados a Ouro Preto.</p>' +
    '<p>Em torno do posto fiscal, surgiu um pequeno povoado. A população ergueu uma capela para abrigar São Gonçalo do Amarante, santo protetor dos viajantes, e logo surgia o arraial de São Gonçalo de Contagem.</p>' +
    '<h3>Emancipação Política</h3>' +
    '<p>Em 1854, o arraial foi elevado à categoria de paróquia. Em 30 de agosto de 1911, foi elevado à condição de município com o nome de Contagem.</p>' +
    '<h3>Industrialização</h3>' +
    '<p>Em 1941, o governador Benedito Valadares criou o Parque Industrial — mais tarde Cidade Industrial Juventino Dias. Ao final dos anos 1950 era o maior núcleo industrial de Minas Gerais.</p>' +
    '<p>Em 1970 foi implantado o Centro Industrial de Contagem (CINCO). Em 1974 surgiu o entreposto da CeasaMinas — o mais diversificado do Brasil e segundo em vendas de hortigranjeiros.</p>' +
    '</div>' +
    '<button id="btn-historia">Ler Mais</button>';

  var btnHistoria = document.getElementById('btn-historia');
  var historiaTexto = document.getElementById('historia-texto');

  btnHistoria.addEventListener('click', function() {
    var aberto = historiaTexto.style.display === 'block';
    historiaTexto.style.display = aberto ? 'none' : 'block';
    btnHistoria.textContent = aberto ? 'Ler Mais' : 'Recolher';
  });


  // CARROSSEL
  var pontos = [
    { src: 'img/offline.jpeg', label: 'Itaú Power Shopping' },
    { src: 'img/offline.jpeg', label: 'Igreja de São Gonçalo do Amarante' },
    { src: 'img/offline.jpeg', label: 'Lagoa do Dique (Vargem das Flores)' },
    { src: 'img/offline.jpeg', label: 'Parque Ecológico de Contagem' },
    { src: 'img/offline.jpeg', label: 'CeasaMinas — Entreposto de Contagem' },
    { src: 'img/offline.jpeg', label: 'Cidade Industrial Juventino Dias (CIMIG)' },
    { src: 'img/offline.jpeg', label: 'Centro Industrial de Contagem (CINCO)' },
    { src: 'img/offline.jpeg', label: 'Estação Eldorado — CBTU/Metrô BH' },
    { src: 'img/offline.jpeg', label: 'Shopping Contagem' },
    { src: 'img/offline.jpeg', label: 'Eldorado — Centro Comercial' },
  ];

  var indice = 0;

  var turismo = document.querySelector('.turismo');
  turismo.innerHTML =
    '<h2>Pontos Turísticos</h2>' +
    '<div class="carrossel-wrapper">' +
      '<button class="carrossel-btn" id="prev">&#8249;</button>' +
      '<div class="carrossel-slide">' +
        '<img id="carrossel-img" src="" alt="" />' +
        '<p id="carrossel-label"></p>' +
      '</div>' +
      '<button class="carrossel-btn" id="next">&#8250;</button>' +
    '</div>' +
    '<div class="carrossel-dots" id="dots"></div>';

  var imgEl = document.getElementById('carrossel-img');
  var labelEl = document.getElementById('carrossel-label');
  var dotsEl = document.getElementById('dots');

  pontos.forEach(function(_, i) {
    var dot = document.createElement('span');
    dot.className = 'dot';
    dot.addEventListener('click', function() { irPara(i); });
    dotsEl.appendChild(dot);
  });

  function irPara(i) {
    indice = (i + pontos.length) % pontos.length;
    imgEl.src = pontos[indice].src;
    imgEl.alt = pontos[indice].label;
    labelEl.textContent = pontos[indice].label;
    var dots = document.querySelectorAll('.dot');
    dots.forEach(function(d, idx) {
      d.className = idx === indice ? 'dot dot-ativo' : 'dot';
    });
  }

  document.getElementById('prev').addEventListener('click', function() { irPara(indice - 1); });
  document.getElementById('next').addEventListener('click', function() { irPara(indice + 1); });

  irPara(0);


  // NOTÍCIAS
  var noticias = [
    { titulo: 'Lauana Prado fará show no Shopping do Avião', fonte: 'SouBH', link: 'https://soubh.uai.com.br' },
    { titulo: 'Contagem ganha o Dia do Forró', fonte: 'BHAZ', link: 'https://bhaz.com.br' },
    { titulo: 'Expansão do Metrô BH', fonte: 'MetrôCPTM', link: 'https://metrocptm.com.br' },
    { titulo: 'Via Expressa ganha motofaixa', fonte: 'O Tempo', link: 'https://otempo.com.br' },
    { titulo: 'Contagem avança com plataforma para monitorar plano climático municipal', fonte: 'Prefeitura de Contagem', link: 'https://portal.contagem.mg.gov.br/portal/noticias/0/3/83651/contagem-avanca-com-plataforma-para-monitorar-plano-climatico-municipal/' },
    { titulo: 'Mobilidade Integrada em Contagem', fonte: 'Prefeitura de Contagem', link: 'https://portal.contagem.mg.gov.br' },
  ];

  var secaoNoticias = document.querySelector('.Notícias');
  secaoNoticias.innerHTML =
    '<h2>Notícias</h2>' +
    '<ul class="noticias-lista" id="lista-noticias"></ul>' +
    '<center><button id="btn-mais-noticias">Veja Mais</button></center>';

  var lista = document.getElementById('lista-noticias');
  noticias.forEach(function(n) {
    var li = document.createElement('li');
    li.className = 'noticia-item';
    li.innerHTML = '<a href="' + n.link + '" target="_blank">' + n.titulo + '</a> <span class="noticia-fonte">(' + n.fonte + ')</span>';
    lista.appendChild(li);
  });

  document.getElementById('btn-mais-noticias').addEventListener('click', function() {
    window.open('https://portal.contagem.mg.gov.br', '_blank');
  });


  // RECLAMAÇÕES
  var btnEnviar = document.getElementById('btn-enviar-reclamacao');
  var feedback = document.getElementById('feedback-reclamacao');
  var textarea = document.getElementById('reclameaq');

  btnEnviar.addEventListener('click', function() {
    if (!textarea.value.trim()) {
      feedback.style.color = '#dc3545';
      feedback.textContent = '⚠️ Por favor, descreva sua reclamação antes de enviar.';
      feedback.style.display = 'block';
      return;
    }
    btnEnviar.disabled = true;
    btnEnviar.textContent = 'Enviando...';
    feedback.style.display = 'none';
    setTimeout(function() {
      btnEnviar.disabled = false;
      btnEnviar.textContent = 'Enviar Reclamação';
      textarea.value = '';
      feedback.style.color = '#28a745';
      feedback.textContent = '✅ Reclamação enviada com sucesso! Agradecemos seu contato.';
      feedback.style.display = 'block';
      setTimeout(function() { feedback.style.display = 'none'; }, 5000);
    }, 1500);
  });

});