import create from "zustand";

const useDataStore = create((set) => ({
  newsItems: [],
  storeItems: [],
  userName: "",
  userStats: [],
  setNewsItems: (data) => set(() => { 
    return ({ newsItems: data });
  }),
  setUserStats: (data) => set(() => {
    return ({ userStats: data });
  }),
  setUserName: (data) => set(() => {
    return ({userName: data});
  }),
  toggleFavoritedNewsItem: (id) => set((state) => {
    const freshState = state.newsItems.map(item => {
      if(item.id === id) {
        item.isFavorited = !item.isFavorited;
      }
      return item;
    })
    return({newsItems: freshState});
  })
}));

export default useDataStore;