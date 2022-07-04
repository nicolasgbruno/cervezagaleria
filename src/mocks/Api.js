const products = [
  { id: '01', name: 'West IPA', precio: 400, detail: '¡Un nuevo batch del estilo que nos enamoró a primer sorbo!', amargor: '70%', alcohol: '6.5%', srm: '5.5', img: './img/westIpa.webp' },
  { id: '02', name: 'Hazy IPA', precio: 450, detail: 'En busca del coctel perfecto de lúpulos en donde predomine el perfil a frutas dulces, de carozo y tropicales, con un dejo floral que acompaña y balancea.', amargor: '70%', alcohol: '6.5%', srm: '5.5', img: './img/hazyIpa.webp' },
  { id: '03', name: 'Grape IPA', precio: 500, detail: 'El balance perfecto entre una West Coast IPA y la complejidad de uvas Malbec', amargor: '70%', alcohol: '6.5%', srm: '5.5', img: './img/grapeIpa.webp' },
  { id: '04', name: 'Hemp IPA', precio: 550, detail: 'Una cerveza que se distingue por el predominio, en aroma y en boca, de los perfiles kush, que se caracterizan por sus notas cítricas, resinosas, especiadas, herbales y terrosas.', amargor: '70%', alcohol: '6.5%', srm: '5.5', img: './img/hempIpa.webp' },

]

export const getData = new Promise((res, rej) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      res(products)
    } else {
      rej('Error')
    }
  }, 2000)
})

export const getProduct = new Promise((res, rej) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      res(products.find((item => item.id === "02")))
    } else {
      rej('Error')
    }
  }, 3000)
})