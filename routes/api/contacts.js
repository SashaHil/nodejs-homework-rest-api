const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidtId, authenticate } = require("../../middlewars");

const { schemas } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidtId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", authenticate, isValidtId, ctrl.deleteById);

router.put(
  "/:contactId",
  authenticate,
  isValidtId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidtId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
