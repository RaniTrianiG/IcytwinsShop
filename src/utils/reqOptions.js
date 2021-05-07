import AsyncStorage from '@react-native-community/async-storage';

const reqOptions = async () => {
  const userToken = await AsyncStorage.getItem('user-token');

  return {
    auth: {
      username: 'icytwins',
      password: 'da1c25d8-37c8-41b1-afe2-42dd4825bfea'
    },
    headers: {
      Authorization: userToken ? `Bearer ${userToken}` : null,
      'Content-Type': 'application/json',
      Accept: 'application/json'
      // 'access-token': localStorage.getItem('api_key') || null
    }
  };
};

export default reqOptions;
