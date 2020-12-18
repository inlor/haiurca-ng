import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TravelItemComponent } from "./travel-item.component";

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        TravelItemComponent
    ],
    exports: [
        TravelItemComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TravelItemModule { }
