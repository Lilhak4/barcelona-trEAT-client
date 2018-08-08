import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class SearchRestaurantsService {
  image: any;
  name: string;
  price: any;
  rating: number;

  private API_URL = environment.apiUrl + 'search-results';

  constructor(private httpClient: HttpClient) { }


  getAll(data, location) {
    const options = {
      withCredentials: true
    };

    return this.httpClient.get(`${this.API_URL}?dessert=${data}&location=${location}`, options)
      .toPromise();
  }

}
