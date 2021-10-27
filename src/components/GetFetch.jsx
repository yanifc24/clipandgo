

  const productos= [

    {id:1 ,title: "agenda Liberty"    ,description: ""      ,price: 1050,img:'../assets/imagenes/agenda1.jpg ' },
    {id:2 ,title:"agenda Freedom"      ,description:   ""    ,price: 1250,img : '../assets/imagenes/agenda2.jpg '  },
    {id:3 ,title: "agenda School"     ,description:  ""     ,price: 1000,img: '../assets/imagenes/agenda3.jpg '  },
    {id:4 ,title:  "anotador Peace"    ,description:   ""    ,price: 970,img: '../assets/imagenes/agenda4.jpg '   },

];  

  const GetFetch = new Promise((resolve)=>{
      setTimeout(()=>{ resolve(productos) }, 2000)

  
})
export default GetFetch