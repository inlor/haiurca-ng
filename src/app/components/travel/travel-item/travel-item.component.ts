import { Component, Input} from "@angular/core";
import { Travel } from "~/app/core/models";

@Component({
    selector: "TravelItem",
    templateUrl: "./travel-item.component.html"
})
export class TravelItemComponent {
    @Input() travels: Array<Travel>;
}
