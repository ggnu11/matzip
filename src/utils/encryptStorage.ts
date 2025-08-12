import EncryptedStorage from 'react-native-encrypted-storage';

async function setEncryptedStorage<T>(key: string, data: T) {
  await EncryptedStorage.setItem(key, JSON.stringify(data));
}

async function getEncryptedStorage(key: string) {
  const storedData = await EncryptedStorage.getItem(key);

  return storedData ? JSON.parse(storedData) : null;
}

async function removeEncryptedStorage(key: string) {
  const data = await getEncryptedStorage(key);

  if (data) {
    await EncryptedStorage.removeItem(key);
  }
}

export {setEncryptedStorage, getEncryptedStorage, removeEncryptedStorage};
