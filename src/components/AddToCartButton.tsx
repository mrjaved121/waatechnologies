'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart, Check, Zap } from 'lucide-react';
import { useCart } from '@/components/CartContext';

type Props = {
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  className?: string;
  showBuyNow?: boolean;
};

export default function AddToCartButton({ slug, name, price, oldPrice, className = '', showBuyNow = true }: Props) {
  const { addItem } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem({ slug, name, price, oldPrice });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  function handleBuyNow() {
    addItem({ slug, name, price, oldPrice });
    router.push('/checkout');
  }

  if (!showBuyNow) {
    return (
      <button
        onClick={handleAdd}
        className={`w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-green-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors ${className}`}
      >
        {added ? <><Check className="w-3.5 h-3.5" /> Added</> : <><ShoppingCart className="w-3.5 h-3.5" /> Add to Cart</>}
      </button>
    );
  }

  return (
    <div className={`flex gap-3 mb-6 ${className}`}>
      <button
        onClick={handleAdd}
        className="flex-1 flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white py-3.5 rounded-xl font-bold text-base transition-all shadow-md hover:shadow-lg"
      >
        {added ? (
          <><Check className="w-5 h-5" /> Added to Cart!</>
        ) : (
          <><ShoppingCart className="w-5 h-5" /> Add to Cart</>
        )}
      </button>
      <button
        onClick={handleBuyNow}
        className="flex items-center gap-2 border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-5 py-3.5 rounded-xl font-bold transition-all"
      >
        <Zap className="w-5 h-5" /> Buy Now
      </button>
    </div>
  );
}
