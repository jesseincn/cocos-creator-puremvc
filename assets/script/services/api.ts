import request from "../utils/request";
import { URL } from "../Constants";


export async function Test(params) {
    return request(URL.Test, {
        method: 'POST',
        body: {
            ...params,
            // method: 'delete',
        },
    });
}