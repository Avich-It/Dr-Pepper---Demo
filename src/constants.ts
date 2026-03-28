export interface Flavor {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export const FLAVORS: Flavor[] = [
  {
    id: 'original',
    name: 'Dr Pepper Original',
    description: 'The classic 23 flavors that started it all in 1885.',
    image: 'https://picsum.photos/seed/drpepper-classic/400/600',
    tags: ['Bold', 'Spicy', 'Sweet']
  },
  {
    id: 'zero',
    name: 'Dr Pepper Zero Sugar',
    description: 'All the flavor, none of the sugar. Pure liquid gold.',
    image: 'https://picsum.photos/seed/drpepper-zero/400/600',
    tags: ['Crisp', 'Zero Sugar', 'Bold']
  },
  {
    id: 'cream-soda',
    name: 'Dr Pepper & Cream Soda',
    description: 'A smooth, creamy duet of two iconic flavors.',
    image: 'https://picsum.photos/seed/drpepper-cream/400/600',
    tags: ['Smooth', 'Creamy', 'Sweet']
  },
  {
    id: 'cherry',
    name: 'Dr Pepper Cherry',
    description: 'A smooth blast of cherry flavor for a sweet kick.',
    image: 'https://picsum.photos/seed/drpepper-cherry/400/600',
    tags: ['Fruity', 'Sweet', 'Smooth']
  }
];

export interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string;
}
