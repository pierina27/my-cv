import { MyCvPage } from './app.po';

describe('my-cv App', () => {
  let page: MyCvPage;

  beforeEach(() => {
    page = new MyCvPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
