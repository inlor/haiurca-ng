import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptPickerModule } from "nativescript-picker/angular";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";
import { FormsModule } from "@angular/forms";

import { TravelEditRoutingModule } from "./travel-edit-routing.module";
import { TravelEditComponent } from "./travel-edit.component";
import { CommonModule } from "@angular/common";
import { NavModule } from "~/app/components/shared/nav/nav.module";
import { MessageModule } from "~/app/components/shared/message/message.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptFormsModule,
        NativeScriptPickerModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptPickerModule,
        NativeScriptDateTimePickerModule,
        NativeScriptLocalizeModule,
        FormsModule,
        TravelEditRoutingModule,
        CommonModule,
        NavModule,
        MessageModule
    ],
    declarations: [
        TravelEditComponent
    ],
    exports: [
        TravelEditComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TravelEditModule { }
