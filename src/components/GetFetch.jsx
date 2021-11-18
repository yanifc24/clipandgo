

  const productos= [

    {id:1 ,
    title: "Agenda cherry " ,
    category: 'agendas',
    price: 1050,
    stock:10,
    img:'../pictures/imagenes/agendacherry.JPG' },


    {id:2 ,
    title:"Agenda desk",
    category: 'agendas',
     price: 1250,
     stock:11,
     img: '../pictures/imagenes/agendadesk.JPG'  },


    {id:3 ,
    title: "Agenda cactus",
    category: 'agendas', 
    price: 1000,
    stock:21,
    img: '../pictures/imagenes/agendacactus.JPG' },


    {id:4 ,
    title: "Agenda flores" ,
    category: 'agendas', 
    price: 1000,
    stock:9,
    img: '../pictures/imagenes/agendaflores.JPG' },

    {id:5 ,
    title: "Agenda School",
    category: 'agendas',
     price: 1000,
     stock:20,
     img: '../pictures/imagenes/agenda7.JPG' },

    {id:6 ,
     title: "Agenda Paris",
     category: 'agendas',
     price: 1000,
     stock:10,
     img: '../pictures/imagenes/agendaparis.JPG' },


    {id:7 ,
     title: "Agenda mapa" ,
     category: 'agendas',
     price: 1000,
     stock:6,
     img: '../pictures/imagenes/agendamapa.JPG' },

    {id:8,
     title:  "Anotador rojo",
     category: 'agendas',
     price: 970,
     stock:10,
     img: '../pictures/imagenes/agendaroja.JPG '   },

    {id:9 ,
    title:  "Anotador freedom" ,
    category: 'agendas',
    price: 910,
    stock:15,
    img: '../pictures/imagenes/agenda5.JPG '   },

    {id:10 ,
    title:  "Adhesivo en barra Uhu" ,
    category: 'adhesivos',
     price: 50,
     stock:16,
     img: '../pictures/imagenes/uhu.JPG '   },

    {id:11,
    title:  "Adhesivo vinílico x 40ml",
    category: 'adhesivos', 
    price: 70,
    stock:7,
    img: '../pictures/imagenes/plasticola.JPG '   },

    {id:12,
     title:  "Banderitas adhesivas",
     category: 'adhesivos',
     price: 80,
     stock:10,
     img: '../pictures/imagenes/banderita.JPG '   },

    {id:13,
     title:  "Adhesivo voligoma x 50ml",
     category: 'adhesivos',
     price: 970,
     stock:19,
     img: '../pictures/imagenes/voligoma.JPG '   },

     {id:14,
      title:  "HP Pendrive V150W USB 2.0 64GB",
      category: 'tecnología',
      price: 450,
      stock:13,
      img: '../pictures/imagenes/pendrive.JPG '   },
 
      {id:15,
      title:  "MOUSEPAD PRECISE 3M MP200",
      category: 'tecnología',
      price: 820,
      stock:13,
      img: '../pictures/imagenes/mousepad.JPG '   },

      {id:16,
      title:  "Base para notebook",
      category: 'tecnología',
      price: 1870,
      stock:3,
      img: '../pictures/imagenes/basenotebook.JPG '   },

      {id:17,
        title:  "CARPETA ESCOLAR 3X40",
        category: 'útiles escolares',
        price: 570,
        stock:23,
        img: '../pictures/imagenes/carpetaazul.JPG '   },

        {id:18,
        title:  "Carpeta escolar con anillos Simones N°3",
        category: 'útiles escolares',
        price: 590,
        stock:15,
        img: '../pictures/imagenes/carpetasimones.JPG '   },

        {id:19,
        title:  "Cuaderno Escolar rayado",
        category: 'útiles escolares',
        price: 300,
        stock:10,
        img: '../pictures/imagenes/cuadernoverde.JPG '   },

        {id:20,
         title:  "Tijera escolar",
         category: 'útiles escolares',
         price: 120,
         stock:15,
         img: '../pictures/imagenes/tijera.JPG '   },

         {id:21,
          title:  "Lapicera azul",
          category: 'útiles escolares',
          price: 210,
          stock:21,
          img: '../pictures/imagenes/lapicera.JPG '   },

];  

  const GetFetch = new Promise((resolve)=>{
      setTimeout(()=>{ resolve(productos) }, 2000)

  
})
export default GetFetch