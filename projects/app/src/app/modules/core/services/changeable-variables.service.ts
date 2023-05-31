import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeableVariablesService {
  saturdayDate = '09.12.2023';
  sundayDate = '10.12.2023';
  startTimePickUp = '16:30'; //Warenabholung am Sonntag
  endTimePickUp = '17:30'; //Warenabholung am Sonntag
  timeslot1saturday = 'Nur Annahme: 11:00 - 12:00 Uhr';
  timeslot2saturday = 'Annahme und Verkauf: 13:00 - 18:00 Uhr';
  timeslot1sunday = 'Annahme und Verkauf: 11:00 - 15:00 Uhr';
  timeslot2sunday =
    'Rückgabe der nicht verkauften Waren / des Verkaufserlöses: ' +
    this.startTimePickUp +
    ' - ' +
    this.endTimePickUp +
    ' Uhr';

  helperPassword = '1234';

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
    'Skiunterwäsche / Rollis',
    'Pullover / Fleecepullover / Fleecejacke',
    'Protektor',
    'Handschuhe',
    'Mütze',
    'Sturmhaube',
    'Schal / Neckwarmer',
    'Skisocken',
    'Stiefelsocken',
    'Weste',
    'Winterschuhe / Boots',
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
  sizeList: string[] = [
    'MP 15.0 / EU 24.5',
    'MP 15.5 / EU 25.5',
    'MP 16.0 / EU 26.0',
    'MP 16.5 / EU 27.0',
    'MP 17.0 / EU 27.5',
    'MP 17.5 / EU 28.5',
    'MP 18.0 / EU 29.0',
    'MP 18.5 / EU 30.0',
    'MP 19.0 / EU 30.5',
    'MP 19.5 / EU 31.5',
    'MP 20.0 / EU 32.0',
    'MP 20.5 / EU 33.0',
    'MP 21.0 / EU 33.5',
    'MP 21.5 / EU 34.5',
    'MP 22.0 / EU 35.0',
    'MP 22.5 / EU 36.0',
    'MP 23.0 / EU 36.5 / 275mm',
    'MP 23.5 / EU 37.5',
    'MP 24.0 / EU 38.0 / 285mm',
    'MP 24.5 / EU 39.0',
    'MP 25.0 / EU 39.5 / 295mm',
    'MP 25.5 / EU 40.5',
    'MP 26.0 / EU 41.0 / 305mm',
    'MP 26.5 / EU 42.0',
    'MP 27.0 / EU 42.5 / 315mm',
    'MP 27.5 / EU 43.5',
    'MP 28.0 / EU 44.0 / 325mm',
    'MP 28.5 / EU 45.0',
    'MP 29.0 / EU 45.5 / 335mm',
    'MP 29.5 / EU 46.5',
    'MP 30.0 / EU 47.0 / 345mm',
    'MP 30.5 / EU 48.0',
    'MP 31.0 / EU 48.5 / 355mm',
    'MP 31.5 / EU 49.0',
    'MP 32.0 / EU 50.0',
    'MP 32.5 / EU 51.0',
    'verstellbar 30-35',
    'verstellbar 36-40',

    'Herren XXS / 44',
    'Herren XS / 46',
    'Herren S / 48',
    'Herren M / 50',
    'Herren L / 52',
    'Herren XL / 54',
    'Herren 2XL / 56',
    'Herren 3XL / 58-60',
    'Herren 4XL / 62-64',
    'Herren 5XL / 66-68',
    'Herren 6XL / 70-72',
    'Herren 7XL / 74',

    'Damen XS / 32-34',
    'Damen S / 36-38',
    'Damen M / 40-42',
    'Damen L / 44-46',
    'Damen XL / 48-50',
    'Damen XXL / 52',

    'US 6.0',
    'US 6.5',
    'US 7.0',
    'US 7.5',
    'US 8.0',
    'US 8.5',
    'US 9.0',
    'US 9.5',
    'US 10.0',
    'US 10.5',

    'Kinder 98 / 2 Jahre',
    'Kinder 110 / 3 Jahre',
    'Kinder 116 / 4 Jahre',
    'Kinder 122 / 5 Jahre',
    'Kinder 128 / 6 Jahre',
    'Kinder 134 / 7 Jahre',
    'Kinder 140 / 8 Jahre',
    'Kinder 146 / 9 Jahre',
    'Kinder 152 / 10 Jahre',
    'Kinder 158 / 11 Jahre',
    'Kinder 164 / 12 Jahre',
    'Kinder 170 / 13 Jahre',

    '80 cm',
    '85 cm',
    '90 cm',
    '95 cm',
    '97 cm',
    '100 cm',
    '105 cm',
    '110 cm',
    '115 cm',
    '117 cm',
    '118 cm',
    '120 cm',
    '125 cm',
    '130 cm',
    '135 cm',
    '137 cm',
    '138 cm',
    '140 cm',
    '142 cm',
    '144 cm',
    '145 cm',
    '150 cm',
    '152 cm',
    '153 cm',
    '155 cm',
    '156 cm',
    '157 cm',
    '160 cm',
    '165 cm',
    '170 cm',
    '175 cm',
    '177 cm',
    '180 cm',
    '185 cm',
    '190 cm',
    '195 cm',
    '200 cm',
  ];

  charArray: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M',
    'N',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'AA',
    'AB',
    'AC',
    'AD',
    'AE',
    'AF',
    'AG',
    'AH',
    'AJ',
    'AK',
    'AL',
    'AM',
    'AN',
    'AP',
    'AQ',
    'AR',
    'AS',
    'AT',
    'AU',
    'AV',
    'AW',
    'AX',
    'AY',
    'AZ',
  ];
}
