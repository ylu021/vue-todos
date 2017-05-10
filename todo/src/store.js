const STORAGE_KEY = 'todo'
export default {
  fetch: () => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY))
  },
  save: (list) => (localStorage.setItem(STORAGE_KEY, JSON.stringify(list)))
}
