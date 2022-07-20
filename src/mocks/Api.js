import imagen1 from '../assets/images/westIpa.webp'
import imagen2 from '../assets/images/hazyIpa.webp'
import imagen3 from '../assets/images/grapeIpa.webp'
import imagen4 from '../assets/images/hempIpa.webp'



const products = [
  { id: "01", name: 'West IPA', price: 400, stock: 5, detail: '¡Un nuevo batch del estilo que nos enamoró a primer sorbo!', amargor: '70%', alcohol: '6.5%', srm: '5.5', category: 'ipa', img: imagen1 },
  { id: "02", name: 'Hazy IPA', price: 450, stock: 7, detail: 'En busca del coctel perfecto de lúpulos en donde predomine el perfil a frutas dulces, de carozo y tropicales, con un dejo floral que acompaña y balancea.', amargor: '70%', alcohol: '6.5%', srm: '5.5', category: 'ipa', img: imagen2 },
  { id: "03", name: 'Grape IPA', price: 500, stock: 10, detail: 'El balance perfecto entre una West Coast IPA y la complejidad de uvas Malbec', amargor: '70%', alcohol: '6.5%', srm: '5.5', category: 'apa', img: imagen3 },
  { id: "04", name: 'Hemp IPA', price: 550, stock: 3, detail: 'Una cerveza que se distingue por el predominio, en aroma y en boca, de los perfiles kush, que se caracterizan por sus notas cítricas, resinosas, especiadas, herbales y terrosas.', amargor: '70%', alcohol: '6.5%', srm: '5.5', category: 'neipa', img: imagen4 },

]

export const getData = (categoryId) => {
  return new Promise((res, rej) => {
    const productsFiltrados = products.filter(prod => prod.category === categoryId)
    setTimeout(() => {
      categoryId
        ? res(productsFiltrados)
        : res(products)
    }, 1000)
  });
}

 export const getProduct = (id) => {
   return new Promise((res, rej) => {
     const productDetail = products.find(prod => prod.id === id)
     setTimeout(() => {
       res(productDetail)
     }, 1000)
   })
 }