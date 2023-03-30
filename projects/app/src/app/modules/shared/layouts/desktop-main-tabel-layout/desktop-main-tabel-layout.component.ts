import { Component } from '@angular/core';

@Component({
  selector: 'app-desktop-main-tabel-layout',
  templateUrl: './desktop-main-tabel-layout.component.html',
  styleUrls: ['./desktop-main-tabel-layout.component.scss'],
})
export class DesktopMainTabelLayoutComponent {
  rows: any = [
    {
      nr: 160,
      data: 'Skischuhe',
      label: 'Addidas',
      size: 'xl',
      color: 'blau',
      other: 'nix',
      max: 160,
      min: 150,
    },
    {
      nr: 160,
      data: 'Skischuhe',
      label: 'Addidas',
      size: 'xl',
      color: 'blau',
      other: 'nix',
      max: 160,
      min: 150,
    },
    {
      nr: 160,
      data: 'Skischuhe',
      label: 'Addidas',
      size: 'xl',
      color: 'blau',
      other: 'nix',
      max: 160,
      min: 150,
    },
  ];

  constructor() {}
}
