const secaoImoveis = document.querySelector(".secao-imoveis");

const filtros = document.querySelector(".modal-filtros");
const btnFiltros = document.querySelector(".btn-filtros");

btnFiltros.addEventListener("click", mostrarFiltros);

filtros.addEventListener("click", esconderFiltros);

const modalFavoritos = document.querySelector(".modal-favoritos");
const btnFavoritos = document.querySelector(".btn-favoritos");

modalFavoritos.addEventListener("click", esconderFavoritos);

btnFavoritos.addEventListener("click", mostrarFavoritos);

const campoVagas = document.getElementById("vagas");
campoVagas.addEventListener("change", mostraRangeVagas);

const campoMetragem = document.getElementById("metragem");
campoMetragem.addEventListener("change", mostraRangeMetragem);

const campoDormitorio = document.getElementById("dormitorios");
campoDormitorio.addEventListener("change", mostraRangeDormitorios);

const campoAluguel = document.getElementById("aluguel");
campoAluguel.addEventListener("change", mostraRangeAluguel);

const campoTotal = document.getElementById("total");
campoTotal.addEventListener("change", mostraRangeTotal);

const btnAplicar = document.querySelector(".btn-aplicar");
btnAplicar.addEventListener("click", aplicarFiltros);

atualizaCampos();

preencherListaImoveis(50);

window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
});

function mostrarFiltros() {
  filtros.style.display = "flex";
}

function mostrarFavoritos() {
  modalFavoritos.style.display = "flex";
}

function esconderFiltros(e) {
  if (e.target == filtros) {
    filtros.style.display = "none";
  }
}

function esconderFavoritos(e) {
  if (e.target == modalFavoritos) {
    modalFavoritos.style.display = "none";
  }
}

function favoritar(e) {
  
  if (e.target.classList.contains("favoritado")) {
    e.target.src = "assets/icones/favorito.svg";
  } else {
    e.target.src = "assets/icones/favorito-solid.svg";
  }
  e.target.classList.toggle("favoritado");
}

function criarImovel() {
  let imagemAleatoria = sorteioImagem();
  let tipoAleatorio = sorteioTipo();
  let metragem = sorteioMetragem();
  let dormitorio = sorteioDormitorio();
  let vagas = sorteioVagas();
  let aluguel = sorteioAluguel();
  let total = (aluguel + 500).toFixed(2);
  const imovel = document.createElement("article");
  imovel.className = "imovel";
  imovel.innerHTML = `<img
  class="foto-imovel"
  src="${imagemAleatoria}"
  alt=""
/>
<div class="conteudo-imovel">
  <p class="tipo">${tipoAleatorio}</p>
  <div>
    <h3 class="endereco-imovel">
      <img
        class="icone-card"
        src="assets/icones/localizacao.svg"
        alt=""
      />
      Avenida lorem ipsum
    </h3>
    <p class="cidade-imovel">São Paulo, SP</p>
  </div>
  <div class="imovel-espec">
    <p class="metragem">
      <img
        class="icone-card"
        src="assets/icones/metragem.svg"
        alt=""
      /><span class="metragem-valor">${metragem} m²</span>
    </p>
    <p class="dormitorios">
      <img
        class="icone-card"
        src="assets/icones/dormitorio.svg"
        alt=""
      /> <span class = "dormitorios-valor">${dormitorio} dorm.<span></p>
    <p class="vagas">
      <img
        class="icone-card"
        src="assets/icones/garagem.svg"
        alt=""
      />${vagas} vagas
    </p>
  </div>
  <div class="descricao-aluguel">
    <div>
      <p class="aluguel">
        Aluguel <span class="aluguel-valor">R$${aluguel}</span>
      </p>
      <p class="total">
        Total <span class="total-valor">R$${total}</span>
      </p>
    </div>
    <img class="icone-fav" src="assets/icones/favorito.svg" alt="" />
  </div>
</div>`;
  secaoImoveis.appendChild(imovel);

  eventoFavoritar();
}

function sorteioImagem() {
  let numero = Math.floor(Math.random() * 19 + 1);
  let url = `assets/imagens/imovel${numero}.jpg`;

  return url;
}

function sorteioTipo() {
  const tipos = ["Casa", "Kitnet", "Apartamento"];
  let numero = Math.floor(Math.random() * 3);
  let tipo = tipos[numero];

  return tipo;
}

function sorteioMetragem() {
  let metragem = Math.floor(Math.random() * 100 + 5);

  return metragem;
}

function sorteioDormitorio() {
  let dormitorio = Math.floor(Math.random() * 5 + 1);

  return dormitorio;
}

function sorteioVagas() {
  let vagas = Math.floor(Math.random() * 4);

  return vagas;
}

function sorteioAluguel() {
  let aluguel = Math.random() * 5000 + 700;

  return Number(aluguel.toFixed(2));
}

function eventoFavoritar() {
  const btnsFav = document.querySelectorAll(".icone-fav");
  for (let i = 0; i < btnsFav.length; i++) {
    btnsFav[i].addEventListener("click", favoritar);
  }
}

function mostraRangeVagas() {
  const numVagas = document.getElementById("vagas").value;
  document.getElementById("numVagas").textContent = numVagas;
}

function mostraRangeMetragem() {
  const numMetragem = document.getElementById("metragem").value;
  document.getElementById("numMetragem").textContent = numMetragem + " m²";
}

function mostraRangeDormitorios() {
  const numDormitorios = document.getElementById("dormitorios").value;
  document.getElementById("numDormitorios").textContent = numDormitorios;
}

function mostraRangeAluguel() {
  const valorAluguel = document.getElementById("aluguel").value;
  document.getElementById("valorAluguel").textContent = "R$ " + valorAluguel;
}

function mostraRangeTotal() {
  const valorTotal = document.getElementById("total").value;
  document.getElementById("valorTotal").textContent = "R$ " + valorTotal;
}

function atualizaCampos() {
  mostraRangeAluguel();
  mostraRangeDormitorios();
  mostraRangeMetragem();
  mostraRangeTotal();
  mostraRangeVagas();
}

function aplicarFiltros() {
  filtros.style.display = "none";
}

function preencherListaImoveis(numero) {
  for (let i = 0; i < numero; i++) {
    criarImovel();
  }
}
