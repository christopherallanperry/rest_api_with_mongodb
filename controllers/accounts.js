const Account = require('../models/account');

function accountsCreate(req, res) {
  Account.create(req.body, (err, account) => {
    if (err) return res.status(500).json({ message: '500 server error - contact the server administrator.' });
    if (!account) return res.status(500).json({ success: false, message: 'Please send the correct information to create an account.' });
    return res.status(201).json(account);
  });
}

function accountsIndex(req, res) {
  Account.find((err, accounts) => {
    if(err) return res.status(500).json({ message: '500 server error - contact the server administrator.' });
    if (!accounts) return res.status(500).json({ success: false, message: "No accounts found" });
    return res.status(200).json(accounts);
  });
}

function accountsUpdate(req, res){
  Account.findByIdAndUpdate(req.params.id, req.body, (err, account) => {
    if (err) return res.status(500).json({ message: '500 server error - contact the server administrator.' });
    if (!account) return res.status(404).json({ message: 'Cannot update - Account not found' });
    return res.status(200).json(account);
  });
}

function accountsDelete(req, res){
  Account.findByIdAndRemove(req.params.id, (err, account) => {
    if (err) return res.status(500).json({ message: '500 server error - contact the server administrator.' });
    if (!account) return res.status(404).json({ message: 'Cannot delete - Account not found' });
    return res.sendStatus(204);
  });
}

module.exports = {
  index:  accountsIndex,
  create: accountsCreate,
  update: accountsUpdate,
  delete: accountsDelete
};
