import { HolidayApiPage } from './app.po';

describe('holiday-api App', () => {
  let page: HolidayApiPage;

  beforeEach(() => {
    page = new HolidayApiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to HolidayApi!!'))
      .then(done, done.fail);
  });
});
