import NotificationContext from '../contexts/NotificationContext';
import { useContext } from 'react'

const useNotification=()=>{
    return useContext(NotificationContext);
}

export default useNotification;