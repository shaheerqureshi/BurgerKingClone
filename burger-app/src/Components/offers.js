import React from 'react';
import '../App.css';

class Offers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [
                {
                    img:'https://i.pinimg.com/originals/30/dc/20/30dc20978c49920cae498aadcc33415c.jpg',
                    heading:'Whopper Wednesday',
                    text:'Flamed grill whopper with 2 patties and a cheese slice of top'
                },
                {
                    img:'https://www.pngmart.com/files/5/Hamburger-Transparent-Background.png',
                    heading:'Whopper Wednesday',
                    text:'Flamed grill whopper with 2 patties and a cheese slice of top'
                },
                {
                    img:'https://cdn.miscellaneoushi.com/2560x1600/20121027/food%20hamburgers%20white%20background%202560x1600%20wallpaper_www.miscellaneoushi.com_87.jpg',
                    heading:'Whopper Wednesday',
                    text:'Flamed grill whopper with 2 patties and a cheese slice of top'
                },
                {
                    img:'https://www.pngmart.com/files/5/Hamburger-Transparent-Background.png',
                    heading:'Whopper Wednesday',
                    text:'Flamed grill whopper with 2 patties and a cheese slice of top'
                },
                {
                    img:'https://www.pngitem.com/pimgs/m/173-1738766_burger-king-menu-double-cheeseburger-png-download-food.png',
                    heading:'Whopper Wednesday',
                    text:'Flamed grill whopper with 2 patties and a cheese slice of top'
                },
                {
                    img:'https://thumbs.dreamstime.com/b/burger-king-menu-burger-king-menu-white-background-161056536.jpg',
                    heading:'Whopper Wednesday',
                    text:'Flamed grill whopper with 2 patties and a cheese slice of top'
                }
            ]
        }
    }
    render(){
        return(

            this.state.data.map(card=>
                <div class="offers-container">
                    <img alt="pic" class="offers-img" src={card.img}/>
                    <div class="offers-heading">{card.heading}</div>
                    <div class="offers-text">{card.text}</div>
                </div>
            )
        );
    }
}
export default Offers;