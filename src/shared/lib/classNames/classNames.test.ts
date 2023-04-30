import { classNames } from './classNames';

describe('classNames', () => {
  test('all is empty', () => {
    expect(classNames()).toBe('');
  });

  test('with cls', () => {
    expect(classNames('class1')).toBe('class1');
  });

  test('with mod', () => {
    expect(classNames('class1', { class2: true, class3: false }))
      .toBe('class1 class2');
  });

  test('with addition', () => {
    expect(classNames('class1', { class2: true, class3: false }, ['class4', 'class5']))
      .toBe('class1 class2 class4 class5');
  });
});
