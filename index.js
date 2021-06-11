// Write your code here
// create class breakfast
// class has food and drink


// create class lunch
// has salad/ soup/ entree


// create class dinner 
// has salad/soup/entree/ _dessert(private property)

class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner {
    constructor(salad, soup, entree, _dessert) {
        this.salad = salad,
        this.soup = soup;
        this.entree = entree;
        this._dessert = _dessert;
    }
}