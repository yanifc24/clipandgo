
const listDetail =[

    {id:1 ,
    title: "Agenda cherry " ,
    description: "lorem ipsum",
    price: 1050,
    stock:10,
    img:'../pictures/imagenes/agendacherry.JPG' },


    {id:2 ,
    title:"Agenda desk",
    description: "lorem ipsum",
     price: 1250,
     stock:11,
     img: '../pictures/imagenes/agendadesk.JPG'  },


    {id:3 ,
    title: "Agenda cactus",
    description: "lorem ipsum",
    price: 1000,
    stock:21,
    img: '../pictures/imagenes/agendacactus.JPG' },


    {id:4 ,
    title: "Agenda flores" ,
    description: "lorem ipsum",
    price: 1000,
    stock:9,
    img: '../pictures/imagenes/agendaflores.JPG' },

    {id:5 ,
    title: "Agenda School",
    description: "lorem ipsum",
     price: 1000,
     stock:20,
     img: '../pictures/imagenes/agenda7.JPG' },

    {id:6 ,
     title: "Agenda Paris",
     description: "lorem ipsum",
     price: 1000,
     stock:10,
     img: '../pictures/imagenes/agendaparis.JPG' },


    {id:7 ,
     title: "Agenda mapa" ,
     description: "lorem ipsum",
     price: 1000,
     stock:6,
     img: '../pictures/imagenes/agendamapa.JPG' },

    {id:8,
     title:  "Anotador rojo",
     description: "lorem ipsum",
     price: 970,
     stock:10,
     img: '../pictures/imagenes/agendaroja.JPG '   },

    {id:9 ,
    title:  "Anotador freedom" ,
    description: "lorem ipsum",
    price: 910,
    stock:15,
    img: '../pictures/imagenes/agenda5.JPG '   },

    {id:10 ,
    title:  "Adhesivo en barra Uhu" ,
    description: "lorem ipsum",
     price: 50,
     stock:16,
     img: '../pictures/imagenes/uhu.JPG '   },

    {id:11,
    title:  "Adhesivo vinílico x 40ml",
    description: "lorem ipsum",
    price: 970,
    stock:7,
    img: '../pictures/imagenes/plasticola.JPG '   },

    {id:12,
     title:  "Banderitas adhesivas",
     description: "lorem ipsum",
     price: 970,
     stock:10,
     img: '../pictures/imagenes/banderita.JPG '   },

    {id:13,
     title:  "Adhesivo voligoma x 50ml",
     description: "lorem ipsum",
     price: 970,
     stock:19,
     img: '../pictures/imagenes/voligoma.JPG '   },

     {id:14,
      title:  "HP Pendrive V150W USB 2.0 64GB",
      description: "lorem ipsum",
      price: 970,
      stock:13,
      img: '../pictures/imagenes/pendrive.JPG '   },
 
      {id:15,
      title:  "MOUSEPAD PRECISE 3M MP200",
      description: "lorem ipsum",
      price: 820,
      stock:13,
      img: '../pictures/imagenes/mousepad.JPG '   },

      {id:16,
      title:  "Base para notebook",
      description: "lorem ipsum",
      price: 1870,
      stock:3,
      img: '../pictures/imagenes/basenotebook.JPG '   },

      {id:17,
        title:  "CARPETA ESCOLAR 3X40",
        description: "lorem ipsum",
        price: 570,
        stock:23,
        img: '../pictures/imagenes/carpetaazul.JPG '   },

        {id:18,
        title:  "Carpeta escolar con anillos Simones N°3",
        description: "lorem ipsum",
        price: 590,
        stock:15,
        img: '../pictures/imagenes/carpetasimones.JPG '   },

        {id:19,
        title:  "Cuaderno Escolar rayado",
        description: "lorem ipsum",
        price: 300,
        stock:10,
        img: '../pictures/imagenes/cuadernoverde.JPG '   },

        {id:20,
         title:  "Tijera escolar",
         description: "lorem ipsum",
         price: 120,
         stock:15,
         img: '../pictures/imagenes/tijera.JPG '   },

         {id:21,
          title:  "Tijera escolar",
          description: "lorem ipsum",
          price: 210,
          stock:21,
          img: '../pictures/imagenes/lapicera.JPG '   },
];

    const GetFetchUnit= new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(listDetail)
        }, 2000)
    })
    
    export default GetFetchUnit
