const STORAGE = localStorage
const StorageSrvice = {
  setItem: (key, value) => { STORAGE.setItem(key, value) },
  getItem: (key) => { STORAGE.getItem(key) },
  removeItem: (key) => { STORAGE.removeItem(key) }
}

export default StorageSrvice
