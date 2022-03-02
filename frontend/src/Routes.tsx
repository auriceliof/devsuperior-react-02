import Navbar from "components/Navbar";
import Admin from "pages/Admin";
import Catalog from "pages/Catalog";
import ProductDetails from "pages/ProductDetails";
import Home from "pages/Home";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Routes = () => (

    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home /> 
            </Route>
            
            <Route path="/products" exact>
                <Catalog />
            </Route>

            <Route path="/products/:productId">
                <ProductDetails />
            </Route>

            <Route path="/admin">
                <Admin />
            </Route>

        </Switch>

    </BrowserRouter>
)

export default Routes;