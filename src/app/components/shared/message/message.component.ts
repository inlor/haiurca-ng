import { Component, Input } from "@angular/core";

@Component({
    selector: "Message",
    templateUrl: "./message.component.html"
})
export class MessageComponent {

    @Input() message: string;
    @Input() logo: string;
}
