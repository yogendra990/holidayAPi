import { browser, by, element } from 'protractor';

export class HolidayApiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('HolidayApi-root h1')).getText();
  }
}
