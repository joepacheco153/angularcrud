import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public menu:Menu;
  public menues:Menu[];

  constructor(private router:Router,
              private menuService:MenuService) { 
      this.menu = new Menu();

  }

  ngOnInit(): void {
    this.listarMenues();
    
  }
  listarMenues(){
    this.menuService.getListarMenues()
    .subscribe(data=>{
      this.menues=data;
      console.log(data);
    });
  }

  rutaupdate(){
    
    Swal.fire({
      title: 'Deseas editar?',
      text: "No podras cambiar esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo editar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/update'])
      }
    })

  }
  eliminarMenues(num:number):void{
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras reverti esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.menuService.deleteMenu(num).subscribe(
          response=>{
            this.listarMenues()
            Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado.',
              'success')
          })        
      }
    })  
  }
    

}
