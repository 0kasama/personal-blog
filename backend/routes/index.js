const router = require("express").Router();
const { authentication, authorization } = require("../middlewares/auth");

const authRoute = require("./authRoute");
const userRoute = require("./userRoute");
const postRoute = require("./postRoute");

router.use("/api/auth", authRoute);
router.use("/api/post", postRoute);

router.use(authentication, authorization);
router.use("/api/user", userRoute);

module.exports = router;
