import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { NgForm }    from '@angular/common';
import { Auth } from 'app/shared/services/auth.service';

@Component({
  moduleId: module.id ,
  selector: 'desktop-navbar' ,
  styleUrls: ['./desktop-navbar.style.css'] ,
  templateUrl: './desktop-navbar.template.html' ,
  directives: [ROUTER_DIRECTIVES]
})

export class DesktopNavbarComponent {
  isOpen: any;
  static: string;
  searchProduct: string;
  searchList: boolean;
  @Input() username;
  @Input() categories;
  constructor(
    private router: Router,
    private auth: Auth
  ) {
    this.isOpen = {};
    this.static = "/website/navbar/";
  }

  onSubmit() {
    let link = ['/buscar/productos/'+ this.searchProduct];
    this.router.navigate(link);
    this.searchList = false;
    this.searchProduct = '';
  }
}
