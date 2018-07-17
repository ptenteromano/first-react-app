import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

  constructor(props) {
    super(props); // required for any class defined component

    this.state = {
      selectedDish: null
    }
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      return(
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    else {
      return(
        <div></div>
      );
    }
  }

  // create the menu variable, rendering all items in the array
  // then return the container with the menu variable in the list
  render() {

    // maps every dish in the array to new 'const menu'
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={( ) => this.onDishSelect(dish) }>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay body className="ml-5">
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      )
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          { this.renderDish(this.state.selectedDish) }
        </div>
      </div>
    );
  }
}

// need to export so it can be used
export default Menu;
