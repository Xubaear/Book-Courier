import React from 'react';
import { motion } from 'framer-motion';

const SarcasticLoader = () => {
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#f4f4f4',
      fontFamily: 'monospace',
      color: '#333',
      overflow: 'hidden',
    },
    ooText: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#e74c3c',
      display: 'inline-block',
      marginBottom: '15px',
    },
    mainText: {
      fontSize: '1.4rem',
      textAlign: 'center',
      fontWeight: '600',
    },
    subText: {
      fontSize: '1rem',
      color: '#666',
      marginTop: '10px',
      fontStyle: 'italic',
    },
  };

  return (
    <div style={styles.container}>
      
    
      <motion.div
        style={styles.ooText}
        animate={{ x: [0, -4, 4, -4, 4, 0] }}
        transition={{ 
          duration: 0.5, 
          repeat: Infinity, 
          repeatType: "loop", 
          ease: "easeInOut" 
        }}
      >
        OO O!
      </motion.div>
      
     
      <motion.div
        style={styles.mainText}
        animate={{ 
          opacity: [1, 0.5, 1], 
          scale: [1, 0.98, 1] 
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        Still working on it...
      </motion.div>
      
     
      <motion.div
        style={styles.subText}
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}  
        transition={{ 
          delay: 0.5,
          duration: 0.8, 
          ease: "easeOut" 
        }}
      >
        (Will let you know after finishing.)
      </motion.div>

    </div>
  );
};

export default SarcasticLoader;