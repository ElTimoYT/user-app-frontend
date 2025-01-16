import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _idUserEventEmitter: EventEmitter<number> = new EventEmitter();

  private _newUserEventEmitter: EventEmitter<User> = new EventEmitter(); 

  private _findUserByIdUserEventEmitter: EventEmitter<number> = new EventEmitter();

  private _selectUserEventEmitter: EventEmitter<User> = new EventEmitter();

  private _errorsUserFormEventEmitter: EventEmitter<any> = new EventEmitter();

  private _pageUsersEventEmitter = new EventEmitter();

  private _handlerLoginEventEmitter = new EventEmitter();

  constructor() { }

  get idUserEventEmitter(): EventEmitter<number> {
    return this._idUserEventEmitter;
  }

  get newUserEventEmitter(): EventEmitter<User>{
    return this._newUserEventEmitter;
  }

  get findUserByIdUserEventEmitter(): EventEmitter<number>{
     return this._findUserByIdUserEventEmitter;
   }

  get selectUserEventEmitter(): EventEmitter<User>{
    return this._selectUserEventEmitter;
  }

  get errorsUserFormEventEmitter(): EventEmitter<any>{
    return this._errorsUserFormEventEmitter;
  }

  get pageUsersEventEmitter(){
    return this._pageUsersEventEmitter;
  }

  get handlerLoginEventEmitter(){
    return this._handlerLoginEventEmitter;
  }
}
