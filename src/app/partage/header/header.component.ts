import { Component, OnInit , Input } from '@angular/core';

import { Router } from '@angular/router';
import { Utilisateur } from 'app/models/utilisateur';
import { LoginService } from 'app/service/login-admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // user : Utilisateur ;
  @Input() user! : Utilisateur  ;
  isvue : boolean = true ;

  constructor( private loginservice : LoginService,private router : Router ) {
    // this.user =  user_serv.getCurrentUser('') ; user_serv : LoginService  
   }

  ngOnInit(): void {
    // this.user = 
  }

  deconnecte():void {
    // console.log('alefa kkkkk') ;
    this.loginservice.logout(this.user.profil) ;
    this.router.navigate(['/employee/login']);
  }

  menus():void{
    // this.isvue=!this.isvue ;
     document.body.classList.toggle('toggle-sidebar');
  }

}
