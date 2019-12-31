import { AsyncFirebasePipe } from './async-firebase.pipe';

describe('AsyncFirebasePipe', () => {
  it('create an instance', () => {
    const pipe = new AsyncFirebasePipe();
    expect(pipe).toBeTruthy();
  });
});
