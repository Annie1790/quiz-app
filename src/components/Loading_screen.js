//Animation
import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <motion.div id='loading'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <svg className="loading-spinner" viewBox="0 0 50 50">
                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>
        </motion.div>
    )

};

export default LoadingScreen;