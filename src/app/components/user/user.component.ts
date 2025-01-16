import { Component, OnInit} from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PaginatorComponent } from '../paginator/paginator.component';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { load, remove } from '../../store/users/users.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'user',
  standalone: true,
  imports: [RouterModule, PaginatorComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  title: string = 'User List'

  users: User[] = []

  paginator: any = {};

  loading: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<{users: any}>) {
      
      this.store.select('users').subscribe(state => {
        this.users = state.users;
        this.paginator = state.paginator;
        this.loading = state.loading;
      });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.store.dispatch(load({page: +(params.get('page') || '0')})));
  }

  onRemoveUser(id: number): void {
    Swal.fire({
      title: "Are you sure to delete?",
      text: "User data will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then((result) => {
      if (result.isConfirmed) {
          this.store.dispatch(remove({id}));
      }
    });
  }

  onSelectedUser(user: User): void{
    this.router.navigate(['/users/edit', user.id]);
  }

  get admin(){
    return this.authService.isAdmin();
  }
}
