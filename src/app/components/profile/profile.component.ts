import { Component, OnInit } from "@angular/core";
import { User } from "~/app/core/models";
import { UserService } from "~/app/core/http";
import { AuthService } from "~/app/core/auth/auth.service";

@Component({
    selector: "Profile",
    templateUrl: "./profile.component.html"
})
export class ProfileComponent implements OnInit {

    user = new User();

    constructor(private authService: AuthService, private userService: UserService) {
    }

    ngOnInit(): void {
        /*this.userService.get(this.authService.getUser().id)
            .subscribe((response) => this.user = new User(response));*/
    }

    onSaveTap(): void {
        console.log(this.user);

        // TODO change password
        this.userService.update(this.user).subscribe((response) => {
            alert("Changes were saved!");
        });
    }
}
