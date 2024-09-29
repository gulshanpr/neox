import Image from 'next/image'
import Navbar from '@/components/Navbar'

const cards = [
  { id: 1, name: 'Fire Elemental', image: '/cards/1.png', price: '0.05 ETH' },
  { id: 2, name: 'Water Sprite', image: '/cards/2.png', price: '0.04 ETH' },
  { id: 3, name: 'Earth Golem', image: '/cards/3.png', price: '0.06 ETH' },
  { id: 4, name: 'Air Djinn', image: '/cards/4.png', price: '0.05 ETH' },
  { id: 5, name: 'Lightning Dragon', image: '/cards/5.png', price: '0.08 ETH' },
  { id: 6, name: 'Shadow Assassin', image: '/cards/1.png', price: '0.07 ETH' },
  { id: 7, name: 'Frost Giant', image: '/cards/2.png', price: '0.06 ETH' },
  { id: 8, name: 'Lava Titan', image: '/cards/3.png', price: '0.07 ETH' },
  { id: 9, name: 'Nature Elf', image: '/cards/4.png', price: '0.04 ETH' },
  { id: 10, name: 'Celestial Angel', image: '/cards/5.png', price: '0.09 ETH' },
]

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">NFT Marketplace</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={card.image}
                alt={card.name}
                width={300}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white mb-2">{card.name}</h2>
                <p className="text-gray-400 mb-4">{card.price}</p>
                <button className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}