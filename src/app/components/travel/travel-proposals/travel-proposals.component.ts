import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Travel, User } from "~/app/core/models";
import { TravelService, UserService } from "~/app/core/http";
import { AuthService } from "~/app/core/auth/auth.service";

@Component({
    selector: "TravelProposals",
    templateUrl: "./travel-proposals.component.html"
})
export class TravelProposalsComponent implements OnInit {

    results = [];
    isBusy = true;
    error = false;

    constructor(private router: RouterExtensions,
                private userService: UserService,
                private travelService: TravelService,
                private authService: AuthService) {}

    ngOnInit(): void {
        this.results = [];
        // TODO optimize this method
        this.userService.get(this.authService.getUser().id).subscribe((response) => {
            this.results = new User(response).travels;
            this.results.reverse();
            this.isBusy = false;
        }, (e) => {
            this.error = true;
            this.isBusy = false;
            console.log(e);
        });
    }

    onDeleteTap(travel: Travel): void {
        this.travelService.delete(travel)
            .subscribe(() => {
                this.results = this.results.filter((item) => item.id !== travel.id);
                alert("OK");
            });
    }

    addTravelTap(): void {
        this.router.navigate(["/travel-edit"]);
    }
}
