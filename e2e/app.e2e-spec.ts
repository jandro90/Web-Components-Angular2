import { WebcomponentcliPage } from './app.po';

describe('webcomponentcli App', () => {
  let page: WebcomponentcliPage;

  beforeEach(() => {
    page = new WebcomponentcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
