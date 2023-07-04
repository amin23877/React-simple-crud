import { toast } from "react-toastify";

export default function Toast(content, type) {
    switch (type) {
        case "success":
            toast.success(content);
            break;
        case "warning":
            toast.warning(content);
            break;
        case "error":
            toast.error(content);
            break;
        case "info":
            toast.info(content);
            break;
        default:
            toast(content);
            break;
    }
}
