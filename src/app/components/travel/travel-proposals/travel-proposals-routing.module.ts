import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TravelProposalsComponent } from "./travel-proposals.component";

const routes: Routes = [
    { path: "", component: TravelProposalsComponent }
    // { path: "search-items", loadChildren: () =>
            // import("~/app/components/search/search-items/search-items.module").then((m) => m.SearchItemsModule)
    // }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TravelProposalsRoutingModule { }
