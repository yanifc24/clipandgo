

  const productos= [

    {id:1 ,title: "Agenda Liberty "     ,price: 1050,img:'../pictures/imagenes/agenda1.JPG' },
    {id:2 ,title:"Agenda Freedom"      ,price: 1250,img: '../pictures/imagenes/agenda2.JPG'  },
    {id:3 ,title: "Agenda School"     ,price: 1000,img: '../pictures/imagenes/agenda3.JPG' },
    {id:4 ,title:  "Anotador Peace"    ,price: 970,img: '../pictures/imagenes/agenda4.JPG '   },
    {id:5 ,title:  "Anotador Peace"     ,price: 310,img: '../pictures/imagenes/agenda4.JPG '   },
    {id:6 ,title:  "Adhesivo"     ,price: 970,img: '../pictures/imagenes/agenda4.JPG '   },
    {id:7 ,title:  "Adhesivo"      ,price: 970,img: '../pictures/imagenes/agenda4.JPG '   },
    {id:8 ,title:  "Adhesivo"       ,price: 970,img: '../pictures/imagenes/agenda4.JPG '   },
    {id:9 ,title:  "Adhesivo"      ,price: 970,img: '../pictures/imagenes/agenda4.JPG '   },


];  

  const GetFetch = new Promise((resolve)=>{
      setTimeout(()=>{ resolve(productos) }, 2000)

  
})
export default GetFetch