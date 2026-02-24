import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { supabase } from "./supabaseClient.js";
import { upload } from "./middlewares/upload.js";

dotenv.config();
const TABLE_NAME = "videos";
const STORAGE_BUCKET = "videoss";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.get("/test-supabase", async (req, res) => {
  const { data, error } = await supabase.from(TABLE_NAME).select("*");

  if (error) return res.json(error);

  res.json(data);
});

app.post("/upload-video", upload.single("video"), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No se envio ningun archivo" });
    }

    const ext = path.extname(file.originalname || "").toLowerCase() || ".mp4";
    const baseName = path.basename(file.originalname || "video", ext);
    const safeBaseName = baseName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9_-]/g, "_")
      .replace(/_+/g, "_")
      .replace(/^_+|_+$/g, "")
      .toLowerCase();

    const fileName = `${Date.now()}-${safeBaseName || "video"}${ext}`;

    const { error } = await supabase.storage.from(STORAGE_BUCKET).upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

    if (error) throw error;

    const { data: publicUrl } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(fileName);

    await supabase.from(TABLE_NAME).insert([
      {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        url: publicUrl.publicUrl,
      },
    ]);

    res.json({ message: "Video subido" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(4000, () => console.log("Server corriendo en puerto 4000"));
