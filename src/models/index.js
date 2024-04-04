const Booking = require("./Booking");
const Cities = require("./Cities");
const Hotel = require("./Hotel");
const Image = require("./Image");
const Review = require("./Review");
const User = require("./User");

Hotel.belongsTo(Cities);
Cities.hasMany(Hotel);

Image.belongsTo(Hotel);
Hotel.hasMany(Image);

Booking.belongsTo(User);
User.hasMany(Booking);

Booking.belongsTo(Hotel);
Hotel.hasMany(Booking);

Review.belongsTo(Hotel);
Hotel.hasMany(Review);

Review.belongsTo(User);
User.hasMany(Review);

