import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  get login(){
    return this.authService.user;
  }

  get admin(){
    return this.authService.isAdmin();
  }

  handlerLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
