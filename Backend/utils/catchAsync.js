// ERROR HANDLING: catch for async errors
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      // console.log('ERROR : ', err);
      next(err);
    });
  };
};
