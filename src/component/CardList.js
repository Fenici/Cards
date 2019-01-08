import React from 'react';
// method 2 

class CardList extends React.Component{
  render(){
    const cards = this.props.cards.map((card) =>
      <div key={card.id}>
        <div className="card">
          <img src={card.url} alt="cat" />
          <div className="container">
            <h5><b>{card.title}</b></h5>
            <p>{card.subtitle}</p>
          </div>
        </div>
      </div>
    );


    return(
      <div>
        {cards}
      </div>
    )




  }




}

// Method 1 

// function CardList(props) {
//   const cards = props.cards.map((card)=>
//     <div key={card.id}>

//   <div className="card">
//   <img src={card.url} alt="cat"/>

//   <div className="container">
//         <h5><b>{card.title}</b></h5>
//   <p>{card.subtitle}</p>
//   </div>
//       </div>
//     </div>
  
//   );
//   return(
//     <div>
//       {cards}
//     </div>

//   )


// }  


export default CardList;