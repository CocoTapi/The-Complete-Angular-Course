import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostComponent, GithubFollowersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '9-http';
}
