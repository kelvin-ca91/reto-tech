import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card.component";
import { MatCardModule } from "@angular/material";

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class CardModule {}
