'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, ChevronDown, CheckCircle2, MessageSquare, Truck } from 'lucide-react';
import { useCart } from '@/components/CartContext';

const WHATSAPP_NUMBER = '923414999998';

const pakistanProvinces = ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Gilgit-Baltistan', 'AJK', 'ICT'];

export default function CheckoutPage() {
  const { items, total, updateQty, removeItem, clearCart } = useCart();
  const [couponOpen, setCouponOpen] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [noteOpen, setNoteOpen] = useState(false);
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    country: 'Pakistan',
    address: '',
    apartment: '',
    city: '',
    province: 'Punjab',
    postcode: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Partial<typeof form>>({});

  function set(field: keyof typeof form, val: string) {
    setForm((f) => ({ ...f, [field]: val }));
    setErrors((e) => ({ ...e, [field]: '' }));
  }

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.email) e.email = 'Email is required';
    if (!form.firstName) e.firstName = 'First name is required';
    if (!form.lastName) e.lastName = 'Last name is required';
    if (!form.address) e.address = 'Street address is required';
    if (!form.city) e.city = 'Town/City is required';
    return e;
  }

  function buildMessage() {
    const itemLines = items
      .map((i) => `• ${i.name} × ${i.qty} = ₨ ${(i.price * i.qty).toLocaleString()}`)
      .join('\n');

    const lines = [
      '🛒 *New Order — WAA Technologies Website*',
      '',
      '*Customer Details:*',
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : '',
      '',
      '*Shipping Address:*',
      form.address,
      form.apartment ? form.apartment : '',
      `${form.city}, ${form.province}${form.postcode ? ' ' + form.postcode : ''}`,
      form.country,
      '',
      '*Order Items:*',
      itemLines,
      '',
      `*Subtotal:* ₨ ${total.toLocaleString()}`,
      `*Shipping:* FREE`,
      `*Total:* ₨ ${total.toLocaleString()}`,
      coupon ? `*Coupon applied:* ${coupon}` : '',
      note ? `\n*Note:* ${note}` : '',
    ].filter((l) => l !== undefined && l !== null);

    return lines.filter((l, i) => !(l === '' && lines[i - 1] === '')).join('\n');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    if (items.length === 0) return;

    const msg = buildMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
    clearCart();
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-black text-slate-900 mb-3">Order Sent!</h1>
        <p className="text-slate-500 max-w-md mb-3">
          Your order details have been sent to our WhatsApp. Our team will confirm your order and arrange delivery shortly.
        </p>
        <p className="text-sm text-slate-400 mb-8">
          WhatsApp: <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-green-700 font-semibold">+92 3414999998</a>
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Link href="/shop" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
            Continue Shopping
          </Link>
          <Link href="/" className="border border-slate-200 text-slate-700 hover:border-green-300 px-6 py-3 rounded-xl font-semibold transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="py-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-2 text-sm">
          <Link href="/" className="text-slate-500 hover:text-green-700 transition-colors">Home</Link>
          <span className="text-slate-300">/</span>
          <Link href="/shop" className="text-slate-500 hover:text-green-700 transition-colors">Shop</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-medium">Checkout</span>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-black text-slate-900 mb-10">Checkout</h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart className="w-16 h-16 text-slate-200 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-700 mb-2">Your cart is empty</h2>
              <p className="text-slate-400 mb-6">Add some products before checking out.</p>
              <Link href="/shop" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                Browse Shop
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-[1fr_380px] gap-10">
                {/* Left column — form */}
                <div className="flex flex-col gap-8">
                  {/* Contact information */}
                  <div>
                    <h2 className="text-lg font-black text-slate-900 mb-1">Contact information</h2>
                    <p className="text-sm text-slate-400 mb-4">You are currently checking out as a guest.</p>
                    <div>
                      <input
                        type="email"
                        placeholder="Email address"
                        value={form.email}
                        onChange={(e) => set('email', e.target.value)}
                        className={`w-full border rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder:text-slate-400 ${errors.email ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Shipping address */}
                  <div>
                    <h2 className="text-lg font-black text-slate-900 mb-4">Shipping address</h2>
                    <div className="flex flex-col gap-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <input
                            type="text"
                            placeholder="First name"
                            value={form.firstName}
                            onChange={(e) => set('firstName', e.target.value)}
                            className={`w-full border rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-slate-400 ${errors.firstName ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                          />
                          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Last name"
                            value={form.lastName}
                            onChange={(e) => set('lastName', e.target.value)}
                            className={`w-full border rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-slate-400 ${errors.lastName ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                          />
                          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                        </div>
                      </div>

                      {/* Country */}
                      <div className="relative">
                        <select
                          value={form.country}
                          onChange={(e) => set('country', e.target.value)}
                          className="w-full border border-slate-300 rounded-lg px-4 py-3 pr-10 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
                        >
                          <option value="Pakistan">Pakistan</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>

                      {/* Street address */}
                      <div>
                        <input
                          type="text"
                          placeholder="Street address"
                          value={form.address}
                          onChange={(e) => set('address', e.target.value)}
                          className={`w-full border rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-slate-400 ${errors.address ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                        />
                        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                      </div>

                      {/* Apartment */}
                      <input
                        type="text"
                        placeholder="+ Add apartment, suite, unit, etc. (optional)"
                        value={form.apartment}
                        onChange={(e) => set('apartment', e.target.value)}
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-slate-400"
                      />

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <input
                            type="text"
                            placeholder="Town / City"
                            value={form.city}
                            onChange={(e) => set('city', e.target.value)}
                            className={`w-full border rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-slate-400 ${errors.city ? 'border-red-400 bg-red-50' : 'border-slate-300'}`}
                          />
                          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                        </div>
                        <div className="relative">
                          <select
                            value={form.province}
                            onChange={(e) => set('province', e.target.value)}
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 pr-10 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
                          >
                            {pakistanProvinces.map((p) => <option key={p} value={p}>{p}</option>)}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Postcode / ZIP (optional)"
                          value={form.postcode}
                          onChange={(e) => set('postcode', e.target.value)}
                          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-slate-400"
                        />
                        <input
                          type="tel"
                          placeholder="Phone (optional)"
                          value={form.phone}
                          onChange={(e) => set('phone', e.target.value)}
                          className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-slate-400"
                        />
                      </div>

                      <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-green-600 rounded border-slate-300 focus:ring-green-500" />
                        Use same address for billing
                      </label>
                    </div>
                  </div>

                  {/* Shipping options */}
                  <div>
                    <h2 className="text-lg font-black text-slate-900 mb-4">Shipping options</h2>
                    <label className="flex items-center justify-between border-2 border-green-600 bg-green-50 rounded-lg px-4 py-3.5 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="shipping" defaultChecked className="w-4 h-4 text-green-600 border-slate-300 focus:ring-green-500" />
                        <div className="flex items-center gap-2">
                          <Truck className="w-4 h-4 text-green-700" />
                          <span className="text-sm font-semibold text-slate-900">Free shipping</span>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-green-700">FREE</span>
                    </label>
                  </div>

                  {/* Payment options */}
                  <div>
                    <h2 className="text-lg font-black text-slate-900 mb-4">Payment options</h2>
                    <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-4">
                      <MessageSquare className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-800">
                        Place your order and our team will contact you via <strong>WhatsApp (+92 3414999998)</strong> to confirm payment and arrange delivery.
                      </p>
                    </div>
                  </div>

                  {/* Add a note */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setNoteOpen((v) => !v)}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      <input type="checkbox" checked={noteOpen} onChange={() => setNoteOpen((v) => !v)} className="w-4 h-4 rounded border-slate-300" />
                      Add a note to your order
                    </button>
                    {noteOpen && (
                      <textarea
                        rows={3}
                        placeholder="Notes about your order, e.g. special delivery instructions"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="mt-3 w-full border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-slate-400 resize-none"
                      />
                    )}
                  </div>

                  {/* Terms */}
                  <p className="text-xs text-slate-400">
                    By proceeding with your purchase you agree to our{' '}
                    <Link href="/privacy-policy" className="underline text-slate-500 hover:text-green-700">Terms and Conditions</Link>{' '}
                    and{' '}
                    <Link href="/privacy-policy" className="underline text-slate-500 hover:text-green-700">Privacy Policy</Link>.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Place Order via WhatsApp
                  </button>
                </div>

                {/* Right column — order summary */}
                <div>
                  <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden sticky top-24">
                    <div className="px-6 py-5 border-b border-slate-200">
                      <h2 className="font-black text-slate-900 text-lg">Order summary</h2>
                    </div>

                    {/* Items */}
                    <div className="px-6 py-5 flex flex-col gap-4">
                      {items.map((item) => (
                        <div key={item.slug} className="flex items-start gap-3">
                          {/* Product image placeholder */}
                          <div className="relative flex-shrink-0">
                            <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center border border-amber-300">
                              <div className="w-6 h-10 bg-gradient-to-b from-amber-400 to-amber-600 rounded-[40%_40%_50%_50%/25%_25%_55%_55%]" />
                            </div>
                            <span className="absolute -top-2 -right-2 w-5 h-5 bg-slate-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                              {item.qty}
                            </span>
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-900 leading-snug line-clamp-2">{item.name}</p>
                            {item.oldPrice && (
                              <p className="text-xs text-slate-400 line-through">₨ {(item.oldPrice * item.qty).toLocaleString()}</p>
                            )}
                          </div>

                          <div className="flex-shrink-0 text-right">
                            <p className="text-sm font-black text-slate-900">₨ {(item.price * item.qty).toLocaleString()}</p>
                            {item.oldPrice && (
                              <p className="text-xs text-green-600 font-semibold">
                                Save ₨ {((item.oldPrice - item.price) * item.qty).toLocaleString()}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}

                      {/* Qty controls */}
                      <div className="border-t border-slate-200 pt-4 flex flex-col gap-2">
                        {items.map((item) => (
                          <div key={item.slug} className="flex items-center justify-between text-xs text-slate-500">
                            <span className="truncate max-w-[120px]">{item.name.split(' ').slice(0, 4).join(' ')}…</span>
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() => updateQty(item.slug, item.qty - 1)}
                                className="w-6 h-6 rounded bg-slate-200 hover:bg-slate-300 font-bold text-slate-700 flex items-center justify-center transition-colors"
                              >−</button>
                              <span className="w-6 text-center font-semibold text-slate-800">{item.qty}</span>
                              <button
                                type="button"
                                onClick={() => updateQty(item.slug, item.qty + 1)}
                                className="w-6 h-6 rounded bg-slate-200 hover:bg-slate-300 font-bold text-slate-700 flex items-center justify-center transition-colors"
                              >+</button>
                              <button
                                type="button"
                                onClick={() => removeItem(item.slug)}
                                className="ml-1 text-red-400 hover:text-red-600 transition-colors text-xs"
                              >✕</button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Coupon */}
                      <div className="border-t border-slate-200 pt-4">
                        <button
                          type="button"
                          onClick={() => setCouponOpen((v) => !v)}
                          className="flex items-center justify-between w-full text-sm font-semibold text-slate-700 hover:text-green-700 transition-colors"
                        >
                          Add coupons
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${couponOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {couponOpen && (
                          <div className="mt-2 flex gap-2">
                            <input
                              type="text"
                              placeholder="Coupon code"
                              value={coupon}
                              onChange={(e) => setCoupon(e.target.value)}
                              className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <button type="button" className="bg-green-700 hover:bg-green-800 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors">
                              Apply
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Totals */}
                      <div className="border-t border-slate-200 pt-4 flex flex-col gap-2">
                        <div className="flex justify-between text-sm text-slate-600">
                          <span>Subtotal</span>
                          <span className="font-semibold">₨ {total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm text-slate-600">
                          <span>Free shipping</span>
                          <span className="font-semibold text-green-600">FREE</span>
                        </div>
                      </div>

                      <div className="border-t-2 border-slate-900 pt-4 flex justify-between items-center">
                        <span className="font-black text-slate-900 text-base">Total</span>
                        <span className="font-black text-slate-900 text-xl">₨ {total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
