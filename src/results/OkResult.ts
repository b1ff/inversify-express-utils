import { HttpResponseMessage } from "../HttpResponseMessage";
import { OK } from "http-status-codes";
import { interfaces } from "../interfaces";
import { BaseHttpController } from "../BaseHttpController";

export default class OkResult implements interfaces.IHttpActionResult {
    constructor(private apiController: BaseHttpController) {}

    public async executeAsync() {
        return new HttpResponseMessage(OK);
    }
}
