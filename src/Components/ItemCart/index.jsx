import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import styles from "./styles.module.scss";

const ItemCart = ({ item }) => {
    const { deleteItemToCart, addItemToCart } = useContext(CartContext);



    return (

        <div className={styles.cartItem}>
            <img src={item.img} alt={item.name} />
            <div className={styles.dataContainer}>
                <div className={styles.left}>
                    <p>{item.name}</p>
                    <div className={styles.buttons}>
                        <button onClick={() => addItemToCart(item)}>Agregar</button>
                        <button onClick={() => deleteItemToCart(item)}>Eliminar</button>
                    </div>
                </div>
                <div className={styles.right}>
                    <div>
                        {item.amount}
                    </div>
                    <p>Total: S/.{item.amount * item.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemCart;