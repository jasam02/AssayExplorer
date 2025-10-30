import { Component, input } from '@angular/core';
import { Assay } from '../../../model/assay.type';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-assay-card',
  imports: [DatePipe],
  templateUrl: './assay-card.html',
  styleUrl: './assay-card.scss'
})
export class AssayCard {
  assay = input.required<Assay>();

}
