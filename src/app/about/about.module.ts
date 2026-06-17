import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { AboutPageRoutingModule } from "./about-routing.module";
import { AboutPage } from "./about.page";

@NgModule({
  declarations: [AboutPage],
  imports: [CommonModule, IonicModule, AboutPageRoutingModule],
})
export class AboutPageModule {}
