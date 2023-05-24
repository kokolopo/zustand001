import axios from "axios";
import { create } from "zustand";

const useAirlineState = create((set) => ({
  airlines: [],
  loading: true,
  eror: null,

  fecthAirlines: async ({ jwt }) => {
    try {
      const response = await axios.get("http://localhost:5000/airlines", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      set({ airlines: await response.data.data });
      set({ loading: false });
    } catch (error) {
      set({ error: error });
    }
  },
}));

export default useAirlineState;
