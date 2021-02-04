import React from 'react'
import produit from '../image/p1.png'
const produits = [
  {
    name: "TOCHIBA",
    prix: 1250,
    desc: "Ecran 15.6 HD LED Systéme d'exploitation: FreeDos - Mémoire RAM: 8 Go - Disque Dur: 1 To"
  }
 
]
const Produits = () => {


  return (

    <div>
      {/* users part */}
      <h1 className="titre">Liste Produit</h1>
      <img  className="p2" src={produit} alt="users"  />
      <div className="list-users">
        {produits.map((poo, i) => (
          <div className="user-card" key={i}>
            <h3 className="name">{poo.name}</h3>
            <h3 className="pi">{poo.prix}</h3>
            <p className="po">{poo.desc}</p>
          </div>
        ))}
      </div>


      
      
      </div>

     
  )
}

export default Produits


