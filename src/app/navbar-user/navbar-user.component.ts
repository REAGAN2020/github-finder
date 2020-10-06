import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { User } from '../user';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {

  repo: Repo;
  user: User;
  constructor(public githubsearch:GithubService) { }

  getUsers(userName) {
    this.githubsearch.getUsers(userName).then(
      (success) => {
        this.user = this.githubsearch.user;
      },
      (error) => {
        console.log(error);
      }
    )
    this.githubsearch.getRepo(userName).then(
      (success) => {
        this.repo = this.githubsearch.repo;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  // getRepo(userName){ 


  // }

  ngOnInit(): void {
    this.getUsers("REAGAN2020");
  }


}
