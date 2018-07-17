import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { InfoPage } from '../info/info';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = InfoPage;

  constructor() {

  }
}
