import app from './app'
import createProduct from './endpoints/createProduct'
import createTiket from './endpoints/createTicket'
import createUser from './endpoints/createUser'
import getAllProducts from './endpoints/getAllProducts'
import getAllPurchase from './endpoints/getAllPurchase'
import getAllTickets from './endpoints/getAllTickets'
import getAllUsers from './endpoints/getAllUsers'
import getPuchasesByUser from './endpoints/getPuchasesByUser'
import postPurchase from './endpoints/postPurchase'

app.get("/allusers", getAllUsers)
app.get("/allproducts", getAllProducts)
app.get("/alltickets", getAllTickets)
app.get("/allpurchase", getAllPurchase)
app.get("/userpurchases/:id", getPuchasesByUser)

app.post("/createuser", createUser)
app.post("/createproduct", createProduct)
app.post("/createticket", createTiket)
app.post("/createpurchase", postPurchase)