import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);
  }

  renderComments(review) {
    const listItems = review.map((comm) => {
      <ul>
        <li>{comm.comment}</li>
        <li>{comm.author}, {comm.date}</li>
      </ul>
    });

    return (
      <div key={this.props.dish.id} className="col-12 col-md-5 m-1">
        <Card>
          <CardBody>
            <CardTitle>Comments</CardTitle>
            {listItems}
          </CardBody>
        </Card>
      </div>
  )}

  render() {
    const dish = this.props.dish;

    if (dish != null) {
      return(
        <div className="row">
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      );
    }
    else {
      return(
        <div></div>
      );
    }
  }
}

export default DishDetail;
