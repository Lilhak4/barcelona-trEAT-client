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

  constructor(private router: Router, private searchRestaurants: SearchRestaurantsService) { }

  ngOnInit() {
  }

  handleSearch(data) {
    this.searchRestaurants.getAll(data)
      .then((results: any) => {
        this.restaurants = results.jsonBody.businesses;
        console.log(results);
      })
      .catch();

  }

}
