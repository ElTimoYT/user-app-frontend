import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { login } from '../../store/auth/auth.actions';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  user: User;

  constructor(
    private store: Store<{auth: any}>
  ) {
    this.user = new User();
  }

  onSubmit() {
    if (!(this.user.username || this.user.password)) {
      Swal.fire({
        icon: 'error',
        title: 'Error de validación',
        text: 'Username and password are required'
      });
    }else {
      this.store.dispatch(login({username: this.user.username, password: this.user.password}));
    }
  }

}
