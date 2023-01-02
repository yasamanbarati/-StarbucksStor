import { useEffect } from "react"
import { setcategoriesDataAction, setProductDataAction } from '../../scenes/_slice/shop.slice';
import { useDispatch } from 'react-redux'
import axios from "axios"

export const useInitialStateData = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            axios.get('http://localhost:3000/products').then(response => {
                dispatch(setProductDataAction(response.data))
            }).catch(error => {
                console.error(error);
            })
        }, 2000)
        setTimeout(() => {
            axios.get('http://localhost:3000/categories').then(response => {
                dispatch(setcategoriesDataAction(response.data))
            }).catch(error => {
                console.error(error);
            })
        }, 2000)

    }, [])
}
