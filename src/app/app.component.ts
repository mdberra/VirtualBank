import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../app/servina/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Servina';
  mostrar = 'Inicio';
  user: User;
  publicIP: string = "";

  images = ['assets/img/naturaleza-1.png', 'assets/img/naturaleza-2.png', 'assets/img/naturaleza-3.png',
            'assets/img/naturaleza-4.png', 'assets/img/naturaleza-5.png', 'assets/img/naturaleza-6.png'];

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private config: NgbCarouselConfig,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      cusuario: ['', Validators.required],
      cpassword: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.user = new User( this.loginForm.controls['cusuario'].value,
                          this.loginForm.controls['cpassword'].value,
                          new Date(),
                          this.publicIP
    );
//    console.log(this.user);
    if(this.user.usuario == 'servina') {
      this.mostrar = "Servina";
    }
  }
}