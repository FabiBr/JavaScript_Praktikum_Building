var ShopType;
(function (ShopType) {
    ShopType[ShopType["Food"] = 0] = "Food";
    ShopType[ShopType["Clothing"] = 1] = "Clothing";
    ShopType[ShopType["Tech"] = 2] = "Tech";
})(ShopType || (ShopType = {}));
var DonutShop = /** @class */ (function () {
    function DonutShop() {
        this.superSecretIngredient = "sugar";
        this.currentDiscount = 0.1;
        this.shopType = ShopType.Food;
    }
    DonutShop.prototype.calculateDiscountedPrice = function (normalPrice) {
        return normalPrice * this.currentDiscount;
    };
    return DonutShop;
}());
var PCStore = /** @class */ (function () {
    function PCStore() {
        this.rootPassword = "PASSWORD";
        this.shopType = ShopType.Tech;
    }
    PCStore.prototype.calculateDiscountedPrice = function (normalPrice) {
        // NO DISCOUNTS!
        return normalPrice;
    };
    return PCStore;
}());
