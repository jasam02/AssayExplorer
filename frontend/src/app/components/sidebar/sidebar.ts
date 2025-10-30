import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { AssayService } from '../../core/services/assay';
import { Assay } from '../../../model/assay.type';
import { ModalService } from '../../core/services/modal-service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  assayService = inject(AssayService);
  assays = signal<Array<Assay>>([]);
  modal = inject(ModalService);

  ngOnInit(): void {
    this.assayService.getAssaysFromApi().subscribe(assays => this.assays.set(assays));
  }

  openAssay(assay: Assay) {
    this.modal.open(assay);
  }

}
