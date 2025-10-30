import { Component, inject, signal, OnInit, Output, EventEmitter } from '@angular/core';
import { AssayService } from '../../core/services/assay';
import { Assay } from '../../../model/assay.type';
import { AssayCard } from '../../components/assay-card/assay-card';
import { ModalService } from '../../core/services/modal-service';

@Component({
  selector: 'app-dashboard',
  imports: [AssayCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  assayService = inject(AssayService);
  assays = signal<Array<Assay>>([]);
  modal = inject(ModalService);

  ngOnInit(): void {
    console.log("Getting assays");
    this.assayService.getAssaysFromApi().subscribe((assays) => {this.assays.set(assays)})
  }

  openAssay(assay: Assay) {
    this.modal.open(assay);
  }
}
