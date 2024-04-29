import { _decorator, Component, Label, Node } from "cc";

import hash from "jshashes";
const { ccclass, property } = _decorator;

@ccclass("shaScript")
export class shaScript extends Component {
    @property({ type: Label })
    label: Label = null;
    start() {
        // var SHA256 = new Hashes.SHA256();
        // console.log(SHA256.hex("Karan Kalra"));
    }

    update(deltaTime: number) {}

    onClick() {
        // console.log("onClick FUnction called!");
        // var hash = sha256.create();
        // // hash.update("Message to hash");
        // hash.update(this.label.string);
        // this.label.string = hash.hex();

        var hashObj = new hash.SHA256();
        var hashValue = hashObj.hex(this.label.string);
        this.label.string = hashValue;
    }
}
