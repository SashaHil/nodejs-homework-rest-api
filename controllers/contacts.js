const Contact = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

// const getById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.getContactById(contactId);
//   if (!result) {
//     throw new HttpError(404, "Not Found");
//   }
//   res.json(result);
// };
// const add = async (req, res) => {
//   const result = await contacts.addContact(req.body);
//   res.status(201).json(result);
// };

// const deleteById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.removeContact(contactId);
//   if (!result) {
//     throw new HttpError(404, "Not Found");
//   }
//   res.status(200).json({
//     message: "contact deleted",
//   });
// };

// const updateById = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.updateContact(contactId, req.body);
//   if (!result) {
//     throw new HttpError(404, "Not Found");
//   }
//   res.json(result);
// };

module.exports = {
  getAll: ctrlWrapper(getAll),
  //   getById: ctrlWrapper(getById),
  //   add: ctrlWrapper(add),
  //   deleteById: ctrlWrapper(deleteById),
  //   updateById: ctrlWrapper(updateById),
};
