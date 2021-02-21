import { HttpResponseMessage } from "../HttpResponseMessage";
import { OK } from "http-status-codes";
import { interfaces } from "../interfaces";
import { BaseHttpController } from "../BaseHttpController";
import { StringContent } from "../content/stringContent";

export default class OkNegotiatedContentResult<T> implements interfaces.IHttpActionResult {
    constructor(private content: T, private apiController: BaseHttpController) {}

    public async executeAsync() {
        const response = new HttpResponseMessage(OK);
        response.content = new StringContent(JSON.stringify(this.content), "application/json");
        return response;
    }
}
