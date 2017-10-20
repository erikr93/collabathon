import React, { Component } from 'react';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: [],
      selectedItem: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("handleChange() in Core.js: ", e);
    //use if we want to do something with the information after checkout
  }

  render() {
    // if (this.props.checkoutItems === undefined) {
    //   return([
    //   <h1>You have not placed any items in your cart</h1>
    //   ])
    // } else {

    const flat = this.props.checkoutItem.reduce((total, amount) => {
      return total.concat(amount);
    }, []);
    const flatter = flat.reduce((total, amount) => {
      return total.concat(amount);
    }, []);
    console.log(flat);
    console.log(flatter);
    var mappedCheckout = flatter.map((checkout, index) => {
      return([
          // <div className="core" key={core.call}>{core}</div>
        <p href="/perif" key={index} data-key={index} onClick={this.handleChange}>
              <p>{checkout.name}</p>
              {checkout.price}
              {checkout.description}</p>
      ])
    })
    console.log(mappedCheckout)
  // }

    return (
      <div>
        <div className="container">
          <form>
          <input className="checkout-input" type="text"></input>
          <input className="checkout-input" type="text"></input>
          <input className="checkout-input" type="text"></input>
          <input className="checkout-input" type="text"></input>
          <a className="checkout-button" href="/checkout">Checkout</a>
          </form>
          <ul className="checkout-items">
            {mappedCheckout}
          </ul>
        </div>
      </div>
    )

  }
  }

export default Checkout;
