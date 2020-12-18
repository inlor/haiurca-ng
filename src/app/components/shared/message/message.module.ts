import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MessageComponent } from "./message.component";

@NgModule({
    imports: [NativeScriptCommonModule],
    declarations: [MessageComponent],
    exports: [MessageComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class MessageModule { }
