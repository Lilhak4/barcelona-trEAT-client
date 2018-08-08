import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// ----Services----
import { SearchRestaurantsService } from '../../services/search-restaurants.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  restaurants: any;
  location: any;
  loading: boolean;

  constructor(private router: Router, private searchRestaurants: SearchRestaurantsService) { }

  ngOnInit() {
    this.loading = false;
  }

  handleSearch(data, location) {
    this.loading = true;
    this.searchRestaurants.getAll(data, location)
      .then((results: any) => {
        this.restaurants = results.jsonBody.businesses;
        console.log(results);
        this.loading = false;
      })
      .catch();

  }

}
