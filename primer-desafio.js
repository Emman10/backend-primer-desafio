class ProductManager{
    constructor(){
        this.products = []
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {title, description, price, thumbnail, code, stock}
        //validar que esten todos los datos
        if (!title || !!description || !price || !thumbnail || !code || !stock) {
            return console.log("Faltan datos")
        }
        //validar que no se repita title
        this.products.push(product)
    }
}

const manager = new ProductManager()
manager.addProduct("Alfajor", "Dulce de leche", 200, 50)
console.log(manager.products)