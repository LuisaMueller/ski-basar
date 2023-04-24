import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeableVariablesService {
  startTime = '16:30';
  endTime = '17:30';
  pickUpDate = '10.12.2023';

  classificationList: string[] = [
    'Ski',
    'Skitasche',
    'Skischuhe',
    'Skischuhtasche',
    'Skistöcke',
    'Skijacke',
    'Skihose',
    'Skianzug',
    'Skibrille',
    'Skihelm',
    'Skioverall',
    'Skiunterwäsche/Rollis',
    'Pullover/Fleecepullover/Fleecejacke',
    'Protektor',
    'Handschuhe',
    'Mütze',
    'Sturmhaube',
    'Schal/Neckwarmer',
    'Skisocken',
    'Stiefelsocken',
    'Weste',
    'Winterschuhe/Boots',
    'Langlaufski',
    'Langlaufskischuhe',
    'Langlaufstöcke',
    'Snowboard',
    'Snowboardschuhe',
    'Snowboardbindung',
    'Snowboardfangleine',
    'Schlitten',
    'Schlittschuhe',
  ];
  brandList: string[] = [
    'Areco',
    'Atomic',
    'Blizzard',
    'Burton',
    'Chiemsee',
    'Dare2Be',
    'Dynastar',
    'Elan',
    'Etirel',
    'Firefly',
    'Fischer',
    'Giro',
    'Head',
    'Icepeak',
    'Jako',
    'K2',
    'Killtec',
    'Lange',
    'Leki',
    'Lowa',
    'Maier Sports',
    'McKinley',
    'Nordica',
    'Oakley',
    'Protest',
    'Roces',
    'Rossignol',
    'Salomon',
    'Somatec',
    'Spider',
    'TecnoPro',
    'UVEX',
    'Völkl',
    'Ziener',
  ];
  sizeList: string[] = ['MP15.0/EU24.5', 'MP21.0/EU33.5', 'MP31.5/EU49.0']; //noch erweitern

  //ALphabet-Liste einfügen
}
