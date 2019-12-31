import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientComponent } from "./client.component";
import {
  MatMenuModule,
  MatTableModule,
  MatSortModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule
} from "@angular/material";
import { ListClientComponent } from "./list-client/list-client.component";
import { ClientRoutes } from "./client.routing";
import { CardModule } from "../shared/card/card.module";
import { FormClientComponent } from "./form-client/form-client.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PipesTransformsModule } from 'src/app/pipes/pipes-transforms.module';

@NgModule({
  imports: [
    ClientRoutes,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    CardModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    PipesTransformsModule,
    MatIconModule
  ],
  declarations: [ClientComponent, ListClientComponent, FormClientComponent]
})
export class ClientModule {}
