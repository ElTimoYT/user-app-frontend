import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../services/user.service";
import { add, addSuccess,findAllPageable, load, remove, removeSuccess, setErrors, update, updateSuccess } from "./users.actions";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { User } from "../../models/user";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Injectable()
export class UsersEffects{
    loadUsers$: any;
    addUsers$: any;
    addSuccessUser$: any;
    updateUser$: any;
    updateSuccessUser$: any;
    removeUser$: any;
    removeSuccessUser$: any;

    

    constructor(
        private actions$: Actions,
        private service: UserService,
        private router: Router
    ) {
        this.loadUsers$ = createEffect(
            () => this.actions$.pipe(
                ofType(load),
                exhaustMap(action => this.service.findAllPageable(action.page)
                    .pipe(
                        map(pageable => {
                            const users = pageable.content as User[];
                            const paginator = pageable;
    
                            return findAllPageable({users, paginator});
                        }),
                        catchError((error) => of(error))
                    )
                )
            )
        );
    
        this.addUsers$ = createEffect(
            () => this.actions$.pipe(
                ofType(add),
                exhaustMap(action => this.service.create(action.userNew)
                    .pipe(
                        map(userNew => addSuccess({userNew})),
                        catchError(error => (error.status == 400) ? 
                        of(setErrors({userForm: action.userNew, errors: error.error})) : of(error)
                        )
                    )
                )
            )
        );
    
        this.addSuccessUser$ = createEffect(() => this.actions$.pipe(
            ofType(addSuccess),
            tap(() => {
                this.router.navigate(['/users']);  
                Swal.fire({
                    title: "Created new user!",
                    text: "User created successfully!",
                    icon: "success"
                });
            })
        ), {dispatch: false});
    
        this.updateUser$ = createEffect(
            () => this.actions$.pipe(
                ofType(update),
                exhaustMap(action => this.service.update(action.userUpdated)
                    .pipe(
                        map(userUpdated => updateSuccess({userUpdated})),
                        catchError(error => (error.status == 400) ? 
                        of(setErrors({userForm: action.userUpdated, errors: error.error})) : of(error)
                        )
                    )
                )
            )
        )
    
        this.updateSuccessUser$ = createEffect(() => this.actions$.pipe(
            ofType(updateSuccess),
            tap(() => {
                this.router.navigate(['/users']);  
                Swal.fire({
                    title: "Updated!",
                    text: "User edited successfully!",
                    icon: "success"
                  });
            })
        ), {dispatch: false});
    
        this.removeUser$ = createEffect(
            () => this.actions$.pipe(
                ofType(remove),
                exhaustMap(action => this.service.remove(action.id)
                    .pipe(
                        map(() => removeSuccess({ id: action.id }))
                    )
                )
            )
        );
    
        this.removeSuccessUser$ = createEffect(() => this.actions$.pipe(
            ofType(removeSuccess),
            tap(() => {
                this.router.navigate(['/users']);  
                this.router.navigate(['/users/create'], {skipLocationChange: true}).then(() => {
                    this.router.navigate(['/users']);
                });
                Swal.fire({
                    title: "Deleted!",
                    text: "The user has been deleted",
                    icon: "success"
                  });
            })
        ), {dispatch: false});
    }

}