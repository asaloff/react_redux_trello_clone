const { User } = require('../models');

async function findUserByToken(token, res, next) {
  try {
    const user = await User.find({ where: { token } });
    if (!user) {
      res.status(404).json({ status: 404, message: 'User not found' });
      next();
    } else {
      return user;
    }
  } catch (error) {
    next(error);
  }
}

async function checkForListTitle(title, res, next) {
  if (!title) {
    res.status(400).json({ status: 400, message: 'No list title given' });
    next();
  }
}

async function checkForList(list, res, next) {
  if (!list) {
    res.status(404).json({ status: 404, message: 'List not found' });
    next();
  }
}

async function validateParamId(req, res, next) {
  if (!parseInt(req.params.id)) {
    res.status(400).json({ status: 400, message: 'Invalid ID param' });
  }
  next();
}

module.exports = {
  findUserByToken,
  checkForListTitle,
  checkForList,
  validateParamId
};