import { HttpResponseMessage } from "../HttpResponseMessage";
import { CONFLICT } from "http-status-codes";
import { interfaces } from "../interfaces";
import { BaseHttpController } from "../BaseHttpController";

export default class ConflictResult implements interfaces.IHttpActionResult {
    constructor(private apiController: BaseHttpController) {}

    public async executeAsync() {
        return new HttpResponseMessage(CONFLICT);
    }
}
