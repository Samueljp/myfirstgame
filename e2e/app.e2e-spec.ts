import { JuegoPage } from './app.po';

describe('juego App', () => {
  let page: JuegoPage;

  beforeEach(() => {
    page = new JuegoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
