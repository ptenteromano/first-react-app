import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  properDate(dateStr) {
    var date = new Date(dateStr);
    return ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear());
  }

  renderDish(dish) {
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

  renderComments(comments) {
    if (comments != null) {
      return (
          <div className="mt-1">
            <h3>Comments</h3>
            <ul className="list-unstyled">
              {comments.map((comment) => (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>-- {comment.author}, {this.properDate(comment.date)}</p>
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

  render() {
    if(this.props.dish) {
      console.log(this.props.dish.comments);
      return(
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(this.props.dish.comments)}
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
  }

}
export default DishDetail;
