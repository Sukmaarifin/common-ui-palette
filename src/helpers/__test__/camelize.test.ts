import { camelize } from '../camelize';

describe('Test helper: camelize', () => {
  test('return string in camelCase format', () => {
    expect(camelize('Lorem-ipsum color')).toEqual('loremIpsumColor');
  });
});
