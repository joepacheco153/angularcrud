import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  //endpoint
  private url='http://localhost:8081';
  constructor(private http:HttpClient) { }

  //listar
  getListarMenues(){
    return  this.http.get<Menu[]>(this.url+'/menues');
    
  }
  //add
  agregarMenu(menu:Menu){
    return this.http.post<Menu>(this.url+'/menu', menu);
  }
  //delete
  deleteMenu(id: number){
    return this.http.delete<number>(this.url+"/menudelete/"+id);
  }
  //editar
  updateMenu(menu:Menu){
    return this.http.post<Menu>(this.url+"/menu"+ menu.idMenu, menu);
  }
}
