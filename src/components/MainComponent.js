// main container for application

import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}   
        />
      );
    };

    const DishWithId = ({match}) => {
      // convert the match objects param info into an int using base 10
      return (
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
        />
      );
    };

    // const AboutUs = ({match}) => {
    //   return (
    //     <About leaders={this.state.leaders} />
    //   );
    // };

    return (
      <div>
        <Header />

        <Switch>
          <Route path="/home" component={HomePage} />
          {/* order matters for next two '/menu', along with 'exact' */}
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/aboutus" component={() => <About leaders={this.state.leaders} /> } />
          {/* redirect stops any unknown routes from being accessed */}
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
