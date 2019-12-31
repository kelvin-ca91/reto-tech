import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  { path: "", redirectTo: "client", pathMatch: "full" },
  {
    path: "client",
    loadChildren: "./components/client/client.module#ClientModule"
  },
  { path: "**", redirectTo: "client", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
