import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from "./DishdetailComponent";

class Menu extends Component {
    constructor(props) {
        super(props);
        //state declared within the constructor
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        // modify state by setState()
        this.setState({
            selectedDish: dish
        });
    }

    render() {
        const dishes = this.props.dishes
        const menu = dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                          // event onclick
                          onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
                /*media method to show menu
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Card>
                </div>*/
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div>
                        {/*{this.renderDish(this.state.selectedDish)}*/}
                        {/*dish is available as props within Dishdetail Component and can be accessed as this.props.dishes*/}
                        {/*<DishDetail dishes={this.state.dishes} comment={this.state.comments}/>*/}
                        <DishDetail selctedDish={this.state.selectedDish} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;