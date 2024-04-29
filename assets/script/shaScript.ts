import { _decorator, Component, Label, Node } from "cc";
import sha256 from "js-sha256";
const { ccclass, property } = _decorator;

@ccclass("shaScript")
export class shaScript extends Component {
    @property({ type: Label })
    label: Label = null;
    start() {}

    update(deltaTime: number) {}

    onClick() {
        console.log("onClick FUnction called!");
        var hash = sha256.create();
        // hash.update("Message to hash");
        hash.update(this.label.string);
        this.label.string = hash.hex();
    }
}
