

const initialState = {
  categories: [
    { id: 0, name: "Овощи", color: "#DDBBFF" },
    { id: 1, name: "Фрукты", color: "#FFD88B" },
    { id: 2, name: "Молочка", color: "#87B7FF" },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {

    default: return state;
  }
};
