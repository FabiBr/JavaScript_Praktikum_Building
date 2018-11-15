enum ShopType {
    Food,
    Clothing,
    Tech,
}

interface Shop {
    shopType: ShopType;
    calculateDiscountedPrice(normalPrice:number): number;
}

class DonutShop implements Shop {
    private superSecretIngredient: string;
    public currentDiscount: number;
    public shopType: ShopType;
    constructor(){
        this.superSecretIngredient = "sugar";
        this.currentDiscount = 0.1;
        this.shopType = ShopType.Food;
    }
    calculateDiscountedPrice(normalPrice: number): number{
        return normalPrice * this.currentDiscount;
    }
}

class PCStore implements Shop {
    private rootPassword: string;
    public shopType: ShopType;
    constructor(){
        this.rootPassword = "PASSWORD";
        this.shopType = ShopType.Tech;
    }
    calculateDiscountedPrice(normalPrice: number): number{
        // NO DISCOUNTS!
        return normalPrice;
    }
}