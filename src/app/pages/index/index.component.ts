import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// ----Services----
import { SearchRestaurantsService } from '../../services/search-restaurants.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  restaurants: any;
  location: any;
  loading: boolean;
  user: any;

  constructor(private router: Router, private authService: AuthService, private searchRestaurants: SearchRestaurantsService) { }

  ngOnInit() {
    this.loading = false;
    this.user = this.authService.getUser();
  }

  handleSearch(data, location) {
    if (this.user) {
      this.loading = true;
      this.searchRestaurants.getAll(data, location)
        .then((results: any) => {
          this.restaurants = results.jsonBody.businesses;
          this.loading = false;
        })
        .catch();
    } else {
      this.router.navigate(['/login']);
    }
  }

  handleFavoriteClick(name) {
    this.authService.addFavorite(name);
  }

  // goToPage(profile: string) {
  //   this.router.navigate([`${profile}`]);
  // }

}
