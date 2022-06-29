const products = [
  { id: '01', name: 'West IPA', precio: 400, img: './img/westIpa.webp' },
  { id: '02', name: 'Hazy IPA', precio: 450, img: './img/hazyIpa.webp'},
  { id: '03', name: 'Grape IPA', precio: 500, img: './img/grapeIpa.webp' },
  { id: '04', name: 'Hemp IPA', precio: 550, img: './img/hempIpa.webp' },

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