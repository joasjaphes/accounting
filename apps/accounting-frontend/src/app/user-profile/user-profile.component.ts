import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setProfilePicture } from '../store/actions/user.actions';
import { User } from '../store/models/user.model';
import { AppState } from '../store/reducers';
import * as userSelector from '../store/selectors/user.selectors';

@Component({
  selector: 'accounting-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  imagePath: any = 'assets/icons/alt-profile.png';
  profilePictureUrl$: Observable<string>;
  currentUser: User;
  profileForm: FormGroup;
  constructor(private store: Store<AppState>, @Inject(MAT_DIALOG_DATA) private data: { user: User; }, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profilePictureUrl$ = this.store.pipe(select(userSelector.selectProfilePicture));
    this.profileForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      surname: [''],
      lastname: ['', Validators.required],
      email: [''],
      phoneNumber: [''],
      profilePhoto: ['']
    });
    if (this.data?.user) {
      this.currentUser = this.data.user;
      this.imagePath = this.currentUser?.profilePhoto;
      this.profileForm.patchValue({
        firstname: this.currentUser.firstName,
        surname: this.currentUser.surname,
        lastname: this.currentUser.lastName,
        email: this.currentUser.email,
        phoneNumber: this.currentUser.phoneNumber,
        profilePhoto: this.currentUser.profilePhoto
      });
    }
  }

  onFile(event) {
    console.log('event', event.target.files[0]);
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem('profile-pic', this.imagePath);
      this.imagePath = reader.result;
      this.profileForm.patchValue({
        profilePhoto: this.imagePath
      });
      this.store.dispatch(setProfilePicture({ url: this.imagePath }));
      console.log('RESULT', reader.result);
    };
    reader.readAsDataURL(file);
  }

}
