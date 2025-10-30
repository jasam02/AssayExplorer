import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Assay } from '../../../model/assay.type';



@Injectable({
  providedIn: 'root'
})
export class AssayService {
  private http = inject(HttpClient);
  private base = environment.apiBase;

  getAssaysFromApi() {
    return this.http.get<Array<Assay>>(`${this.base}/api/assays`)
  }
}
