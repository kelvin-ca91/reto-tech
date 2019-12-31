import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ClientsService } from "src/app/services/clients.service";
import { Router, ActivatedRoute } from "@angular/router";
import { IClient } from "src/app/interfaces/client";
import Swal from "sweetalert2";
@Component({
  selector: "app-form-client",
  templateUrl: "./form-client.component.html",
  styleUrls: ["./form-client.component.scss"]
})
export class FormClientComponent implements OnInit {
  clientForm: FormGroup;
  loading: boolean;

  clientId: string;
  private clientEdit: IClient;
  constructor(
    private clientsService: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.paramMap.subscribe(params => {
      this.clientId = params.get("clientId");
      if (this.clientId) {
        this.getInfoClient();
      } else {
        this.loadData();
      }
    });
  }

  private getInfoClient() {
    if (localStorage.getItem("listClient")) {
      const listClient: IClient[] = JSON.parse(
        localStorage.getItem("listClient")
      );
      this.clientEdit = listClient.find(item => item.id == this.clientId);
      if (!this.clientEdit) {
        this.router.navigate(["/client"]);
      }
      this.loadData();
    } else {
      this.clientsService.show(this.clientId).subscribe((res: any) => {
        if (res) {
          this.clientEdit = {
            id: this.clientEdit,
            ...res
          };
          this.loadData();
        } else {
          this.router.navigate(["/client"]);
        }
      });
    }
  }

  private loadData() {
    this.loading = false;
    this.loadForm();
  }

  private loadForm() {
    let defaulValues: IClient = {
      name: "",
      lastname: "",
      birthdate: null
    };
    if (this.clientEdit) {
      defaulValues = {
        ...this.clientEdit
      };
    }
    this.clientForm = new FormGroup({
      name: new FormControl(defaulValues.name, Validators.required),
      lastname: new FormControl(defaulValues.lastname, Validators.required),
      birthdate: new FormControl(defaulValues.birthdate, Validators.required)
    });
  }

  verifyForm() {
    if (this.clientForm.valid) {
      this.store();
    }
  }

  private store() {
    this.loading = true;
    const client: IClient = {
      name: this.clientForm.get("name").value,
      lastname: this.clientForm.get("lastname").value,
      birthdate: this.clientForm.get("birthdate").value
    };

    const method = !this.clientEdit
      ? this.clientsService.store(client)
      : this.clientsService.update(client, this.clientId);

    const type = this.clientEdit ? "Updated" : "Created";
    method.subscribe(data => {
      Swal.fire(`${type}!`, `Your client has been ${type}.`, "success");
      this.loading = false;
      this.router.navigate(["/"]);
    });
  }
}
