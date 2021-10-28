import { JSDOM } from 'jsdom';

describe('baby steps timer', () => {
  let dom: JSDOM;

  beforeEach(async () => {
    dom = await JSDOM.fromFile('src/index.html', {
      resources: 'usable',
      runScripts: 'dangerously',
    });
    await wait(100);
  });
  afterEach(async () => {
    dom.window.close();
  })

  it('renders', async () => {
    expect(dom.serialize()).toBe(`<!DOCTYPE html><html><head></head>
  <body><div style=\"border: 3px solid #555555; background: #ffffff; margin: 0; padding: 0;\"><h1 style=\"text-align: center; font-size: 30px; color: #333333;\">02:00</h1><div style=\"text-align: center\"><a style=\"color: #555555;\" href=\"javascript:command('start');\">Start</a> <a style=\"color: #555555;\" href=\"javascript:command('quit');\">Quit</a> </div></div></body></html>`);
  });
});

function wait(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}
