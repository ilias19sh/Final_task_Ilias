import React, { useState } from 'react';
import ProductGallery from './component/ProductGallery';
import ShoppingCart from './component/ShoppingCart';
import './App.css'

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const products = [
    {
      id: 1,
      name: 'Iphone 16 Pro',
      price: '1289€',
      description: 'Un smartphone puissant et élégant.',
      image1: 'https://media3.allzone.es/3576009-large_default/iphone-16-pro-256gb-negro.jpg',
      image2: 'https://media3.allzone.es/3576008-large_default/iphone-16-pro-256gb-negro.jpg',
    },
    {
      id: 2,
      name: 'MacBook Pro',
      price: '899€',
      description: 'Parfait pour le travail et le divertissement.',
      image1: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134238941?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402',
      image2: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134238942?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402',
    },
    {
      id: 3,
      name: 'AirPods Max',
      price: '199€',
      description: 'Un son immersif de haute qualité.',
      image1: 'https://thumb.pccomponentes.com/w-530-530/articles/41/414772/1332-apple-airpods-max-plata.jpg',
      image2: 'https://thumb.pccomponentes.com/w-530-530/articles/41/414772/2144-apple-airpods-max-plata-comprar.jpg',
    },
    {
      id: 4,
      name: 'Apple Watch',
      price: '129€',
      description: 'Gardez le contrôle de votre santé.',
      image1: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_144898462?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402',
      image2: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_144898463?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402',
    },
  ];

  return (
    <div className="app">
      <h1>E-commerce App</h1>
      <ProductGallery products={products} addToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
};

export default App;
