import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AsyncFirebasePipe } from "./async-firebase.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [AsyncFirebasePipe],
  exports: [AsyncFirebasePipe]
})
export class PipesTransformsModule {}
