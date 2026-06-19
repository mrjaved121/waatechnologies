export type CartItem = {
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  qty: number;
};

export function getStoredCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem('waa_cart');
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function persistCart(items: CartItem[]) {
  try {
    localStorage.setItem('waa_cart', JSON.stringify(items));
  } catch {}
}
