import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  textAlign = 'center';

  header = 'Test MEAN Appartoo';
  titre = 'Carnet d\'adresse de Schtroumpf';

}
