

  const productos= [

    {id:1 ,title: "Agenda Liberty "    ,description: ""      ,price: 1050,img:'../pictures/imagenes/agenda1.JPG' },
    {id:2 ,title:"Agenda Freedom"      ,description:   ""    ,price: 1250,img: '../pictures/imagenes/agenda2.JPG'  },
    {id:3 ,title: "Agenda School"     ,description:  ""     ,price: 1000,img: '../pictures/imagenes/agenda3.JPG' },
    {id:4 ,title:  "Anotador Peace"    ,description:   ""    ,price: 970,img: '../pictures/imagenes/agenda4.JPG '   },

];  

  const GetFetch = new Promise((resolve)=>{
      setTimeout(()=>{ resolve(productos) }, 2000)

  
})
export default GetFetch