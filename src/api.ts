import type { Products } from 'types/types'

export const DATA: Products[] = [
  {
    id: 1,
    title: "Capybara T shirt",
    price: 10,
    description: "Capybara T shirt",
    image: "a",
    category: "a",
    rating: { rate: 0, count: 0 },
  },
  {
    id: 2,
    title: "Highland Cow keyring",
    description: "Highland Cow keyring",
    image: "a",
    category: "a",
    rating: { rate: 0, count: 0 },
    price: 20
  },
  {
    id: 3,
    title: "Doge poster",
    description: "Doge poster",
    image: "a",
    category: "a",
    rating: { rate: 0, count: 0 },
    price: 30
  }
];

export const FORM_DATA = { description: "", price: "", quantity: "" };
