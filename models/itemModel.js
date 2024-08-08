let items = [];
let nextId = 1;

const getNextId = () => nextId++;

const addItem = (item) => {
    items.push(item);
};

const getAllItems = () => items;

const getItemById = (id) => items.find(item => item.id === id);

const updateItem = (id, updatedData) => {
    const index = items.findIndex(item => item.id === id);
    if (index === -1) return null;
    items[index] = { ...items[index], ...updatedData };
    return items[index];
};

const deleteItem = (id) => {
    const index = items.findIndex(item => item.id === id);
    if (index === -1) return false;
    items.splice(index, 1);
    return true;
};

module.exports = {
    getNextId,
    addItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem
};
