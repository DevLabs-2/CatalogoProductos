import styles from './ProductoCard.module.css'
import { useRouter } from 'next/navigation'

const ProductoCard = ({producto, index}) => {
    const router = useRouter()
    return(
        <>
            <div onClick={() => router.push(`/Detalle/${index}`)}>
                <h3>{producto.name}</h3>
                <img src={producto.image} alt={producto.name}/>
                <p>{producto.desc}</p>
            </div>
            
        </>
    )
}

export default ProductoCard;