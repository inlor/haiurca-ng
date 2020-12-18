import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { NavModule } from "~/app/components/shared/nav/nav.module";
import { MessageModule } from "~/app/components/shared/message/message.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NavModule,
        MessageModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
