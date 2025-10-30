import { Component, inject, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Sidebar } from "./components/sidebar/sidebar";
import { RouterOutlet } from '@angular/router';
import { Assay } from '../model/assay.type';
import { DatePipe } from '@angular/common';
import { ModalService } from './core/services/modal-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('assay-explorer');
  
  modal = inject(ModalService);
}
