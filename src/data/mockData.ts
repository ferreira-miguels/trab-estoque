export type Produto = {
  id: string;
  nome: string;
  categoria: string;
  estoque: number;
  preco: number;
};

export const PRODUTOS_MOCK: Produto[] = [
  { id: "1", nome: "Teclado", categoria: "Eletrônicos", estoque: 10, preco: 120 },
  { id: "2", nome: "Mouse", categoria: "Eletrônicos", estoque: 2, preco: 80 },
  { id: "3", nome: "Camiseta", categoria: "Roupas", estoque: 0, preco: 50 },
  { id: "4", nome: "Calça", categoria: "Roupas", estoque: 5, preco: 120 },
  { id: "5", nome: "Caderno", categoria: "Papelaria", estoque: 15, preco: 20 },
  { id: "6", nome: "Caneta", categoria: "Papelaria", estoque: 1, preco: 5 },
  { id: "7", nome: "Monitor", categoria: "Eletrônicos", estoque: 3, preco: 900 },
  { id: "8", nome: "Jaqueta", categoria: "Roupas", estoque: 7, preco: 200 },
];