import { create } from "zustand";
import { Subscription } from "../types";

interface SubscriptionState {
  subscriptions: Subscription[];
  setSubscriptions: (subscriptions: Subscription[]) => void;
  addSubscription: (subscription: Subscription) => void;
  removeSubscription: (subscriptionId: string) => void;
}

export const useSubscription = create<SubscriptionState>((set) => ({
  subscriptions: [],

  setSubscriptions: (subscriptions: Subscription[]) => set({ subscriptions }),

  addSubscription: (subscription: Subscription) =>
    set((state) => {
      const updatedSubscriptions = [...state.subscriptions, subscription];
      localStorage.setItem(
        "subscriptions",
        JSON.stringify(updatedSubscriptions)
      );
      return { subscriptions: updatedSubscriptions };
    }),

  removeSubscription: (subscriptionId: string) =>
    set((state) => {
      const updatedSubscriptions = state.subscriptions.filter(
        (sub) => sub.id !== subscriptionId
      );
      localStorage.setItem(
        "subscriptions",
        JSON.stringify(updatedSubscriptions)
      );
      return { subscriptions: updatedSubscriptions };
    }),
}));
