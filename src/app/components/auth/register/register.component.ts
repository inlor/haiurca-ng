import { Component, OnInit } from "@angular/core";
import { User } from "~/app/core/models/user.model";
import { AuthService } from "~/app/core/auth/auth.service";
import { UserService } from "~/app/core/http/user.service";

@Component({
    selector: "Register",
    moduleId: module.id,
    templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {

    user = new User();

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
        this.user.name = "new user";
        this.user.email = "new4ioana.stoian@example.org";
        this.user.password = "123456";
    }

    onRegisterTap(): void {
        if (this.user.isComplete()) {
            this.authService.register(this.user).subscribe((next) => {
                this.authService.login(this.user).subscribe((response) => {
                    this.authService.setToken(response.token);
                });
            }, (e) => {
                alert("Something Wrong!");
                console.log("Something Wrong sing-in");
                console.log(e);
            });
        }
    }
}
