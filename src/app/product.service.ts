import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductsData() {
    return [
      {
        "id": 1,
        "Super_First_name": "John",
        "Super_Surname": "Osipov",
        "Super_mail": "john@example.com",
        "Desired_Job_Category": "Tööstus / Tootmine",
        "Desired_position": "Keevitaja, Metallitööline, Tööstuse lihttööline, Tootmistööline.",
        "Super_Telephone": "(372)-987-9876",
        "asap": true,
        "Comment_1": "test"
      },
      {
        "id": 2,
        "Super_First_name": "Jane",
        "Super_Surname": "Datov",
        "Super_mail": "jane@example.com",
        "Desired_Job_Category": "Промышленность / Производство",
        "Desired_position": "Сварщик",
        "Super_Telephone": "(372)-546-1403",
        "asap": true,
        "Comment_1": "test"
      },
      {
        "id": 3,
        "Super_First_name": "Igor",
        "Super_Surname": "Leipkans",
        "Super_mail": "john@example.com",
        "Desired_Job_Category": "Tööstus / Tootmine",
        "Desired_position": "Keevitaja, Metallitööline, Tööstuse lihttööline, Tootmistööline.",
        "Super_Telephone": "(372)-546-1403",
        "asap": false,
        "Comment_1": "test"
      },
      {
        "id": 4,
        "Super_First_name": "Man",
        "Super_Surname": "ManSurname",
        "Super_mail": "mail@mail.ee",
        "Desired_Job_Category": "job",
        "Desired_position": "job",
        "Super_Telephone": "(372)-456-4564",
        "asap": true,
        "Comment_1": "dfh"
      }
    ];
}

getProducts() {
  return Promise.resolve(this.getProductsData());
}


};

