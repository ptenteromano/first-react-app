import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// functional component to Render Menu Items
// functions just become another way to create components
// only two functions here
function RenderMenuItem({ dish }) {
  return(
    <Card>
      {/* using backquotes here for string interpolation */}
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay body className="ml-5">
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
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
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/home'>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr/>
        </div>
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  );
};

// need to export so it can be used
export default Menu;
