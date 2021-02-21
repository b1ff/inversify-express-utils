import { HttpResponseMessage } from "../HttpResponseMessage";
import { BAD_REQUEST } from "http-status-codes";
import { interfaces } from "../interfaces";
import { BaseHttpController } from "../BaseHttpController";

export default class BadRequestResult implements interfaces.IHttpActionResult {
    constructor(private apiController: BaseHttpController) {}

    public async executeAsync() {
        return new HttpResponseMessage(BAD_REQUEST);
    }
}
