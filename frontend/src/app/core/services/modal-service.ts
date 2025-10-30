import { Injectable, signal } from '@angular/core';
import { Assay } from '../../../model/assay.type';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  selectedAssay = signal<Assay | null>(null);

  open(assay: Assay) {
    this.selectedAssay.set(assay);
  }

  close() {
    this.selectedAssay.set(null);
  }
}
