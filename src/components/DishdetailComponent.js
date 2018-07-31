import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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
    if(props.dish) {
      console.log(props.dish.comments);
      return(
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
              <RenderComments comments={props.dish.comments} />
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  };

export default DishDetail;