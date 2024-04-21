export interface Subscription {
  id: number;
  name: string;
  price: number;
  status: boolean;
  frequency: {
    period: string;
    interval?: number;
  };
}
