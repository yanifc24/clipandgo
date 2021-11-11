

  const productos= [

    {id:1 ,title: "Agenda Liberty " ,category: 'agendas',price: 1050,img:'../pictures/imagenes/agenda1.JPG' },
    {id:2 ,title:"Agenda Freedom"  ,category: 'agendas', price: 1250,img: '../pictures/imagenes/agenda2.JPG'  },
    {id:3 ,title: "Agenda School" ,category: 'agendas', price: 1000,img: '../pictures/imagenes/agenda3.JPG' },
    {id:4 ,title: "Agenda School" ,category: 'agendas', price: 1000,img: '../pictures/imagenes/agenda7.JPG' },
    {id:5 ,title: "Agenda School" ,category: 'agendas', price: 1000,img: '../pictures/imagenes/agenda7.JPG' },
    {id:6 ,title: "Agenda School" ,category: 'agendas', price: 1000,img: '../pictures/imagenes/agenda8.JPG' },
    {id:7 ,title: "Agenda School" ,category: 'agendas', price: 1000,img: '../pictures/imagenes/agenda9.JPG' },
    {id:8 ,title:  "Anotador Peace",category: 'agendas', price: 970,img: '../pictures/imagenes/agenda1.JPG '   },
    {id:9 ,title:  "Anotador Peace" ,category: 'agendas',price: 310,img: '../pictures/imagenes/agenda1.JPG '   },
    {id:10 ,title:  "Adhesivo uno" ,category: 'adhesivos', price: 970,img: '../pictures/imagenes/agenda4.JPG '   },
    {id:11,title:  "Adhesivo dos" ,category: 'adhesivos', price: 970,img: '../pictures/imagenes/agenda4.JPG '   },
    {id:12,title:  "Adhesivo tres" ,category: 'adhesivos', price: 970,img: '../pictures/imagenes/agenda4.JPG '   },
    {id:13,title:  "Adhesivo cuatro"  ,category: 'adhesivos', price: 970,img: '../pictures/imagenes/agenda4.JPG '   },


];  

  const GetFetch = new Promise((resolve)=>{
      setTimeout(()=>{ resolve(productos) }, 2000)

  
})
export default GetFetch