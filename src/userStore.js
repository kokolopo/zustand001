import axios from "axios";
import { create } from "zustand";

// kita buat hook zustand
// secara penamaan harus diawali use.....
const useUserStore = create((set) => ({
  users: [],
  loading: true,
  error: null,
  responseAPI: null,
  fetchUsers: async () => {
    try {
      // hit and catch data from API
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      set({ users: await response.data });
      set({ loading: false });
    } catch (error) {
      set({ error: error });
    }
  },
  postData: async (data) => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      set({ responseAPI: await res.data });
      set({ loading: false });
      console.log(res);
    } catch (error) {
      set({ error: error });
    }
  },
}));

export default useUserStore;
