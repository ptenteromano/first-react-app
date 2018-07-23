import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

// functional component to Render Menu Items
// functions just become another way to create components
// only two functions here
function RenderMenuItem({ dish, onClick }) {
  return(
    <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay body className="ml-5">
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
  );
}

// arrow function syntax, same functionality as above function def
// creates a variable with all dish items
// calls that variable in return statement
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
    </div>
  );
};

// need to export so it can be used
export default Menu;
