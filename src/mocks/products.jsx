import Product1 from "../assets/images/Product_1.jpg";
import Product2 from "../assets/images/Product_2.jpg";
import Product3 from "../assets/images/Product_3.jpg";
//import Product4 from "../assets/images/Product_4.jpg";
import Product5 from "../assets/images/Product_5.jpg";
import Product6 from "../assets/images/Product_6.jpg";



export default [
    {
      id: 1,
      name: "Masala",
      description: "Té Negro",
      detalle: "Té negro tipo Assam en hebras enteras orgánico con canela, jengibre, cardamomo, pimienta negra, clavo y anís estrellado",
      Precio: "$1450",
      image: Product1,
      category:"blends",
      Stock: 20,
      
    },
    {
      id: 2,
      name: "Ayurveda",
      description: "Té Negro",
      detalle: "Té negro tipo Assam en hebras enteras orgánico con canela, jengibre, cardamomo, clavo y 3 variedades de Tulsi orgánico",
      Precio: "$1550",
      image: Product2,
      category:"blends",
      Stock: 20,
      
    },
    {
      id: 3,
      name: "Olivia",
      description: "Tisana",
      detalle: "Las tisanas son infusiones con propiedades medicinales que no contienen té y por lo tanto no tiene cafeína.  Es rica en antioxidantes, antibacteriana, disminuye el estrés, digestiva, analgésica, alivia el estreñimiento y refuerza el sistema inmunitario.",
      Precio: "$1250",
      image: Product3,
      category:"tisana",
      Stock: 10,
      
    },
    /*{
      id: 4,
      name: "Jazmin",
      description: "Té verde",
      Precio: "$1450",
      image: Product4,
      category:"blends",
      
    },*/
    
    {
      id: 5,
      name: "Tazones",
      description: "Tazones de ceramica",
      detalle: "Tazones de ceramica de 250ml... Reir, Vivir, Paz, Volar",
      Precio: "$1850",
      image: Product5,
      category:"tazones",
      Stock: 10,
      
    },
    {
        id: 6,
        name: "Difusores",
        description: "Difusores",
        detalle: "Difusores sustentables: Presentación frasco de vidrio ambar x 250ml con varilas rattan a elección en estuche ecokraft. Eucalipto & Menta/Naranja & Especias/Peonía & Oliva/Vainilla Bourbon.",
        Precio: "$2850",
        image: Product6,
        category:"difusor",
        Stock: 30,
        
      },
];