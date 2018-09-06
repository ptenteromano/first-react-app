import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
  Button, Modal, ModalBody, ModalHeader, ModalFooter, Label, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

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
          <CommentForm/>
        </div>
    );
  }
  else {
    return (
      <div></div>
    );
  }
}

const DishDetail = (props) => {

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

// assignment 3 start
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit(values) {
    alert("values" + JSON.stringify(values));
  }

  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-comments-o fa-lg"></span>{' '}
          Submit Comment
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
            <ModalHeader>Submit Comment</ModalHeader>
            <ModalBody>
              <Row className="form-group">
                <Label htmlFor="rating" md={2}>Rating</Label>
                <Col md={12}>
                  <Control.select model=".rating" name="rating"
                    className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              
              <Row className="form-group">
                <Label htmlFor="name" md={"auto"}>Your Name</Label>
                <Col md={12}>
                  <Control.text model=".name" id="name" name="name"
                    placeholder="Name"
                    className="form-control"
                    validators={{
                      minLength: minLength(1), maxLength: maxLength(20)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      minLength: "Must be more than one character",
                      maxLength: 'Must be more 20 characters or less'
                    }}
                  />
                </Col>
              </Row>
            
             <Row className="form-group">
                <Label htmlFor="comment" md={"auto"}>Comment</Label>
                <Col md={12}>
                  <Control.textarea model=".comment" id="comment" name="message"
                    rows="6"
                    className="form-control" />
                </Col>
             </Row>

            </ModalBody>
            <ModalFooter>
              <Button type="primary" color="primary" onClick={this.toggleModal}>
                Submit
              </Button>
            </ModalFooter>
          </LocalForm>
        </Modal>
      </div>
    );
  }

}

export default DishDetail;
