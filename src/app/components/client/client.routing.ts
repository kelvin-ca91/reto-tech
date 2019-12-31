import { Routes, RouterModule } from "@angular/router";
import { ClientComponent } from "./client.component";
import { FormClientComponent } from "./form-client/form-client.component";

const routes: Routes = [
  { path: "", component: ClientComponent },
  { path: "new", component: FormClientComponent },
  { path: ":clientId/edit", component: FormClientComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

export const ClientRoutes = RouterModule.forChild(routes);
