import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { User } from "~/app/core/models/user.model";
import { AuthService } from "~/app/core/auth/auth.service";
import { UserService } from "~/app/core/http";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

    user = new User();

    constructor(private router: RouterExtensions, private authService: AuthService, private userService: UserService) {
        this.user.email = "admin@haiurca.com";
        this.user.password = "haiurca2020";
        /*this.userService.getAll().subscribe((u) => {
            // this.user.email = new User(u[0]).email;
        });*/
    }

    ngOnInit(): void {
        this.redirect();
    }

    onLoginTap(): void {
        if (this.user.isComplete()) {
            this.authService.login(this.user).subscribe((response) => {
                this.authService.setToken(response.token);
                this.redirect();
            }, () => {
                alert("Credentials are invalid!");
            });
        }
    }

    redirect(): void {
        if (this.authService.getUser()) {
            this.router.navigate(["/home"]);
        }
    }
}
