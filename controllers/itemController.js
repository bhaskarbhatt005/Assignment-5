const itemModel = require('../models/itemModel');

exports.createItem = (req, res) => {
    const newItem = req.body;
    newItem.id = itemModel.getNextId();
    itemModel.addItem(newItem);
    res.status(201).json(newItem);
};

exports.getAllItems = (req, res) => {
    res.json(itemModel.getAllItems());
};

exports.getItemById = (req, res) => {
    const item = itemModel.getItemById(parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
};

exports.updateItem = (req, res) => {
    const updatedItem = itemModel.updateItem(parseInt(req.params.id), req.body);
    if (!updatedItem) return res.status(404).send('Item not found');
    res.json(updatedItem);
};

exports.deleteItem = (req, res) => {
    const success = itemModel.deleteItem(parseInt(req.params.id));
    if (!success) return res.status(404).send('Item not found');
    res.status(204).send();
};
