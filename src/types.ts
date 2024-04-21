export interface Subscription {
  id: string;
  name: string;
  price: number;
  status: boolean;
  frequency: {
    period: string;
    interval?: number;
  };
}
