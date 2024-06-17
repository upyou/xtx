import instance from "@/utils/request";

export const getCheckout = () => {
    return instance.get("/member/order/pre");
}

export const submitCheckout = (data) => {
    return instance.post("/member/order", data);
}