function toggleMode () {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if(html.classList.contains('light')) {
  // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/eu.wendel.light.png')
  } else {
   // se tiver sem light mode, manter a imagem normal
   img.setAttribute('src', './assets/eu.wendel.png')  
  }
  
  const textAlt = document.querySelector("#profile")

  if(html.classList.contains('light')) {
    // Se tiver light mode, trocar de texto
    textAlt.setAttribute('alt', 'Wendel no shopping sentado em cima de uma pia, com camisa branca')
  } else {
    // Se tiver sem light mode, manter a mesmo texto
    textAlt.setAttribute("alt", "Wendel com camisa preta, na frente de um monte, apreciando a vista.")
  }
}