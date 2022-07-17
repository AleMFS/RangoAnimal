const body = document.body
const root = document.querySelector(':root')
const newnumero = getComputedStyle(root).getPropertyValue('--numero-por-slide')
const divSlider = document.querySelector('.racao-gato')
const divSlider2 = document.querySelector('.racao-cao')
let largura = window.screen.width

const dog = document.querySelector('.cao')
const cat = document.querySelector('.gato')
document.querySelector('.gato').classList.add('inicial')


cat.addEventListener('click', () => {
  if (!cat.classList.contains('selected')) {
    document.querySelector('.bola').src = 'Imagens/Layout/meia_bolaGato.png'
    document.querySelector('.logo').src = 'Imagens/Layout/Logo_gato.png'
    document.documentElement.style.setProperty('--Color-principal', '#0A9396');
    document.querySelector('.pet').style.transform = 'translateX(400px)  '
    document.querySelector('.gato').classList.add('inicial')
    document.querySelector('.cachorro').classList.remove('inicial')





    setTimeout(() => {

      // rações //
      document.querySelector('.racao-gato').classList.add('slides')
      document.querySelector('.racao-gato').classList.remove('slides2')
      document.querySelector('.racao-cao').classList.add('slides2')
      document.querySelector('.racao-cao').classList.remove('slides')

      // sachês //
      document.querySelector('.areaSache-cao').classList.remove('sache-container')
      document.querySelector('.areaSache-cao').classList.add('sache-container-escondido')
      document.querySelector('.areaSache-gato').classList.remove('sache-container-escondido')
      document.querySelector('.areaSache-gato').classList.add('sache-container')

      document.querySelector('.pet').src = 'Imagens/Layout/GatoCuriosooo.png'
      document.querySelector('.pet').style.transform = 'translateX(0) '
    }, 1000);

  }
})

dog.addEventListener('click', () => {


  if (!dog.classList.contains('selected')) {
    document.querySelector('.bola').src = 'Imagens/Layout/meiabola.png'
    document.querySelector('.logo').src = 'Imagens/Layout/Logo.png'
    document.documentElement.style.setProperty('--Color-principal', '#9c3030');
    document.querySelector('.pet').style.transform = 'translateX(400px)  '
    document.querySelector('.inicial').classList.remove('inicial')
    document.querySelector('.cachorro').classList.add('inicial')


    setTimeout(() => {

      // rações //
      document.querySelector('.racao-cao').classList.add('slides')
      document.querySelector('.racao-cao').classList.remove('slides2')
      document.querySelector('.racao-gato').classList.add('slides2')
      document.querySelector('.racao-gato').classList.remove('slides')

      // sachês //
      document.querySelector('.areaSache-gato').classList.remove('sache-container')
      document.querySelector('.areaSache-gato').classList.add('sache-container-escondido')
      document.querySelector('.areaSache-cao').classList.remove('sache-container-escondido')
      document.querySelector('.areaSache-cao').classList.add('sache-container')




      document.querySelector('.pet').src = 'Imagens/Layout/Cachorro1.png'
      document.querySelector('.pet').style.transform = 'translateX(0)  '
    }, 1000);

  }
});



racoesCat.forEach((item, index) => {

  let divRacoes = document.createElement('div');
  let imgRacao = document.createElement('img');
  let descRacao = document.createElement('p');
  let racaoValor = document.createElement('h4');

  divRacoes.setAttribute('class', `racao `)
  divRacoes.setAttribute('data-key', index)
  descRacao.setAttribute('class', 'descricao')

  divSlider.appendChild(divRacoes);

  divRacoes.appendChild(imgRacao);
  divRacoes.appendChild(descRacao);
  divRacoes.appendChild(racaoValor);

  imgRacao.src = item.img
  descRacao.innerText = item.descricao
  racaoValor.innerHTML = `<span> Valor: </span> R$${item.precoKG.toFixed(2).toString().replace(".", ",")} Kg`

  //  // // Modal  // // //

  divRacoes.querySelector('img').addEventListener('click', (element) => {

    let key = element.target.closest('.racao').getAttribute('data-key')


    document.querySelector('.img-racaoBIG img').src = racoesCat[key].img
    document.querySelector('.racaologo').src = racoesCat[key].logo
    document.querySelector('.racao-desc').innerHTML = racoesCat[key].descricao
    document.querySelector('.racaoprice').innerHTML = `${racoesCat[key].precoKG},00`

    document.querySelector('.racaoWindowArea').style.opacity = '0'
    document.querySelector('.racaoWindowArea').style.display = 'flex'

    setTimeout(() => {
      document.querySelector('.racaoWindowArea').style.opacity = '1'
    }, 300);

  })

})

racoesDog.forEach((item, index) => {

  let divRacoes = document.createElement('div');
  let imgRacao = document.createElement('img');
  let descRacao = document.createElement('p');
  let racaoValor = document.createElement('h4');

  divRacoes.setAttribute('class', `racao `)
  divRacoes.setAttribute('data-key', index)
  descRacao.setAttribute('class', 'descricao')

  divSlider2.appendChild(divRacoes);

  divRacoes.appendChild(imgRacao);
  divRacoes.appendChild(descRacao);
  divRacoes.appendChild(racaoValor);

  imgRacao.src = item.img
  descRacao.innerText = item.descricao
  racaoValor.innerHTML = `<span> Valor: </span> R$${item.precoKG.toFixed(2).toString().replace(".", ",")} Kg`

  //  // // Modal  // // //

  divRacoes.querySelector('img').addEventListener('click', (element) => {

    let key = element.target.closest('.racao').getAttribute('data-key')


    document.querySelector('.img-racaoBIG img').src = racoesDog[key].img
    document.querySelector('.racaologo').src = racoesDog[key].logo
    document.querySelector('.racao-desc').innerHTML = racoesDog[key].descricao
    document.querySelector('.racaoprice').innerHTML = `${racoesDog[key].precoKG},00 `

    document.querySelector('.racaoWindowArea').style.opacity = '0'
    document.querySelector('.racaoWindowArea').style.display = 'flex'

    setTimeout(() => {
      document.querySelector('.racaoWindowArea').style.opacity = '1'
    }, 300);

  })

})



///// SACHÊS /////


const sachesGato = document.querySelector('.sache-container')

sacheCat.forEach((item) => {

  let divSaches = document.createElement('div')
  let imgSache = document.createElement('img')
  let pSache = document.createElement('p')
  let h5Sache = document.createElement('h5')

  divSaches.setAttribute('class', 'saches')
  pSache.setAttribute('class', 'sache-desc')

  sachesGato.appendChild(divSaches)
  divSaches.appendChild(imgSache)
  divSaches.appendChild(pSache)
  divSaches.appendChild(h5Sache)

  imgSache.src = item.img
  pSache.innerHTML = item.descricao
  h5Sache.innerHTML = `<span> Valor </span> R$${item.preco.toFixed(2).toString().replace(".", ",")}`

})

const sachesDog = document.querySelector('.sache-container-escondido')

sacheDog.forEach((item) => {

  let divSaches = document.createElement('div')
  let imgSache = document.createElement('img')
  let pSache = document.createElement('p')
  let h5Sache = document.createElement('h5')

  divSaches.setAttribute('class', 'saches')
  pSache.setAttribute('class', 'sache-desc')

  sachesDog.appendChild(divSaches)
  divSaches.appendChild(imgSache)
  divSaches.appendChild(pSache)
  divSaches.appendChild(h5Sache)

  imgSache.src = item.img
  pSache.innerHTML = item.descricao
  h5Sache.innerHTML = `<span> Valor </span> R$${item.preco.toFixed(2).toString().replace(".", ",")}`

});
















document.querySelector('.racaoInfo-btnVoltar').addEventListener('click', () => {
  document.querySelector('.racaoWindowArea').style.opacity = 0;
  setTimeout(() => {
    document.querySelector('.racaoWindowArea').style.display = 'none';
  }, 300);

});


let itemTela = ''
let porcentagem = ''
let index = ''
let total = racoesDog.length



/* //////Carrosel ///////   */

document.querySelector('.fa-angle-right').addEventListener('click', next)
document.querySelector('.fa-angle-left').addEventListener('click', prev)

let divisor = ''
if (largura <= 800) {
  divisor = 1

} else {
  divisor = 2

}


function next() {

  if (index >= total - divisor) {
    document.querySelector('.slides').style.transform = `translateX(${0}%)`
    index = 0

  } else {
    document.querySelector('.slides').style.transform = `translateX(-${porcentagem * (index + divisor)}%)`
    index += divisor
  }
}

function prev() {

  if (index >= divisor) {

    document.querySelector('.slides ').style.transform = `translateX(-${porcentagem * (index - divisor)}%)`
    index -= divisor
  } else {
    document.querySelector('.slides ').style.transform = `translateX(-${porcentagem * (total - divisor)}%)`
    index = total
  }
}

const observer = new ResizeObserver(size => {


  if (size[0].contentRect.width < 900) {

    document.documentElement.style.setProperty('--numero-por-slide', '2');
    document.querySelector('.slides').style.transform = `translateX(${0}%)`
    itemTela = 2
    porcentagem = 100 / itemTela
    index = 0
  } else if (size[0].contentRect.width < 1500) {

    document.documentElement.style.setProperty('--numero-por-slide', '3');
    document.querySelector('.slides').style.transform = `translateX(${0}%)`
    itemTela = 3
    porcentagem = 100 / itemTela
    index = 0

  } else if ((size[0].contentRect.width >= 1500)) {

    document.documentElement.style.setProperty('--numero-por-slide', '4');
    document.querySelector('.slides').style.transform = `translateX(${0}%)`
    itemTela = 4
    porcentagem = 100 / itemTela
    index = 0
  }
})
observer.observe(body)


const mobile = new ResizeObserver(mobile => {

  if (mobile[0].contentRect.width < 800) {


    document.documentElement.style.setProperty('--numero-por-slide', '1');
    document.querySelector('.slides').style.transform = `translateX(${0}%)`
    itemTela = 1
    porcentagem = 100 / itemTela
    index = 0

  }
})
mobile.observe(body)
// // // // // // // // //




// Mobile // 


// abrir Hamburguer
document.querySelector('.hamb-icone').addEventListener('click', (() => {

  document.querySelector('.hamburguer').style.opacity = 0;
  document.querySelector('.hamburguer').style.display = 'flex';
  setTimeout(() => {
    document.querySelector('.hamburguer').style.opacity = 1;
  }, 200);
}));

// Fechar Hamburguer //

document.querySelector('.fa-xmark').addEventListener('click', (() => {

  document.querySelector('.hamburguer').style.opacity = 0;

  setTimeout(() => {
    document.querySelector('.hamburguer').style.display = 'none';
  }, 400);
}));




document.querySelector('.icone').addEventListener('click', () => {
  document.querySelector('.pet').style.transform = 'translateX(400px)  '
})











