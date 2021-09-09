import {ReactComponent as ImgCar } from 'assets/images/car-card.svg';
import Button from 'components/Button';
import { Product } from 'Types/product';
import './styles.css';
type Props = {
    product : Product    
}

const ProductCard = ( { product } : Props) => {
    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <ImgCar/>
                <h1>{product?.name}</h1>
            </div>
            <div className="card-botton-container">
                <h6>{product.description}</h6>
            </div>
            <div className="card-button-container">
                <Button text="COMPRAR" />
            </div>

        </div>
    )
}

export default ProductCard;