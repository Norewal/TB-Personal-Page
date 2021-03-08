import React, { Component } from 'react';
import Description from "../Notification/Description";
import Subscribe from "./Subscribe";
import check from "../images/check-mark.svg";
import exclamation from "../images/exclamation.svg";
import xmark from "../images/x-mark.svg";

class SubscribeForm extends Component {

    state = {
        subscribe: {
        placeholder: "Enter email address",
        buttonText: "Submit"
        },
        notification: {
            src: "",
            alt: "",
            message: "",
            level: "",
            visible: false
        }
    }



    configureNotification = level => {
        const notification = { ...this.state.notification };
        notification.level = level;

        if (level === "success") {
            notification.src = check;
            notification.alt = "Check Mark";
            notification.message = `Thank you for subscribing to our mailing list.
                                    You will be receiving a welcome email shortly.`;
        } else if ( level === "warning") {
            notification.src = exclamation;
            notification.alt = "Exclamation Point";
            notification.message = `The email you entered is already on our mailing list.
                                    Thank you for joining the community.`;
        } else {
            notification.src = xmark;
            notification.alt = "X Mark";
            notification.message = `There was an issue with your email submission.
                                    Please check your email and try again.`;
        }
        this.setState({ notification });
    };


    showNotification = () => {
        const notification = { ...this.state.notification };
        notification.visible = true;
        this.setState({ notification }, () => {
            setTimeout(() => {
            notification.visible = false;
            this.setState({ notification });
            }, 6000);
        });
    };



    render() {
        const {
            subscribe,
            notification
        } = this.state;



        return (
            <div>
                <Subscribe 
                    placeholder={subscribe.placeholder} 
                    buttonText={subscribe.buttonText} 
                    showNotification={this.showNotification}
                    configureNotification={this.configureNotification}
                />  
                <Description 
                    src={notification.src} 
                    alt={notification.alt}
                    message={notification.message} 
                    level={notification.level} 
                    visible={notification.visible} 
                />
            </div>
        );
    }
}

export default SubscribeForm;