exports.allAccess = (req, res) => {
   res.status(200).send("Konten Public.");
};

exports.userBoard = (req, res) => {
   res.status(200).send("Konten Pembaca.");
};

exports.adminBoard = (req, res) => {
   res.status(200).send("Konten Penulis.");
};

exports.moderatorBoard = (req, res) => {
   res.status(200).send("Konten Moderator.");
};