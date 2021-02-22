import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout'
class Strip extends Component {

    handleToken=(token, addresses)=> {
        axios.post("http://localhost:8080/payment",{ token })
        .then((res)=>console.log(res))
       
      }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="product">
                        <h1>Strip</h1>
                        <h3>Payment gateway implement with react + node.</h3>
                    </div>
                    <StripeCheckout
                        name="Three Comma Co." // the pop-in header title
                        description="Big Data Stuff" // the pop-in header subtitle
                        image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
                        ComponentClass="div"
                        label="Buy the Thing" // text inside the Stripe button
                        panelLabel="Give Money" // prepended to the amount in the bottom pay button
                        amount={1000000} // cents
                        currency="USD"
                        stripeKey="pk_test_51HUojyBfafQJf6TWNV4hp3fqAzRyXWnd47X79niCfNfa4zzOiMYmiiRmv8mbCJXkkPFLLajWnvoTeSXAAeBSWLyJ00rWKeoEXv"
                        locale="en"
                        email="info@vidhub.co"
                        // Note: Enabling either address option will give the user the ability to
                        // fill out both. Addresses are sent as a second parameter in the token callback.
                        shippingAddress
                        billingAddress={false}
                        // Note: enabling both zipCode checks and billing or shipping address will
                        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
                        zipCode={false}
                        alipay // accept Alipay (default false)
                        bitcoin // accept Bitcoins (default false)
                        allowRememberMe // "Remember Me" option (default true)
                        token={this.handleToken} // submit callback
                        // opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
                        // closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
                        // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
                        // you are using multiple stripe keys
                        reconfigureOnUpdate={false}
                        // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
                        // useful if you're using React-Tap-Event-Plugin
                        // triggerEvent="onTouchTap"
                    />
                       
                </div>

            </div>
        )
    }
}

export default Strip;
