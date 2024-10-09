import styles from './ProductoCard.module.css'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const ProductoCard = ({producto, index}) => {
    const router = useRouter()
    return(
        <>
            <div onClick={() => router.push(`/Detalle/${index}`)} className={styles.product}>
                <h3>{producto.name}</h3>
                
                <Image
                src={producto.image}
                alt={producto.name}
                className={styles.Image}
                width={100}
                height={100}
                />

                <p>{producto.desc}</p>
            </div>
            
        </>
    )
}

export default ProductoCard;