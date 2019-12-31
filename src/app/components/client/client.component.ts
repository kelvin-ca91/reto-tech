import { Component, OnInit } from "@angular/core";
import { meanBy, sum } from "lodash";
import { ClientsService } from "src/app/services/clients.service";
import { HelpersService } from 'src/app/generals/helpers.service';

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styles: []
})
export class ClientComponent implements OnInit {
  averageAge: number;
  standardDeviation: number;
  constructor(private clientsService: ClientsService, private helpersService: HelpersService) {}

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.clientsService.list().subscribe((res: any) => {
      const newList = [];
      for (const key in res) {
        newList.push({ id: key, ...res[key], age: this.helpersService.getAgeByBirthdate(res[key].birthdate) });
      }
      this.getAverageAge(newList);
      this.getStandardDeviation(newList);
    });
  }

  private getAverageAge(data) {
    this.averageAge = meanBy(data, "age");
  }

  private getStandardDeviation(data) {
    const newList = data.map(item => Math.pow(item.age - this.averageAge, 2));
    this.standardDeviation = sum(newList) / (data.length - 1);
  }
}
