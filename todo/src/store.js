// const STORAGE_KEY = 'todo'
export default {
  fetch: (key) => {
    return JSON.parse(localStorage.getItem(key))
  },
  save: (key, list) => (localStorage.setItem(key, JSON.stringify(list)))
}
