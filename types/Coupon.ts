export interface Coupon {
  id: number;
  title: string;
  description: string;
  code: string;
  discount_amount: string;
  valid_from: string;
  valid_until: string;
  category: string;
  is_active: boolean;
  image: string;
  created_at: string;
}
