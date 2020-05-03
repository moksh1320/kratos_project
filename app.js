var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var clientRouter = require("./routes/client_routes");
var signUpRoutes = require("./routes/signup_routes");
var productRoutes = require("./routes/product_routes");
var trainerRoutes = require("./routes/trainer_routes");
var categoryRoutes = require("./routes/category_routes");
var subcategoryRoutes = require("./routes/subcategory_routes");
var multipleRoutes = require("./routes/multiple_routes");
var emailRoutes = require("./routes/email_routes");
var promoRoutes = require("./routes/promo_routes");
var ServiceRoutes = require("./routes/service_routes");
var otpRoutes = require("./routes/otp_routes");
var imageRoutes = require("./routes/mult_img_routes");
var orderRoutes = require("./routes/order_table_routes");
var orderDetailRoutes = require("./routes/order_detail_routes");
var orderAssignedRoutes = require("./routes/ordersassigned_routes");
var orderNotAssignedRoutes = require("./routes/ordersnotassigned_routes");
var deliveryboyRoutes = require("./routes/deliveryboy_routes");
var deliveryDetailRoutes = require("./routes/delivery_detail_routes");
var servicePurchaseRoutes=require("./routes/service_purchase_routes");
var userHistoryRoutes=require("./routes/user_history_routes");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/client", clientRouter);
app.use("/signup", signUpRoutes);
app.use("/product", productRoutes);
app.use("/trainer", trainerRoutes);
app.use("/service", ServiceRoutes);
app.use("/category", categoryRoutes);
app.use("/subcategory", subcategoryRoutes);
app.use("/multiple", multipleRoutes);
app.use("/emailsender", emailRoutes);
app.use("/promo", promoRoutes);
app.use("/image", imageRoutes);
app.use("/otp", otpRoutes);
app.use("/order", orderRoutes);
app.use("/orderdetail", orderDetailRoutes);
app.use("/ordersassigned", orderAssignedRoutes);
app.use("/ordersnotassigned", orderNotAssignedRoutes);
app.use("/deliveryboy", deliveryboyRoutes);
app.use("/deliverydetail",deliveryDetailRoutes);
app.use("/servicepurchase",servicePurchaseRoutes);
app.use("/userhistory",userHistoryRoutes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
