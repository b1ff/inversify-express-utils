import { HttpResponseMessage } from "../HttpResponseMessage";
import { INTERNAL_SERVER_ERROR } from "http-status-codes";
import { interfaces } from "../interfaces";
import { BaseHttpController } from "../BaseHttpController";

export default class InternalServerErrorResult implements interfaces.IHttpActionResult {
    constructor(private apiController: BaseHttpController) {}

    public async executeAsync() {
        return new HttpResponseMessage(INTERNAL_SERVER_ERROR);
    }
}
