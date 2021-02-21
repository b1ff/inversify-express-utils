import { HttpResponseMessage } from "../HttpResponseMessage";
import { INTERNAL_SERVER_ERROR } from "http-status-codes";
import { interfaces } from "../interfaces";
import { BaseHttpController } from "../BaseHttpController";
import { StringContent } from "../content/stringContent";

export default class ExceptionResult implements interfaces.IHttpActionResult {
    constructor(private error: Error, private apiController: BaseHttpController) {}

    public async executeAsync() {
        const response = new HttpResponseMessage(INTERNAL_SERVER_ERROR);
        response.content = new StringContent(this.error.toString());
        return response;
    }
}
