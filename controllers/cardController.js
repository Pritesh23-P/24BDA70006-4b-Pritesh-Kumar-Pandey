let cards = [];
let currentId = 1;

// Create Card
export const createCard = (req, res) => {
  const { suit, rank, color } = req.body;

  if (!suit || !rank || !color) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newCard = {
    id: currentId++,
    suit,
    rank,
    color,
  };

  cards.push(newCard);
  res.status(201).json(newCard);
};

// Get All Cards
export const getAllCards = (req, res) => {
  res.json(cards);
};

// Get Card by ID
export const getCardById = (req, res) => {
  const id = parseInt(req.params.id);
  const card = cards.find((c) => c.id === id);

  if (!card) {
    return res.status(404).json({ error: "Card not found" });
  }

  res.json(card);
};

// Update Card
export const updateCard = (req, res) => {
  const id = parseInt(req.params.id);
  const card = cards.find((c) => c.id === id);

  if (!card) {
    return res.status(404).json({ error: "Card not found" });
  }

  const { suit, rank, color } = req.body;

  if (suit) card.suit = suit;
  if (rank) card.rank = rank;
  if (color) card.color = color;

  res.json(card);
};

// Delete Card
export const deleteCard = (req, res) => {
  const id = parseInt(req.params.id);
  const index = cards.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Card not found" });
  }

  cards.splice(index, 1);
  res.json({ message: "Card deleted successfully" });
};