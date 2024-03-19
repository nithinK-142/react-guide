import { create } from "zustand";
import { produce } from "immer";

interface AppState {
  user: {
    id: string;
    friends: string[];
    profile: {
      name: string;
      email: string;
      address: {
        street: string;
        city: string;
        zipCode: string;
      };
    };
  };
}

const initialState: AppState = {
  user: {
    id: "user123",
    friends: ["jack", "jessica", "colin", "paulo"],
    profile: {
      name: "John Doe",
      email: "john.doe@example.com",
      address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345",
      },
    },
  },
};

// before immer
export const useStoreBefore = create((set) => ({
  ...initialState,
  updateAddressStreet: (street: string) =>
    set((state: AppState) => ({
      user: {
        ...state.user,
        profile: {
          ...state.user.profile,
          address: {
            ...state.user.profile.address,
            street: street,
          },
        },
      },
    })),
}));

// after immer
export const useStoreAfter = create((set) => ({
  ...initialState,
  updateAddressStreet: (street: string) =>
    set(
      produce((state: AppState) => {
        state.user.profile.address.street = street;
      })
    ),
}));
