'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { Card } from '@/components/ui/card'

const userCards = [
  { id: 1, name: 'Fire Elemental', image: '/cards/1.png', level: 5, power: 750 },
  { id: 2, name: 'Water Sprite', image: '/cards/2.png', level: 3, power: 550 },
  { id: 3, name: 'Earth Golem', image: '/cards/3.png', level: 4, power: 650 },
  { id: 4, name: 'Air Djinn', image: '/cards/4.png', level: 6, power: 800 },
]

export default function Dashboard() {
  const [selectedCard, setSelectedCard] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1 
          className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Dashboard
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-2xl backdrop-filter backdrop-blur-lg">
              <h2 className="text-3xl font-semibold mb-6 text-purple-300">Your Cards</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
                {userCards.map((card) => (
                  <motion.div 
                    key={card.id}
                    className="relative cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedCard(card)}
                  >
                    <div className="relative w-full h-0 pb-[140%] rounded-xl overflow-hidden gap-50px">
                      <Image
                        src={card.image}
                        alt={card.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-all duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-xl font-semibold text-purple-300">{card.name}</h3>
                        <p className="text-purple-200">Level: {card.level}</p>
                        <p className="text-purple-200">Power: {card.power}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-2xl backdrop-filter backdrop-blur-lg">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Player Stats</h2>
              <div className="space-y-3">
                <p className="text-purple-200">Total Battles: <span className="text-pink-400 font-semibold">42</span></p>
                <p className="text-purple-200">Wins: <span className="text-green-400 font-semibold">28</span></p>
                <p className="text-purple-200">Losses: <span className="text-red-400 font-semibold">14</span></p>
                <p className="text-purple-200">Win Rate: <span className="text-yellow-400 font-semibold">66.67%</span></p>
              </div>
            </Card>

            <Card className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-2xl backdrop-filter backdrop-blur-lg">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Achievements</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-purple-200">
                  <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  First Victory
                </li>
                <li className="flex items-center text-purple-200">
                  <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Card Collector
                </li>
                <li className="flex items-center text-purple-200">
                  <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Battle Master
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>

        <AnimatePresence>
          {selectedCard && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                className="bg-gray-800 bg-opacity-90 p-8 rounded-2xl max-w-lg w-full backdrop-filter backdrop-blur-lg"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-0 pb-[140%] rounded-xl overflow-hidden mb-6">
                  <Image
                    src={selectedCard.image}
                    alt={selectedCard.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-purple-300">{selectedCard.name}</h2>
                <p className="text-xl mb-2 text-purple-200">Level: <span className="text-pink-400">{selectedCard.level}</span></p>
                <p className="text-xl mb-6 text-purple-200">Power: <span className="text-pink-400">{selectedCard.power}</span></p>
                <button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors duration-300 shadow-lg"
                  onClick={() => setSelectedCard(null)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}