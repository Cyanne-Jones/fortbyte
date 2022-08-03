import create from 'zustand';

const useDataStore = create((set) => ({
  newsItems: [],
  storeItems: [],
  userName: '',
  userStats: [],
  setNewsItems: (data) => set(() => { 
    return ({ newsItems: data })
  })
}));

export default useDataStore;