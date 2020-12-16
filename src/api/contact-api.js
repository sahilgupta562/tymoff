import { http, contactHeaderOptions } from "../core";
import { URL } from "./_urls.js";
import { get } from "lodash";

const apiSendContact = async contactData => {
    const response = await http.put(URL.CONTACT_API(), contactData, contactHeaderOptions);
    if (response && response.status >= 400) {
        const errorMessage = get(response, "data.message", "");
        throw new Error(errorMessage || "Something went wrong!");
    }
    return response || null;
};

export { apiSendContact };