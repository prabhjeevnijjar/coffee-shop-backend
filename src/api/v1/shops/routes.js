const router = require('express').Router();
const controller = require('./controller');

/**
 * @api {post} v1/shops/list Get all shops
 * @apiDescription Get all shops acc to pageinations
 * @apiVersion 1.0.0
 * @apiName getAllShops
 * @apiPermission public
 *
 * @apiQuery  {Number}  page     Page for pagination, 10 items per page

 * @apiSuccess {Object}  user    Fetched all shops
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

router.route('/list').get(controller.getAllShops);

/**
 * @api {post} v1/shops/list-nearest Get all shops nearby user
 * @apiDescription Get all shops near to user
 * @apiVersion 1.0.0
 * @apiName getAllNearestShops
 * @apiPermission public
 *
 * @apiQuery  {Number}  page            Page for pagination, 10 items per page
 * @apiQuery  {Number}  latitude        latitude compulsary
 * @apiQuery  {Number}  longitude       longitude compulsary

 * @apiSuccess {Object}  user    Fetched all shops nearby user 20km
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

router.route('/list-nearest').get(controller.getAllNearestShops);

/**
 * @api {post} v1/shops/list Get menu items of a coffe sho[]
 * @apiDescription Get all menu items
 * @apiVersion 1.0.0
 * @apiName getAllMenuItems
 * @apiPermission public
 *
 * @apiQuery  {Number}  id            Shop Id

 * @apiSuccess {Object}  user    Fetched all menu items of the shop
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 */

router.route('/list-nearest').get(controller.getAllMenuItems);

module.exports = router;
