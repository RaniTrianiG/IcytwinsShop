jest.mock('react-native-device-info', () => {
  return {
    getModel: jest.fn(),
    getDeviceId: jest.fn(),
    getDeviceName: jest.fn(),
  };
});
