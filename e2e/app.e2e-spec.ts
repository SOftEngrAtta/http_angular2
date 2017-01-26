import { UserRecordPage } from './app.po';

describe('user-record App', function() {
  let page: UserRecordPage;

  beforeEach(() => {
    page = new UserRecordPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
