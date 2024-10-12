import React, { useState } from 'react';
import { Menu, ShoppingCart, ChefHat } from 'lucide-react';
import CustomerOrder from './components/CustomerOrder';
import KitchenView from './components/KitchenView';

type View = 'customer' | 'kitchen';

function App() {
  const [view, setView] = useState<View>('customer');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <Menu className="mr-2" /> Restaurant App
          </h1>
          <button
            onClick={() => setView(view === 'customer' ? 'kitchen' : 'customer')}
            className="bg-white text-blue-600 px-4 py-2 rounded-full flex items-center"
          >
            {view === 'customer' ? (
              <>
                <ChefHat className="mr-2" /> Vue Cuisine
              </>
            ) : (
              <>
                <ShoppingCart className="mr-2" /> Vue Client
              </>
            )}
          </button>
        </div>
      </header>
      <main className="container mx-auto mt-8 p-4">
        {view === 'customer' ? <CustomerOrder /> : <KitchenView />}
      </main>
    </div>
  );
}

export default App;