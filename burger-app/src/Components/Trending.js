import React from 'react';
import '../App.css';

class Trending extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [
                {
                    img:'https://cdn.sanity.io/images/czqk28jt/prod_bk/1e622ad6cbd63094e41d0ab54dc09a6ba360794f-600x400.jpg?w=750&fm=webp&q=40&fit=max',
                    heading:'Our Favourites',
                    text:'A selection of our favourite items just for you'
                },
                {
                    img:'https://cdn.sanity.io/images/czqk28jt/prod_bk/e7c19e1ba2c4eadab3bdebfa4fa9ce9419eb4747-920x920.png?w=750&fm=webp&q=40&fit=max',
                    heading:'Staying safe in Covid 19',
                    text:'Learn about the precautions and measures we are taking to keep our Guests and Team Members safe'
                },
                {
                    img:'https://cdn.sanity.io/images/czqk28jt/prod_bk/44c5f0ef92601058a33874f96d52bdd32bc33d07-600x400.jpg?w=750&fm=webp&q=40&fit=max',
                    heading:'STAY SAFE WITH CONTACTLESS FREE DELIVERY!',
                    text:'Free Delivery on orders $15 or more at part. U.S. Burger King restaurants. Prices may be higher than at... '
                },
                
            ]
        }
    }
    render(){
        return(

            this.state.data.map(card=>
                <div class="trending-container">
                    <img alt="pic" class="trending-img" src={card.img}/>
                    <div class="trending-heading">{card.heading}</div>
                    <div class="trending-text">{card.text}</div>
                </div>
            )
        );
    }
}
export default Trending;