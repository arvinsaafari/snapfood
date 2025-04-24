export interface Comment {
  userId: number;
  userName: string;
  date: string;
  comment: string;
  tags: string[];
  star: number;
  replay?: {
    userId: string;
    comment: string;
  };
}

export interface Foods {
  category: string;
  title: string;
  img: string;
  description: string;
  point: number;
  price: number;
  remaining?: number;
  comments?: Comment[];
  isFoddparty: boolean;
  isPapular: boolean;
}

export interface Discount {
  hasDiscount: boolean;
  percentage: number;
}

export interface Delivery {
  hasDelivery: boolean;
  deliveryFee: number;
}

export interface Rating {
  point: number;
  star: number;
}

export interface Restaurant {
  id: number;
  title: string;
  img: string;
  tags: string[];
  icon: string;
  category: string;
  discount: Discount;
  Addres: string;
  rating: Rating;
  delivery: Delivery;
  woirkingHours: string;
  paymentMethods: string;
  minimumCart: number;
  comments: Comment[];
  foods: Foods[];
}
