import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public menu:Menu;
  public menues:Menu[];
  constructor(private menuService:MenuService, 
              private router: Router) {
      this.menu = new Menu();
   }

  ngOnInit(): void {
  }


  RegistrarMenu(){
    Swal.fire({
      title: 'Deseas agregar este platillo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo agregar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.menuService.agregarMenu(this.menu)
    .subscribe(data=>{
      
      console.log(data);
    });
      }
    })



    
  }

}
