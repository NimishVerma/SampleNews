import { SampleNewsPage } from './app.po';

describe('sample-news App', () => {
  let page: SampleNewsPage;

  beforeEach(() => {
    page = new SampleNewsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
