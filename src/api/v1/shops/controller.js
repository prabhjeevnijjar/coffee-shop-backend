const httpStatus = require('http-status');
const Shops = require('./shopdetails.model');
const { success, error } = require('../../../helper/response');

exports.getAllShops = () => {
  console.log('hello world');
};

exports.getAllNearestShops = () => {
  console.log('hello world');
};

exports.getAllMenuItems = () => {
  console.log('hello world');
};

/**
 * Creates a new shop if shop name already does not exists
 * @public
 */
exports.addNewShop = async (req, res, next) => {
  try {
    const { shopName, coordinates, images, menuItems, isVisible } = req.body;
    // We should add validations here for each items, since this is dummy data I am not doing any validations
    const isShopExists = await Shops.findOne({ shopName });

    if (isShopExists) {
      res.status(httpStatus.CONFLICT).json(
        error({
          message: 'Shop name already taken. Please use new shop name.',
          error: true,
          code: httpStatus.CONFLICT,
        })
      );
      throw new Error({
        message: 'Email address is already exists.',
        status: httpStatus.CONFLICT,
      });
    }

    await new Shops({
      shopName,
      coordinates,
      images,
      menuItems,
      isVisible,
    }).save();

    res.status(httpStatus.CREATED).json(
      success({
        message: 'New shop added',
        error: false,
        code: httpStatus.CREATED,
        results: {},
      })
    );
  } catch (error) {
    return next(error);
  }
};
