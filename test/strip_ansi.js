const pattern = [
  '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)',
  '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
].join('|');

const stripAnsiRegexp = new RegExp(pattern, 'g');

export function stripAnsi(input) {
  return input.replace(stripAnsiRegexp, '');
}
