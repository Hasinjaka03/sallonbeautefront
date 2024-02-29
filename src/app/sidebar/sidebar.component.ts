import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES_MANAGER: RouteInfo[] = [
    { path: '/insert_depense',    title: 'Ajouter Depense',        icon:'nc-money-coins', class: '' },
    { path: '/liste_depense',    title: 'Liste Depense',        icon:'nc-money-coins', class: '' },
    { path: '/liste_employe',    title: 'Statistique',        icon:'nc-chart-bar-32', class: '' },
    { path: '/personnel',    title: 'Gestion Personnel',        icon:'nc-chart-bar-32', class: '' },
    { path: '/service',    title: 'Gestion Service',        icon:'nc-chart-bar-32', class: '' },
    { path: '/contact',    title: 'Contact',        icon:'nc-chart-bar-32', class: '' },
    
];

export const ROUTES_CLIENT: RouteInfo[] = [

    { path: '/insert_rendezvous',    title: 'Nouvel Rendez-vous',        icon:'nc-watch-time', class: '' },
    { path: '/rendezvous',    title: 'Liste Rendez-vous',        icon:'nc-watch-time', class: '' },
    { path: '/liste_preference',    title: 'Liste Preference',        icon:'nc-favourite-28', class: '' },
    { path: '/insert_preference',    title: 'Ajouter Preference',        icon:'nc-favourite-28', class: '' },
];

export let ROUTES: RouteInfo[];

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[]=[];
    ngOnInit() {
        const clientDataString = localStorage.getItem('utilisateur');
        const clientData = JSON.parse(clientDataString);
        if(clientData.profil==='manager'){
            ROUTES=ROUTES_MANAGER;
        }
        else{
            ROUTES=ROUTES_CLIENT;
        }
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
