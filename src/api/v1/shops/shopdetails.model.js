const mongoose = require('mongoose');
const { menuItemCategories } = require('../../../config/index');

const shopSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true,
    },
    coordinates: [
      {
        latitude: String,
        longitude: String,
      },
    ],
    reviewCount: {
      type: String,
      required: false,
    },
    starRating: {
      type: String,
      required: false,
    },
    images: [
      {
        type: String,
      },
    ],
    menuItems: [
      {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        price: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          enum: menuItemCategories,
          required: true,
        },
      },
    ],
    isVisible: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Shops', shopSchema);
