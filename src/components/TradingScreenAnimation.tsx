import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from "@/components/ui/theme-provider";

const TradingScreenAnimation = () => {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Enhanced animated gradient background - full coverage */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
            "radial-gradient(circle at 80% 40%, rgba(139, 92, 246, 0.20) 0%, transparent 70%)",
            "radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
            "radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Professional grid pattern - more visible */}
      <div className="absolute inset-0 w-full h-full opacity-[0.06]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="professionalGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path 
                d="M 60 0 L 0 0 0 60" 
                fill="none" 
                stroke={theme === 'dark' ? '#ffffff' : '#000000'} 
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#professionalGrid)" />
        </svg>
      </div>

      {/* Large floating elements across full screen */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-3 h-3 rounded-full ${
              theme === 'dark' ? 'bg-purple-400/40' : 'bg-purple-600/50'
            }`}
            style={{
              left: `${5 + (i * 3.8)}%`,
              top: `${10 + (i * 2)}%`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
        
      {/* Full screen connecting lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M 0,200 Q 300,100 600,200 T 1200,200"
          stroke={theme === 'dark' ? 'rgba(139, 92, 246, 0.25)' : 'rgba(139, 92, 246, 0.35)'}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M 0,350 Q 400,250 800,350 T 1600,350"
          stroke={theme === 'dark' ? 'rgba(167, 139, 250, 0.22)' : 'rgba(167, 139, 250, 0.32)'}
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M 0,500 Q 350,400 700,500 T 1400,500"
          stroke={theme === 'dark' ? 'rgba(196, 181, 253, 0.18)' : 'rgba(196, 181, 253, 0.28)'}
          strokeWidth="1.2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 4,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M 0,650 Q 250,550 500,650 T 1000,650"
          stroke={theme === 'dark' ? 'rgba(196, 181, 253, 0.15)' : 'rgba(196, 181, 253, 0.25)'}
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.35, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: 6,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Larger geometric shapes */}
      <motion.div
        className="absolute top-1/5 right-1/5 w-48 h-48 opacity-[0.08]"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon 
            points="50,5 95,25 95,75 50,95 5,75 5,25" 
            stroke={theme === 'dark' ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.25)'}
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/6 w-40 h-40 opacity-[0.08]"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            stroke={theme === 'dark' ? 'rgba(167, 139, 250, 0.15)' : 'rgba(167, 139, 250, 0.25)'}
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Enhanced data visualization elements */}
      <div className="absolute bottom-8 right-8 opacity-[0.15]">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`inline-block w-1 mr-1 ${
              theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600'
            }`}
            style={{
              height: `${20 + Math.random() * 40}px`
            }}
            animate={{
              height: [
                `${20 + Math.random() * 40}px`,
                `${35 + Math.random() * 50}px`,
                `${20 + Math.random() * 40}px`
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced particle system */}
      <div className="absolute inset-0 w-full h-full">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute w-2 h-2 rounded-full ${
              theme === 'dark' ? 'bg-purple-300/30' : 'bg-purple-500/40'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [-30, -80, -30],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Additional corner elements for full coverage */}
      <motion.div
        className="absolute top-10 left-10 opacity-[0.12]"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`inline-block w-1.5 mr-0.5 ${
              theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600'
            }`}
            style={{
              height: `${15 + Math.random() * 25}px`
            }}
            animate={{
              height: [
                `${15 + Math.random() * 25}px`,
                `${25 + Math.random() * 35}px`,
                `${15 + Math.random() * 25}px`
              ]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TradingScreenAnimation;
