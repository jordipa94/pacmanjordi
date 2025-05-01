function startGame() {

    document.getElementById("sketch-pacman").style.display = "block";
    document.getElementById("intro").style.display = "none";
  
  }
  
  function mostrarDiv(id) {
      let divs = document.querySelectorAll(".w3-panel");
      divs.forEach(div => {
          if (div.id !== id) {
              div.classList.add("w3-hide");
          }
      });
      
      let div = document.getElementById(id);
      if (div) {
          div.classList.toggle("w3-hide");
      }
  }
  
  const user = localStorage.getItem("loggedUser");
  const cognoms = localStorage.getItem("cognoms");
  const mail = localStorage.getItem("mail");
  if (user) {
    document.getElementById("username").textContent = user;
    document.getElementById("cognoms").textContent = cognoms;
    document.getElementById("mail").textContent = mail;
  }
  
  function logout() {
    localStorage.setItem("loggedIn", "false");
    window.location.href = "login.html";
  }
  
  let navegador = window.navigator.userAgent;
  let versioNavegador = window.navigator.appVersion;
  let sistemaOperatiu = window.navigator.platform;
  let dataModificacio = document.lastModified;
  let idioma = window.navigator.language;
  let urlCompleta = window.location.href;
  
  document.getElementById("navegador").innerText = "Navegador utilitzat: " + navegador;
  document.getElementById("versioNavegador").innerText = "Versió del Navegador: " + versioNavegador;
  document.getElementById("sistemaOperatiu").innerText = "SO en què es va compilar el navegador: " + sistemaOperatiu;
  document.getElementById("dataModificacio").innerText = "Data darrera modificació: " + dataModificacio;
  document.getElementById("idioma").innerText = "Idioma del navegador: " + idioma;
  document.getElementById("urlCompleta").innerText = "URL completa: " + urlCompleta;
  
  let jugadors = [];
  for (let i = 1; i <= 30; i++) {
    jugadors.push({
      posicio: i,
      nom: "Jugador " + i,
      punts: Math.floor(Math.random() * 10000)
    });
  }
  
  function actualitzarTaula() {
    const quantitat = parseInt(document.getElementById("quantitat").value);
    const taula = document.getElementById("taulaJugadors");
    taula.innerHTML = "";
    let topJugadors = jugadors.slice(0, quantitat);
    topJugadors.forEach(jugador => {
      taula.innerHTML += `
        <tr>
          <td>${jugador.posicio}</td>
          <td>${jugador.nom}</td>
          <td>${jugador.punts}</td>
        </tr>
      `;
    });
  }
  
  function ordenar(clau) {
    jugadors.sort((a, b) => {
      if (a[clau] < b[clau]) return -1;
      if (a[clau] > b[clau]) return 1;
      return 0;
    });
    actualitzarTaula();
  }
  
  actualitzarTaula(); // Mostrar per defecte  