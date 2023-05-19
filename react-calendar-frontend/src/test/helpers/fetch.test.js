import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch"

describe('Testing with fetch.js', () => {

  let token = '';

  test('fetchWithoutToken must work', async () => {
    const resp = await fetchWithoutToken('auth', { email: 'raywayday@gmail.com', password: '123456' }, 'POST');
    expect( resp instanceof Response ).toBe(true);

    const body = await resp.json();
    expect(body.ok).toBe(true);

    token = body.token;
  });

  test('fetchWithToken must work', async () => {
    localStorage.setItem('token', token);

    const resp = await fetchWithToken('events/617de4092966436043f44f3a', {}, 'DELETE');
    const body = await resp.json();

    expect(body.msg).toBe('There is no event');
  });
  
})
