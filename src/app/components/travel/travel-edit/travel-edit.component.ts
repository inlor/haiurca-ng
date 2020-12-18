import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { City, Travel } from "~/app/core/models";
import { CityService, TravelService } from "~/app/core/http";
import { AuthService } from "~/app/core/auth/auth.service";

@Component({
    selector: "TravelEdit",
    templateUrl: "./travel-edit.component.html"
})
export class TravelEditComponent implements OnInit {

    travel = new Travel();
    cities = [];
    isBusy = true;
    error = false;

    constructor(private cityService: CityService,
                private travelService: TravelService,
                private authService: AuthService,
                private routerExtensions: RouterExtensions) {}

    ngOnInit(): void {
        this.cityService.getAll().subscribe((data) => {
            data.forEach((value) => this.cities.push(new City(value)));
            this.isBusy = false;
        }, () => {
            this.error = true;
        });
    }

    onEditTap(): void {
        if (this.travel.complete()) {
            this.isBusy = true;
            this.travel.user = this.authService.getUser();
            this.travelService.store(this.travel).subscribe(() => {
                this.routerExtensions.navigate(["travel-proposals"]);
                this.isBusy = false;
            }, () => this.error = true);
        }
    }
}
