import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import DetailProduct from "./views/DetailProduct";
import Cart from "./views/Cart";
import "./styles/custom.css";

function App() {
	return (
		<Router>
			<Header />
			<Container>
				<Route path="/" component={Home} exact />
				<Route path="/detail/product/:id" component={DetailProduct} />
				<Route path="/cart/:id?" component={Cart} />
			</Container>
			{/* <Footer /> */}
		</Router>
	);
}

export default App;
