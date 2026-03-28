import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Store, Search } from 'lucide-react';

export const StoreLocator = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [stores, setStores] = useState<any[]>([]);

  const mockStores = [
    { name: 'Target Supercenter', distance: '0.8 miles', address: '123 Retail Ave, City' },
    { name: 'Walmart Neighborhood Market', distance: '1.2 miles', address: '456 Grocer Blvd, City' },
    { name: '7-Eleven', distance: '1.5 miles', address: '789 Corner St, City' },
  ];

  const handleLocate = () => {
    setLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setStores(mockStores);
        setLoading(false);
      }, () => {
        setLoading(false);
        setStores(mockStores); // Fallback to mock stores even if denied for demo
      });
    } else {
      setLoading(false);
      setStores(mockStores);
    }
  };

  return (
    <section id="where-to-buy" className="py-24 px-6 bg-brand-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-6xl">Where To Buy</h2>
          <p className="text-xl opacity-60">Find your nearest 23-flavor fix.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-dark rounded-3xl p-8 space-y-6">
              <h3 className="text-2xl">Find Nearby</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Zip Code"
                  className="w-full bg-brand-burgundy/5 border border-brand-burgundy/10 rounded-2xl p-4 pl-12 focus:outline-none focus:ring-2 focus:ring-brand-burgundy/20"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40" />
              </div>
              <button
                onClick={handleLocate}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-brand-burgundy text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "Locating..." : <><MapPin className="w-5 h-5" /> Use My Location</>}
              </button>
            </div>

            <div className="glass-dark rounded-3xl p-8">
              <h3 className="text-xl mb-4">Online Retailers</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Amazon', 'Walmart', 'Target', 'Instacart'].map(retailer => (
                  <button key={retailer} className="p-3 rounded-xl border border-brand-burgundy/10 hover:bg-brand-burgundy/5 transition-colors text-sm font-bold">
                    {retailer}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass-card rounded-[40px] h-full min-h-[500px] overflow-hidden relative border-brand-burgundy/5">
              {/* Mock Map Background */}
              <div className="absolute inset-0 bg-brand-burgundy/5 flex items-center justify-center">
                <div className="text-center space-y-4 opacity-20">
                  <Navigation className="w-24 h-24 mx-auto animate-pulse" />
                  <p className="text-2xl font-bold italic">Interactive Map View</p>
                </div>
              </div>

              {/* Store List Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {stores.map((store, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="min-w-[300px] glass-card p-6 rounded-3xl border-white/40 shadow-xl"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold">{store.name}</h4>
                      <span className="text-xs font-bold bg-brand-burgundy/10 px-2 py-1 rounded-full">{store.distance}</span>
                    </div>
                    <p className="text-sm opacity-60 mb-4">{store.address}</p>
                    <button className="w-full py-2 rounded-xl bg-brand-burgundy text-white text-sm font-bold">
                      Get Directions
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
