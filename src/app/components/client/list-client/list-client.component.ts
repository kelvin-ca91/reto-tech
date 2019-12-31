import { Component, OnInit } from "@angular/core";
import { ClientsService } from "src/app/services/clients.service";
import { HelpersService } from "src/app/generals/helpers.service";
import Swal from "sweetalert2";
import { IClient } from 'src/app/interfaces/client';
@Component({
  selector: "app-list-client",
  templateUrl: "./list-client.component.html",
  styleUrls: ["./list-client.component.scss"]
})
export class ListClientComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "name",
    "lastname",
    "age",
    "birthdate",
    "options"
  ];
  dataSource: IClient[];
  loading: boolean;
  constructor(
    private clientsService: ClientsService,
    private helpersService: HelpersService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.loading = true;
    this.clientsService.list().subscribe((res: any) => {
      this.dataSource = [];
      for (const key in res) {
        this.dataSource.push({
          id: key,
          ...res[key],
          age: this.helpersService.getAgeByBirthdate(res[key].birthdate)
        });
      }
      localStorage.setItem('listClient', JSON.stringify(this.dataSource));
      this.loading = false;
    });
  }

  delete(id: string, index: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        this.loading = true;
        this.clientsService.destroy(id).subscribe(
          () => {
            Swal.fire("Deleted!", "Your client has been deleted.", "success");
            this.dataSource.splice(index, 1);
            localStorage.setItem('listClient', JSON.stringify(this.dataSource));
          },
          () => {
            Swal.fire("Error!", "Could not delete client", "warning");
          },
          () => (this.loading = false)
        );
      }
    });
  }
}
