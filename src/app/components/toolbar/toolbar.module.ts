import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ToolbarComponent } from "./toolbar.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule
    ],
    exports: [
        ToolbarComponent
    ]
})

export class ToolbarModule{

};