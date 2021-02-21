import { HttpResponseMessage } from "../HttpResponseMessage";
import { interfaces } from "../interfaces";
import { BaseHttpController } from "../BaseHttpController";

export default class ResponseMessageResult implements interfaces.IHttpActionResult {
    constructor(private message: HttpResponseMessage, private apiController: BaseHttpController) {}

    public async executeAsync() {
        return this.message;
    }
}
