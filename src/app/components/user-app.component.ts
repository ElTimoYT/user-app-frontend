import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SharingDataService } from '../services/sharing-data.service';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './user-app.component.html'
})
export class UserAppComponent implements OnInit{

  users: User[] = [];

  userSelected: User;

  paginator: any = {};

  constructor(
    private service: UserService, 
    private sharingData: SharingDataService, 
    private router: Router,
    private route: ActivatedRoute) {
      this.userSelected = new User();
  }
  ngOnInit(): void {
    //this.service.findAll().subscribe( users => this.users = users);

    // this.route.paramMap.subscribe(params => {
    //   const page: number = +(params.get('page') || '0');
    //   this.service.findAllPageable(page).subscribe( pageable => this.users = pageable.content as User[]);
    // });
    this.addUser();
    this.removeUser();
    this.findUserById();
    this.pageUsersEvent();
  }

  pageUsersEvent() {
    this.sharingData.pageUsersEventEmitter.subscribe(pageable => {
      this.users = pageable.users;
      this.paginator = pageable.paginator;
    });
  }

  findUserById() {
    this.sharingData.findUserByIdUserEventEmitter.subscribe(id => {
      const user = this.users.find(user => user.id == id);
      this.sharingData.selectUserEventEmitter.emit(user);
    })
  }

  addUser(): void {
    this.sharingData.newUserEventEmitter.subscribe(user => {
      if (user.id > 0){
        this.service.update(user).subscribe(
        {
          next: (userUpdated) => {
          this.users = this.users.map( u => (u.id == userUpdated.id) ? {... userUpdated} : u);
          this.router.navigate(['/users'], {state: {
            users: this.users, 
            paginator: this.paginator
          }});

          Swal.fire({
            title: "Actualizado!",
            text: "Usuario editado con éxito!",
            icon: "success"
          });
        },
        error: (err) => {
          //console.log(err.error);
          if (err.status == 400){
          this.sharingData.errorsUserFormEventEmitter.emit(err.error);
          }
        }});
      }else{
        this.service.create(user).subscribe(
        {
          next: userNew => {
          this.users = [... this.users, {... userNew}];
          this.router.navigate(['/users'], {
            state: {
              users: this.users,
              paginator: this.paginator
          }});  
          Swal.fire({
            title: "Creado nuevo usuario!",
            text: "Usuario creado con éxito!",
            icon: "success"
          });
        },
        error: (err) => {
          // console.log(err.error);
          if (err.status == 400){
            this.sharingData.errorsUserFormEventEmitter.emit(err.error);
          }
        }});
      }
    })
  }

  removeUser(): void {
    this.sharingData.idUserEventEmitter.subscribe(id => {
      Swal.fire({
        title: "Esta seguro de eliminar?",
        text: "El dato del usuario será eliminado permanentemente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.service.delete(id).subscribe(() => {
            this.users = this.users.filter(user => user.id != id);
            this.router.navigate(['/users/create'], {skipLocationChange: true}).then(() => {
              this.router.navigate(['/users'], {state: {
                users: this.users,
                paginator: this.paginator
              }});
          })
          })
          Swal.fire({
            title: "Eliminado!",
            text: "El usuario ha sido eliminado",
            icon: "success"
          });
        }
      });
    });
  }
}
