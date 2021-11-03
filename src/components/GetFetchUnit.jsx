
const listDetail =[

    {id:1 ,
    title: "Agenda Liberty ", 
    description: "lorem ipsum",
    price: 1050,
    img:'../pictures/imagenes/agenda1.JPG' },

    {id:2 ,
    title:"Agenda Freedom",
    description: "lorem ipsum",
    price: 1250,
    img: '../pictures/imagenes/agenda2.JPG'},

    {id:3 ,title: "Agenda School" ,
    description:  "lorem ipsum",
    price: 1000,
    img: '../pictures/imagenes/agenda3.JPG' },

    {id:4 ,
    title:  "Anotador Peace" ,
    description: "lorem ipsum",
    price: 970,
    img: '../pictures/imagenes/agenda4.JPG ' },


    {id:5 ,
    title:  "Anotador Peace" ,
    description: "lorem ipsum",
    price: 310,
    img: '../pictures/imagenes/agenda4.JPG ' },


    {id:6 ,
    title:  "Adhesivo" ,
    description: "lorem ipsum" ,
    price: 970,
    img: '../pictures/imagenes/agenda4.JPG ' },


    {id:7 ,
    title:  "Adhesivo",
    description: "lorem ipsum" ,
    price: 970,
    img: '../pictures/imagenes/agenda4.JPG '},


    {id:8 ,
    title:  "Adhesivo",
    description: "lorem ipsum" ,
    price: 970,
    img: '../pictures/imagenes/agenda4.JPG '   },


    {id:9 ,
    title:  "Adhesivo" ,
    description: "lorem ipsum" ,
    price: 970,
    img: '../pictures/imagenes/agenda4.JPG '   },];

    const GetFetchUnit= new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(listDetail)
        }, 2000)
    })
    
    export default GetFetchUnit
