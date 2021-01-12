const AXIOS = jest.genMockFromModule('axios');

AXIOS.create = jest.fn(() => AXIOS);

export default AXIOS;
