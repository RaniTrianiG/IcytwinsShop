import AsyncStorage from '@react-native-community/async-storage';

const reqOptions = async () => {
  const userToken = await AsyncStorage.getItem('firstLaunch');
  return {
    auth: {
      username: 'icytwins',
      password: 'da1c25d8-37c8-41b1-afe2-42dd4825bfea'
    },
    headers: {
      'user-token': userToken || null
      // 'access-token': localStorage.getItem('api_key') || null
    }
  };
};

export default reqOptions;
