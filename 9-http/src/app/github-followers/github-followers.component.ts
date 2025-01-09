import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'github-followers',
  standalone: true,
  imports: [NgFor],
  templateUrl: './github-followers.component.html',
  styleUrl: './github-followers.component.scss'
})
export class GithubFollowersComponent implements OnInit {
  followers: any[] = [];
  constructor(private service: GithubFollowersService){}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (response) => {
        this.followers = response;
      }
    })
  }
}
