import { Router } from "express";
import ImageController from "./image.controller";
import multerOptions from "../../utils/multer.options";

const router = Router();
const imageController = new ImageController();

router.post('/', multerOptions.array('images'), imageController.upload.bind(imageController));

export default router;