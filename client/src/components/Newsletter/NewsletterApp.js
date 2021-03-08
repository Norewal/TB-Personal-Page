import React, { Component } from "react";
import Newsletter from "./Newsletter";
import Loading from "./Loading" ;
import axious from 'axios';
import apiUrl from "../apiUrl";
import apiNotify from "../apiNotify";


class NewsletterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            email: "",
            loading: false
        }
    }

    handleLoadingState = loading => {
        this.setState({loading: loading});
    }

    handleSendFName = fName => {
        console.log(fName)
    }
    handleSendLName = lName => {
        console.log(lName)
    }
    handleSendEmail = email => {
        this.handleLoadingState(true);
        axious.post(`${apiUrl}/subscribe`, {
            email: email
        }).then(res => {
            if(res.data.success) {
                apiNotify("success", "Subscribed", res.data.message);
                this.setState({email: ""});
                this.handleLoadingState(false);
            } else {
                apiNotify("error", "Unable to subscribe!", res.data.error);
                this.handleLoadingState(false);
            }
        }).catch(error => {
            apiNotify("error", "Error. Please try again later.", error.message);
            this.handleLoadingState(false);
        });

    }
    handleOnChangeFName = fName => {
        this.setState({
            fName: fName
        })
    }
    handleOnChangeLName = lName => {
        this.setState({
            lName: lName
        })
    }
    handleOnChangeEmail = email => {
        this.setState({
            email: email
        })
    }

    render () {
        return (
            <div className="NewsletterApp">
                <header className="newsletter-header">
                    
                </header>
                <section className="newsletter-content">
                    <Newsletter 
                    fName={this.state.fName} 
                    lName={this.state.lName} 
                    email={this.state.email}
                    handleOnChangeFName={this.handleOnChangeFName}
                    handleOnChangeLName={this.handleOnChangeLName}
                    handleOnChangeEmail={this.handleOnChangeEmail}
                    handleSendFName={this.handleSendFName}
                    handleSendLName={this.handleSendLName}
                    handleSendEmail={this.handleSendEmail}
                    />
                    <Loading message="Working on it..." />
                </section>

            </div>

        );
    }
}

export default NewsletterApp;