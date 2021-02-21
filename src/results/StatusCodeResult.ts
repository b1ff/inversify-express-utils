import { HttpResponseMessage } from "../HttpResponseMessage";
import { interfaces } from "../interfaces";
import { BaseHttpController } from "../BaseHttpController";

export default class StatusCodeResult implements interfaces.IHttpActionResult {
    constructor(private statusCode: number, private apiController: BaseHttpController) {}

    public async executeAsync() {
        return new HttpResponseMessage(this.statusCode);
    }
}
