

  const productos= [

    {id:1 ,title: "agenda Liberty"    ,description: ""      ,price: 1050,img:'../assets/imagenes/agenda1.JPG' },
    {id:2 ,title:"agenda Freedom"      ,description:   ""    ,price: 1250,img: '../assets/imagenes/agenda2.JPG'  },
    {id:3 ,title: "agenda School"     ,description:  ""     ,price: 1000,img: '../assets/imagenes/agenda3.JPG' },
    {id:4 ,title:  "anotador Peace"    ,description:   ""    ,price: 970,img: '../assets/imagenes/agenda4.JPG '   },

];  

  const GetFetch = new Promise((resolve)=>{
      setTimeout(()=>{ resolve(productos) }, 2000)

  
})
export default GetFetch