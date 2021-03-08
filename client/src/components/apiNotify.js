import { notification } from "antd";

const apiNotify = (type, msg, desc) => {
    notification.destroy();
    notification[type]({
        message: msg,
        description: desc
    });
}

export default apiNotify;