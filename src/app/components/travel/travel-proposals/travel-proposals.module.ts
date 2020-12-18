import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptPickerModule } from "nativescript-picker/angular";
import { NativeScriptDateTimePickerModule } from "nativescript-datetimepicker/angular";
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";
import { FormsModule } from "@angular/forms";

import { TravelProposalsRoutingModule } from "./travel-proposals-routing.module";
import { TravelProposalsComponent } from "./travel-proposals.component";
import { TravelItemModule } from "~/app/components/travel/travel-item/travel-item.module";
import { NavModule } from "~/app/components/shared/nav/nav.module";
import { MessageModule } from "~/app/components/shared/message/message.module";

@NgModule({
    imports: [
        TravelProposalsRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptPickerModule,
        NativeScriptDateTimePickerModule,
        NativeScriptLocalizeModule,
        FormsModule,
        TravelItemModule,
        NavModule,
        CommonModule,
        MessageModule
    ],
    declarations: [
        TravelProposalsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TravelProposalsModule { }
