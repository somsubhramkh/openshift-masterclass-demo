import { browser, by, element, ElementFinder } from 'protractor';


// ,
        // "e2e": {
        //   "builder": "@angular-devkit/build-angular:protractor",
        //   "options": {
        //     "protractorConfig": "e2e/protractor.conf.js",
        //     "devServerTarget": "GoldiesGym:serve"
        //   },
        //   "configurations": {
        //     "production": {
        //       "devServerTarget": "GoldiesGym:serve:production"
        //     }
        //   }
        // }



export class AppPage {

  navigateTo() {
    return browser.get('/home');
  }

  navigateToLogin(){
    return browser.get('/login')
  }

  navigateToRegister(){
    return browser.get('/register')
  }

  getImage():ElementFinder{
    return element(by.css('img'));
  }
  getCenterText():ElementFinder{
    return element(by.css('h4'));
  }

  getRouterOutlet():ElementFinder{
    return element(by.tagName('router-outlet'));
  }

  getFooter():ElementFinder{
    return element(by.tagName('<app-footer>'));
  }
  
}
