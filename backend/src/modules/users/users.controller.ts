import { Router } from "express";
import passport from "passport";

const router = Router();

router.post('/', passport.authenticate('local'), (req, res) => {
    console.log(req.user);
    
    res.json({ ok: true });
});

export default router;