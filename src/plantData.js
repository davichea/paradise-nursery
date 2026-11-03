// At least six unique plants, organized into three categories.
export const plants = [
  { id: 'monstera', name: 'Monstera Deliciosa', category: 'Tropical Plants', price: 28, image: './images/monstera.svg', description: 'Iconic split leaves that bring tropical character indoors.' },
  { id: 'bird-paradise', name: 'Bird of Paradise', category: 'Tropical Plants', price: 36, image: './images/bird-paradise.svg', description: 'Tall, sculptural foliage for bright living spaces.' },
  { id: 'snake-plant', name: 'Snake Plant', category: 'Low-Maintenance Plants', price: 22, image: './images/snake-plant.svg', description: 'Architectural upright leaves and easy everyday care.' },
  { id: 'zz-plant', name: 'ZZ Plant', category: 'Low-Maintenance Plants', price: 25, image: './images/zz-plant.svg', description: 'Glossy green leaves that thrive with minimal attention.' },
  { id: 'peace-lily', name: 'Peace Lily', category: 'Flowering Plants', price: 24, image: './images/peace-lily.svg', description: 'Graceful white blooms and lush deep-green leaves.' },
  { id: 'anthurium', name: 'Anthurium', category: 'Flowering Plants', price: 30, image: './images/anthurium.svg', description: 'Bright heart-shaped blooms for a pop of color.' },
];

export const categories = [...new Set(plants.map((plant) => plant.category))];
