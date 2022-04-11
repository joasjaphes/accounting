import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setProfilePicture } from '../store/actions/user.actions';
import { AppState } from '../store/reducers';
import * as userSelector from '../store/selectors/user.selectors';

@Component({
  selector: 'accounting-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  imagePath:any = 'assets/icons/alt-profile.png';
  profilePictureUrl$:Observable<string>;



  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.profilePictureUrl$ = this.store.pipe(select(userSelector.selectProfilePicture));
  }

  onFile(event) {
    console.log('event', event.target.files[0]);
    const file = event.target.files[0];
    // this.imagePath = event.target.value
    var reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem('profile-pic', this.imagePath);
      this.imagePath = reader.result;
      this.store.dispatch(setProfilePicture({url:this.imagePath}));
      console.log('RESULT', reader.result)
    }
    reader.readAsDataURL(file);
  }

}
