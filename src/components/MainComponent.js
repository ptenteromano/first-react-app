// main container for application

import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


// derived from redux store, available as props in class Main
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};

class Main extends Component {

  constructor(props) {
    super(props);    
  }

  render() {

    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}   
        />
      );
    };

    const DishWithId = ({match}) => {
      // convert the match objects param info into an int using base 10
      return (
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
        />
      );
    };

    return (
      <div>
        <Header />

        <Switch>
          <Route path="/home" component={HomePage} />
          {/* order matters for next two '/menu', along with 'exact' */}
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} /> } />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders} /> } />
          {/* redirect stops any unknown routes from being accessed */}
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

// connects to redux store, withRouter allows use with react-router-dom
export default withRouter(connect(mapStateToProps)(Main));
