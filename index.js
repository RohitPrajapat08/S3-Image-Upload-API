const express = require('express');
const upload = require('./upload');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint to upload images
app.post('/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    res.json({
      success: true,
      message: 'File uploaded successfully',
      fileUrl: req.file.location,
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'File upload failed',
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
