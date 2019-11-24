import React from "react";

/* Notifications */
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const NotificationMsg = ({title, type, message, name}) => {
    store.addNotification({
        title: title + ' ' + name,
        message: message,
        type: type,                         // 'default', 'success', 'info', 'warning'
        container: 'bottom-left',                // where to position the notifications
        animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
        dismiss: {
          duration: 5000 
        }
      })
};

export default NotificationMsg;