import { AngularTodoTutorialPage } from './app.po';

describe('angular-todo-tutorial App', () => {
  let page: AngularTodoTutorialPage;

  beforeEach(() => {
    page = new AngularTodoTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
