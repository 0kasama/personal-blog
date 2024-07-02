const router = require("express").Router();
const postController = require("../controllers/postController");
const { authentication, authorization } = require("../middlewares/auth");

router.get("/", postController.findAll);
router.get("/:id", postController.findOne);

router.use(authentication, authorization);
router.post("/", postController.create);
router.put("/:id", postController.update);
router.delete("/:id", postController.destroy);

module.exports = router;
