import styles from './ProductoCard.module.css'
import { useRouter } from 'next/navigation'
const ProductoCard = ({name, image, id}) => {
    const router = useRouter()
    return(
        <>
            <div onClick={() => router.push(`/Detalle/${id}`)} className={styles.product}>
                <h3>{name}</h3>
                
                <img
                src={image}
                alt={name}
                className={styles.Image}
                width={100}
                height={100}
                />
            </div>
            
        </>
    )
}

export default ProductoCard;