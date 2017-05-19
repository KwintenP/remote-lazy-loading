import { RemoteLazyLoadingPage } from './app.po';

describe('remote-lazy-loading App', () => {
  let page: RemoteLazyLoadingPage;

  beforeEach(() => {
    page = new RemoteLazyLoadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
