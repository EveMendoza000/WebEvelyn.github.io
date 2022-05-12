async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }

  $( document ).ready(async function() {
    await typeSentence("Hola...", "#sentence");
    await waitForMs(2000);
    deleteSentence("#sentence");
    await waitForMs(2000);
    await carousel(carouselText,"#sentence");
  });

  const carouselText = [
    {text: "Bienvenidos a este sitio web...", color: "black"},
    {text: "Disfruten de su estadia...", color: "blue"},
    {text: "Presentado por Evelyn Mendoza......", color: "purple"}
  ]
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function updateFontColor(eleRef, color) {
    $(eleRef).css('color', color);
  }

  let fecha=new Date();

  function devolverDiaSemana(fecha){
      let dias=['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
      console.log(dias[fecha.getDay()]);
      return dias[fecha.getDay()];
  }

  window.onload = function() {
    document.getElementById("dia").innerHTML = "Disfruten de su " + devolverDiaSemana(fecha);
}

var path = window.location.pathname;
var page = path.split("/").pop();

if (page == "" || page =="index.html") {
  document.getElementById("a").style.color="white";
  document.getElementById("1").style.backgroundColor="black";
} else if (page == "qs.html"){
  document.getElementById("b").style.color="white";
  document.getElementById("2").style.backgroundColor="black";
}else if (page == "productos.html"){
  document.getElementById("c").style.color="white";
  document.getElementById("3").style.backgroundColor="black";
}else if (page == "contactame.html"){
  document.getElementById("d").style.color="white";
  document.getElementById("4").style.backgroundColor="black";
}

