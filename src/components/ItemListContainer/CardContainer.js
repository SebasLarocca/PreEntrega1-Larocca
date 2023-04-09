import React from 'react'
import { ItemListContainer } from './ItemListContainer'

export const CardContainer = ({sumaItemCarrito, restaItemCarrito, greeting}) => {
  return (
    <>
    <div className='d-flex flex-column m-4'>
    <h1 className='m-3 display-6 '>{greeting}</h1>
    <div className='d-flex flex-wrap product-cards-container'>
        <ItemListContainer sumaItemCarrito={sumaItemCarrito} restaItemCarrito={restaItemCarrito} titulo="Sillon individual" textoBotonSuma="+1" textoBotonResta="-1" descripcion="Cómodo, ergonómico y resistente. Su diseño moderno y elegante se adapta a cualquier espacio. ¡Disfruta de la comodidad que mereces!" url = 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1580746573-250L-C_~_(VO)_VOBLK_FZ.jpg?crop=1xw:1xh;center,top&resize=980:*'/>
        <ItemListContainer sumaItemCarrito={sumaItemCarrito} restaItemCarrito={restaItemCarrito} titulo="Sofa" textoBotonSuma="+1" textoBotonResta="-1" descripcion="Confortable, espacioso y con un diseño moderno y elegante que se adapta a cualquier espacio. Ideal para descansar, ver televisión o compartir con amigos y familiares. ¡transforma tu living o ambiente en un espacio de confort!" url = 'https://cdn.shopify.com/s/files/1/0548/7670/0860/products/product-image-1632338517.jpg?v=1617487700'/>
        <ItemListContainer sumaItemCarrito={sumaItemCarrito} restaItemCarrito={restaItemCarrito} titulo="Mesa" textoBotonSuma="+1" textoBotonResta="-1" descripcion="La mesa perfecta para tu hogar o lugar de trabajo. Hecha de madera resistente con una superficie plana y lisa, proporciona un amplio espacio para tus necesidades. Funcional, versátil y elegante. ¡Hazte con ella ahora!" url = 'https://foter.com/photos/424/industrial-farmhouse-dining-table.jpeg'/>
        <ItemListContainer sumaItemCarrito={sumaItemCarrito} restaItemCarrito={restaItemCarrito} titulo="Cofee table" textoBotonSuma="+1" textoBotonResta="-1" descripcion="Funcional y elegante, su diseño moderno se adapta a cualquier estilo decorativo. Perfecta para compartir en familia o con amigos, disfruta de un café o té en su superficie lisa y resistente." url = 'https://cdn.shopify.com/s/files/1/2001/3223/files/Mid-century_coffee_table_1024x1024.jpg?v=1643797505'/>
        <ItemListContainer sumaItemCarrito={sumaItemCarrito} restaItemCarrito={restaItemCarrito} titulo="Guardarropas a medida" textoBotonSuma="+1" textoBotonResta="-1" descripcion="Amplio, resistente y con un diseño moderno. Su interior te permite organizar tus prendas de manera cómoda y accesible." url = 'https://i.pinimg.com/originals/94/2d/33/942d33178218224933c7f91b007cd2ed.jpg'/>
        <ItemListContainer sumaItemCarrito={sumaItemCarrito} restaItemCarrito={restaItemCarrito} titulo="Estantería industrial" textoBotonSuma="+1" textoBotonResta="-1" descripcion="Su diseño moderno se adapta a cualquier estilo decorativo. Perfecta para organizar libros, objetos decorativos o herramientas" url = 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81OKuxNqcmL.jpg'/>
        <ItemListContainer sumaItemCarrito={sumaItemCarrito} restaItemCarrito={restaItemCarrito} titulo="Mesa circular" textoBotonSuma="+1" textoBotonResta="-1" descripcion="¿Cansado de cuadrados aburridos? ¡Prueba nuestra mesa redonda! Perfecta para compartir, sus bordes suaves evitan lesiones en discusiones acaloradas. Además, su diseño circular te permitirá dar vueltas sin perder de vista tu bebida." url = 'https://st.hzcdn.com/simgs/5e110115029433ba_4-5267/home-design.jpg'/>
        <ItemListContainer sumaItemCarrito={sumaItemCarrito} restaItemCarrito={restaItemCarrito} titulo="Mesa de luz" textoBotonSuma="+1" textoBotonResta="-1" descripcion="La mesa de luz más cool que encontrarás. Con diseño moderno y funcionalidad sin igual, te permitirá tener todo lo necesario al alcance de tu mano. Perfecta para tus noches de lectura o trabajo en la cama."  url = 'https://cdn.webshopapp.com/shops/192182/files/322571864/900x900x2/industrial-bedside-table-dudgeon-robust-hardwood-2.jpg'/>
        <ItemListContainer sumaItemCarrito={sumaItemCarrito} restaItemCarrito={restaItemCarrito} titulo="Pikachu" textoBotonSuma="+1" textoBotonResta="-1" descripcion="bla bla bla" url = 'https://yt3.googleusercontent.com/pK5_z_dptxyLuGllTGH4voHjz6WNTv0vgysrHQtmK6X45fl8g_h1ytu1H-ir1ExvY8uph0MbQA=s900-c-k-c0x00ffffff-no-rj'/>
    </div>
    </div>
    </>
  ) 
}
