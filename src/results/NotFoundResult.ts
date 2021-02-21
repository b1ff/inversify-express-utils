import { HttpResponseMessage } from "../HttpResponseMessage";
import { NOT_FOUND } from "http-status-codes";
import { interfaces } from "../interfaces";
import { BaseHttpController } from "../BaseHttpController";

export default class NotFoundResult implements interfaces.IHttpActionResult {
    constructor(private apiController: BaseHttpController) {}

    public async executeAsync() {
        return new HttpResponseMessage(NOT_FOUND);
    }
}
