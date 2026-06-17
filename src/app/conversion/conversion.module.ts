import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { ConversionPageRoutingModule } from "./conversion-routing.module";
import { ConversionPage } from "./conversion.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversionPageRoutingModule,
  ],
  declarations: [ConversionPage],
})
export class ConversionPageModule {}
