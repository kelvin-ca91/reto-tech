import { Injectable } from "@angular/core";
import * as moment from "moment";
@Injectable({
  providedIn: "root"
})
export class HelpersService {
  constructor() {}

  getAgeByBirthdate(birthdate: Date) {
    return moment().diff(birthdate, 'years', false);
  }
}
