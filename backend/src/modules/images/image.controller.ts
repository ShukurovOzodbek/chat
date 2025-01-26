import { Request, Response } from "express";
import path from "path";
import sharp from "sharp";
import fs from "fs";
import Image from "./image.model";

class ImageController {
    async upload(req: Request, res: Response) {
        const files = req.files as Express.Multer.File[];

        if (!files) {
            return res.status(400).json({ message: "At least one image is required" });
        }

        try {
            const imagePromises = files.map(file => this.saveFile(file).then(image => Image.create(image)));
            const createdImages = await Promise.all(imagePromises);
            return res.status(201).json(createdImages);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    private async saveFile(file: Express.Multer.File) {
        const UPLOAD_DIR = path.join(__dirname, process.env.UPLOAD_PATH);

        if (!fs.existsSync(UPLOAD_DIR)) {
            fs.mkdirSync(UPLOAD_DIR);
        }

        const filename = `${Array(64)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join("")}.webp`;

        const filePath = `${UPLOAD_DIR}/${filename}`;

        const webpBuffer = await sharp(file.buffer)
            .webp({ quality: 80 })
            .toBuffer();

        fs.writeFileSync(filePath, webpBuffer);

        return {
            path: filePath,
            url: `${process.env.IMAGE_URL}/${filename}`,
            size: webpBuffer.length,
        };
    }
}

export default ImageController;