import Header from '../shared/Header';
import { Container, Table } from 'react-bootstrap';

const Cart = () => {

    return(
        <>
        <Header title="Cart"/>

        <Container>
            <Table striped bordered hover>
                <thead>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Option</th>
                </thead>
            </Table>
        </Container>
        </>
        )
};
export default Cart;