import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NavComponent } from "./nav.component";

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        NavComponent
    ],
    exports: [
        NavComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NavModule { }
