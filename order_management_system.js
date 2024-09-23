// Task 1: Create an Inventory Array of Product Objects
const inventory = [
    {name: 'Latte', price: 10, quantity: 100},
    {name: 'Capuccino', price: 12, quantity: 120},
    {name: 'Espresso', price: 7, quantity: 200},
    {name: 'Americano', price: 10, quantity: 115},
]; 

//Task 2: Create an Orders Array of Order Objects
const orders = []; //empty array

// Task 3: Create a Function to Place an Order
//checking for stock of ordered items

function placeOrder(_customerName, itemsOrdered) { 
        const product = inventory.find (product => product.name === item.name); //finding product in inventory
         itemsOrdered.forEach(item => {

        if (!product) {
            return (`Error ${item.name} is not available`); // if not found in inventory
        }

        else if (product.quantity < item.quantity) {
            return(`Error ${item.name} is out of stock`) // if out of stock
        }

        else 
        {product.quantity -= item.quantity;
            return product.quantity; // if found, takes the order minus the amount in stock
        }
    })


// Adding to orders array with pending status
orders.push({
    _customerName: _customerName,
    items: itemsOrdered,
    status: 'Pending'
});
console.log (`Order placed for ${_customerName}`);

// Example
placeOrder( 'Katie Jones', [{name: 'Latte', quantity: 1}]);
placeOrder('Sarah Miller', [{ name: 'Americano', quantity: 4}]);
}

//Task 4: Create a Function to Calculate Total for an Order
function calculateOrderTotal (order){
    let total = 0;
    for (let i=0; i < order.items.length; i++){
        let itemOrdered = order.items[i];

        for (let i = 0; i < inventory.length; i++){
            let inventoryItem = inventory[i];

            if (inventoryItem.name === itemOrdered.name){
                total += inventoryItem.price * itemOrdered.quantity;
            }
        }

    }
    return total;
}
let total = calculateOrderTotal (orders[0], inventory);
console.log ("The total cost is: $" + total); //calculates order total

// Task 5: Create a Function to Mark an Order as Completed

function completeOrder (customerName){
    const order = orders.find (ord => ord.customerName === customerName);
    if (order) {
        order.status = 'Completed';
        console.log (`Order has been completed for ${customerName}`);
    } else {
        console.log (`Error: No order for ${customerName}`);
    } // logs if an order has been completed or not 
}
completeOrder ('Katie Jones');

//Task 6: Create a Function to Check Pending Orders
function checkingPendingOrders()
{ 
    orders.forEach(order => {
        if (order.status === 'Pending') {
            console.log (`Pending Order for ${customerName}`);
        }
    });
} checkingPendingOrders(); //checking pending orders