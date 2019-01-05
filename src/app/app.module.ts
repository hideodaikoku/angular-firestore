import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';
// take it from the database you created on Google Cloud Firebase 
var firebaseConfig ={
  apiKey: "AIzaSyATN3wZlfzXdVKBm44WfIqk1EUbra-UNi0",
  authDomain: "fir-71047.firebaseapp.com",
  databaseURL: "https://fir-71047.firebaseio.com",
  projectId: "fir-71047",
  storageBucket: "fir-71047.appspot.com",
   messagingSenderId: "920104515692"

}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
