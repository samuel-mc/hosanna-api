const Email = require('../models/Email');

const postEmail = async (req, res) => {
    const { email } = req.body;
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(201).json({ message: 'Email created successfully' });
}

const getEmails = async (req, res) => {
    const emails =  await Email.find({ deleted: false });
    res.status(200).json(emails);
}

const deleteEmail = (req, res) => {
    const { email } = req.params;
    Email.findOneAndUpdate({ email }, { deleted: true }, (err, email) => {
        if (err) {
            res.status(500).json({ message: 'Error deleting email' });
        }
        res.status(200).json({ message: 'Email deleted successfully' });
    });
}


module.exports = {
    postEmail,
    getEmails,
    deleteEmail
}
