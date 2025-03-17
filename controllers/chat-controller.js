const { Chat } = require("../models");

class ChatController {
    static async findAll(req, res) {
        try {
            const chats = await Chat.findAll();
            res.status(200).json(chats);
        } catch (error) {
            res.status(500).json({ message: "Tidak ada chat"});
        }
    }

    static async createChat(req, res) {
        const { name, message, is_attending } = req.body;
        try {
            if (!name || !message) {
                return res.status(400).json({ message: "Nama dan pesan harus diisi" });
            }
            const chat = await Chat.create({ name, message, is_attending });
            res.status(201).json({chat});
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Gagal membuat chat", error: error.message });
        }
    }
}

module.exports = ChatController;