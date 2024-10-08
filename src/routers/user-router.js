import { Router } from "express";
import {
    store,
    index,
    show,
    update,
    destroy,
    signup,
    login,
} from "../controllers/user-controllers.js";

import check_token from "../middleware/check_token.js";
import check_role from "../middleware/check_role.js"
import via_cep from "../middleware/via_cep.js"

const router = Router();

router.post("/", check_token, via_cep, check_role(["ADM", "USU"]), store);
router.get("/", check_token, check_role(["ADM", "USU"]), index);
router.get("/:id", check_token, check_role(["ADM", "USU"]), show);
router.put("/:id", check_token, check_role(["ADM", "USU"]), update);
router.delete("/:id", check_token, check_role(["ADM", "USU"]), destroy);

router.post("/signup", signup);
router.post("/login", login);

export default router;