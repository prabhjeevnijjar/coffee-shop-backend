const mongoose = require('mongoose');
const { menuItemCategories } = require('../../../config/index');

const shopSchema = new mongoose.Schema(
  {
    shopName: {
      type: String,
      required: true,
    },
    coordinates: {
      latitude: {
        type: String,
        required: true,
      },
      longitude: {
        type: String,
        required: true,
      },
    },

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
          required: false,
        },
        description: {
          type: String,
          required: false,
        },
        image: {
          type: String,
          required: false,
        },
        price: {
          type: String,
          required: false,
        },
        category: {
          type: String,
          enum: menuItemCategories,
          required: false,
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
