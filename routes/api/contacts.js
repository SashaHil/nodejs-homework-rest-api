const express = require("express");
const Joi = require("joi");

const contacts = require("../../controllers/contacts");

const { HttpError } = require("../../helpers");

const router = express.Router();

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

const validateData = (schema, errorMessage) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(new HttpError(400, errorMessage));
    } else {
      next();
    }
  };
};

router.get("/", async (req, res, next) => {
  try {
    const result = contacts.listContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// router.get("/:contactId", async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await contacts.getContactById(contactId);
//     if (!result) {
//       throw new HttpError(404, "Not Found");
//     }
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// });

// router.post(
//   "/",
//   validateData(addSchema, "missing required name field"),
//   async (req, res, next) => {
//     try {
//       const result = await contacts.addContact(req.body);
//       res.status(201).json(result);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.delete("/:contactId", async (req, res, next) => {
//   try {
//     const { contactId } = req.params;
//     const result = await contacts.removeContact(contactId);
//     if (!result) {
//       throw new HttpError(404, "Not Found");
//     }
//     res.status(200).json({
//       message: "contact deleted",
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// router.put(
//   "/:contactId",
//   validateData(addSchema, "missing fields"),
//   async (req, res, next) => {
//     try {
//       const { contactId } = req.params;
//       const result = await contacts.updateContact(contactId, req.body);
//       if (!result) {
//         throw new HttpError(404, "Not Found");
//       }
//       res.json(result);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

module.exports = router;
