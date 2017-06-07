import { MyNewProjectPage } from './app.po';

describe('my-new-project App', () => {
  let page: MyNewProjectPage;

  beforeEach(() => {
    page = new MyNewProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
