import { Component, OnInit } from "@angular/core";
import { Travel, User } from "~/app/core/models";
import { TravelService } from "~/app/core/http";

import { environment } from "~/environments/environment";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    travel = new Travel();
    constructor(private travelService: TravelService) {

    }

    ngOnInit(): void {
        // URL is a built-in JavaScript class to manipulate URLs
        const u = new URL("http://localhost:3000/hub");
        u.searchParams.append("topic", environment.host + "api/cities");

        /*const eventSource = new EventSource(url);
        eventSource.onmessage = (event) => {
            console.log(JSON.parse(event.data));
        };*/
    }
}
