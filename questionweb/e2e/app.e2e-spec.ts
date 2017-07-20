import { QuestionwebPage } from './app.po';

describe('questionweb App', () => {
  let page: QuestionwebPage;

  beforeEach(() => {
    page = new QuestionwebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
