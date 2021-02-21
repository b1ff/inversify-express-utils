import { HttpResponseMessage } from "../HttpResponseMessage";
import { BAD_REQUEST } from "http-status-codes";
import { interfaces } from "../interfaces";
import { BaseHttpController } from "../BaseHttpController";
import { StringContent } from "../content/stringContent";

export default class BadRequestErrorMessageResult implements interfaces.IHttpActionResult {
    constructor(private message: string, private apiController: BaseHttpController) {}

    public async executeAsync() {
        const response = new HttpResponseMessage(BAD_REQUEST);
        response.content = new StringContent(this.message);
        return response;
    }
}
