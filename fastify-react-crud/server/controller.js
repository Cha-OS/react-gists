const { MenuItem } = require("./models/menuItems");

// It reads all the items present in database
const fetchItems = async (req, reply) => {
  try {
    const menuItems = await MenuItem.find();
    return menuItems;
  } catch (err) {
    console.log(err);
  }
};

// It adds an item to database
const addItem = async (req, reply) => {
  try {
    const NewItem = new MenuItem({ ...req.body });
    return NewItem.save();
  } catch (err) {
    console.log(err);
  }
};

// It updates the item present in database
const updateItem = async (req, reply) => {
  try {
    const { id } = req.params;
    const { item } = req.body;
    const updatedItem = await MenuItem.findOneAndUpdate({ id }, item, {
      new: true
    });
    return updatedItem;
  } catch (err) {
    console.log(err);
  }
};

// It removes item from database
const deleteItem = async (req, reply) => {
  try {
    const { id } = req.params;
    const menuItem = await MenuItem.findOneAndDelete({ id });
    return menuItem;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { fetchItems, addItem, updateItem, deleteItem };
