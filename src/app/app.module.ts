import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { goodbyeComponent } from "./goodbye.component";
import { buttonComponent } from "./button.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    goodbyeComponent,
    buttonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
