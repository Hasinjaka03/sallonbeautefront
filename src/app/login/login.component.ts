// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from './login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: 'hasinjaka.kontiki@gmail.com',
    motDePasse: 'hasinjaka'
  }

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.credentials).subscribe(
      response => {
        // Gérer la réponse du serveur (par exemple, stocker le token JWT dans le stockage local)
        this.authService.setUtilisateur(response.utilisateur);
        this.router.navigate(['/employes']);
        console.log('Réponse du serveur :', response);
      },
      error => {
        console.error('Erreur lors de la connexion :', error);
        // Afficher un message d'erreur à l'utilisateur
      }
    );
  }
}
