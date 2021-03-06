import React ,{Component} from 'react'; 
import {Media} from 'reactstrap';
 class Menu extends Component{
    constructor(props){
        super(props);
        this.state ={
            dishes:[
                {
                    id:0,
                    name:'Uthappizza',
                    image:'assets/images/uthappizza.png',
                    category:'mains',
                    label:'Hot',
                    price:'4.99',
                    description:'A unicque combination  of India'
                },
                {
                    id:1,
                    name:'Zucchipakoda',
                    image:'assets/images/zucchipakoda.png',
                    category:'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Deep fried zucchini  coated'
                }
             ]
        }
    }
    render (){
        const menu = this.state.dishes.map((dish)=>{
            return(
                <div key= {dish.id} className= "col-12 mt-5">
                    <Media tag= "li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name}></Media>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}
export default Menu;