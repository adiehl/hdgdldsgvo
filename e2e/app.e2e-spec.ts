import { HdgdldsgvoPage } from './app.po';

describe('hdgdldsgvo App', function() {
  let page: HdgdldsgvoPage;

  beforeEach(() => {
    page = new HdgdldsgvoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
