const Document = require("../models/document");

const uploadDocument = async (req, res) => {
  try {
    const document = await Document.create({
      fileName: req.file.filename,
      filePath: req.file.path,
      uploadedBy: req.user.id,
    });

    res.status(201).json({
      message: "Document uploaded successfully",
      document,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  uploadDocument,
};