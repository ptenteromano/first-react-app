import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// functional component - if a component is rendered purely based
// on props passed to it without changing state
// can be turned into functional
// ex: useless constructor

// lower case - not a render component
function properDate(dateStr) {
  var date = new Date(dateStr);
  return ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear());
}

// uppercase - render'd component
function RenderDish({dish}) {
  if (dish != null) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name}/>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
  else {
    return (
      <div></div>
    );
  }
}

function RenderComments({comments}) {
  if (comments != null) {
    return (
        <div className="mt-1">
          <h3>Comments</h3>
          <ul className="list-unstyled">
            {comments.map((comment) => (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {properDate(comment.date)}</p>
              </li>
            ))}
          </ul>
        </div>
    );
  }
  else {
    return (
      <div></div>
    );
  }
}

// arrow syntax, seems like eslint wants semi at end of arrow's
// calls the other functions bove inside
const DishDetail = (props) => {
  console.log(props.comments);
  console.log("------");
  console.log(props);
  return(
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/home'>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to='/menu'>Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
