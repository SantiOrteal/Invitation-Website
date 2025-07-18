import React from 'react';
import { motion } from 'framer-motion';

const WeddingItinerary = ({ variants: fadeInUp }) => {
  return (
    <motion.section 
      className="min-h-screen bg-marfil-iluminado-1 bg-old-letter py-16 "
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      <div className="max-w-md mx-auto relative px-4 text-verde-musgo-iluminado-1 ">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          {/* Top left floral corner */}
          <div className="absolute -top-4 -left-4 w-32 h-32">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path d="M50 50 Q80 30 110 50 Q130 80 110 110 Q80 130 50 110 Q30 80 50 50" 
                    fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M70 40 Q90 35 95 55 Q90 75 70 80 Q50 75 45 55 Q50 35 70 40" 
                    fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          
          {/* Top right floral corner */}
          <div className="absolute -top-4 -right-4 w-24 h-24">
            <svg viewBox="0 0 150 150" className="w-full h-full">
              <path d="M75 30 Q90 40 85 60 Q80 80 60 75 Q40 70 45 50 Q50 30 75 30" 
                    fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          
          {/* Bottom left floral corner */}
          <div className="absolute -bottom-4 -left-4 w-40 h-40">
            <svg viewBox="0 0 250 250" className="w-full h-full">
              <path d="M60 60 Q100 40 140 60 Q160 100 140 140 Q100 160 60 140 Q40 100 60 60" 
                    fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M80 70 Q110 60 120 90 Q110 120 80 130 Q50 120 40 90 Q50 60 80 70" 
                    fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          
          {/* Bottom right floral corner */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path d="M100 50 Q130 40 150 70 Q140 100 110 110 Q80 100 70 70 Q80 40 100 50" 
                    fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>

        {/* Main content */}
        <motion.div 
          className="relative z-10 bg-gradient-to-br from-oro-viejo-iluminado-2 to-oro-viejo-iluminado-3 rounded-3xl p-8 shadow-xl font-body"
          variants={fadeInUp}
        >
          {/* Title */}
          <motion.h1 
            className="text-4xl font-bold  text-center mb-12 font-fancy"
            variants={fadeInUp}
          >
            Itinerario
          </motion.h1>
          
          {/* Timeline */}
          <motion.div 
            className="relative"
            variants={fadeInUp}
          >
            {/* Central line */}
            <motion.div 
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-verde-musgo-base transform -translate-x-1/2"
              variants={fadeInUp}
            />
            
            {/* Timeline items */}
            <div className="space-y-8">
              {/* Religious ceremony */}
              <motion.div 
                className="flex items-center"
                variants={fadeInUp}
              >
                <div className="w-1/2 pr-8 text-right">
                  {/* Church icon */}
                  <motion.div 
                    className="flex justify-end mb-2"
                    variants={fadeInUp}
                  >
                    <svg className="w-12 h-12 text-verde-musgo-base" viewBox="0 0 100 100" fill="currentColor">
                      <path d="M20 80 L20 50 L30 40 L30 20 L32 20 L32 15 L34 15 L34 20 L36 20 L36 40 L46 50 L46 80 Z"/>
                      <path d="M54 80 L54 50 L80 50 L80 80 Z"/>
                      <rect x="25" y="55" width="6" height="8" fill="none" stroke="currentColor" strokeWidth="1"/>
                      <rect x="35" y="55" width="6" height="8" fill="none" stroke="currentColor" strokeWidth="1"/>
                      <rect x="59" y="55" width="6" height="8" fill="none" stroke="currentColor" strokeWidth="1"/>
                      <rect x="69" y="55" width="6" height="8" fill="none" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="w-3 h-3 bg-verde-musgo-base rounded-full relative z-10 border-2 border-amber-50"
                  variants={fadeInUp}
                ></motion.div>
                
                <div className="w-1/2 pl-8">
                  <div className="text-2xl font-bold  mb-1">6.00 P.M.</div>
                  <div className="text-lg -800">Ceremonia</div>
                  <div className="text-lg ">religiosa</div>
                </div>
              </motion.div >
            </div>
              
              {/* Cocktail */}
              <motion.div 
                className="flex items-center"
                variants={fadeInUp}
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-2xl font-bold  mb-1">7.00 P.M</div>
                  <div className="text-lg ">Cóctel</div>
                </div>
                
                <motion.div 
                  className="w-3 h-3 bg-verde-musgo-base rounded-full relative z-10 border-2 border-amber-50"
                  variants={fadeInUp}
                />
                
                <div className="w-1/2 pl-8">
                  {/* Champagne glasses icon */}
                  <motion.div 
                    className="flex justify-start mb-2"
                    variants={fadeInUp}
                  >
                    <svg className="w-12 h-12 text-verde-musgo-base" viewBox="0 0 100 100" fill="currentColor">
                      <path d="M30 60 L35 40 L45 40 L50 60 L50 70 L48 70 L48 80 L52 80 L52 85 L28 85 L28 80 L32 80 L32 70 L30 70 Z"/>
                      <path d="M50 60 L55 40 L65 40 L70 60 L70 70 L68 70 L68 80 L72 80 L72 85 L48 85 L48 80 L52 80 L52 70 L50 70 Z"/>
                      <circle cx="40" cy="30" r="2" fill="currentColor"/>
                      <circle cx="60" cy="30" r="2" fill="currentColor"/>
                      <circle cx="35" cy="35" r="1" fill="currentColor"/>
                      <circle cx="65" cy="35" r="1" fill="currentColor"/>
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Civil ceremony */}
              <motion.div 
                className="flex items-center"
                variants={fadeInUp}
              >
                <div className="w-1/2 pr-8 text-right">
                  {/* Rings icon */}
                  <motion.div 
                    className="flex justify-end mb-2"
                    variants={fadeInUp}
                  >
                    <svg className="w-12 h-12 text-musgo-base" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="35" cy="50" r="15"/>
                      <circle cx="65" cy="50" r="15"/>
                      <path d="M30 35 L35 30 L40 35"/>
                    </svg>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="w-3 h-3 bg-verde-musgo-base rounded-full relative z-10 border-2 border-amber-50"
                  variants={fadeInUp}
                />
                
                <div className="w-1/2 pl-8">
                  <div className="text-2xl font-bold  mb-1">8.00 P.M.</div>
                  <div className="text-lg ">Ceremonia</div>
                  <div className="text-lg ">civil</div>
                </div>
              </motion.div>
              
              {/* Reception */}
              <motion.div 
                className="flex items-center"
                variants={fadeInUp}
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-2xl font-bold 0 mb-1">9.00 P.M.</div>
                  <div className="text-lg ">Recepción</div>
                </div>
                
                <motion.div 
                  className="w-3 h-3 bg-verde-musgo-base rounded-full relative z-10 border-2 border-amber-50"
                  variants={fadeInUp}
                />
                
                <div className="w-1/2 pl-8">
                  {/* Dinner plate icon */}
                  <motion.div 
                    className="flex justify-start mb-2"
                    variants={fadeInUp}
                  >
                    <svg className="w-12 h-12 text-verde-musgo-base" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="50" cy="50" r="20"/>
                      <circle cx="50" cy="50" r="15"/>
                      <path d="M20 50 L25 45 L25 55 Z"/>
                      <path d="M80 50 L75 45 L75 55 Z"/>
                      <path d="M75 40 Q80 35 85 40"/>
                    </svg>
                  </motion.div>
                </div>

              </motion.div>
            </motion.div>
          </motion.div>
    
        
        {/* Decorative floral elements */}
        <motion.div 
          className="absolute top-16 left-4 w-16 h-16 opacity-20"
          variants={fadeInUp}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-verde-musgo-base">
            <path d="M50 20 Q70 30 60 50 Q40 60 30 40 Q40 20 50 20" 
                  fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M45 25 Q55 20 60 30 Q55 40 45 45 Q35 40 30 30 Q35 20 45 25" 
                  fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute top-32 right-4 w-20 h-20 opacity-20"
          variants={fadeInUp}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-verde-musgo-base">
            <path d="M50 10 Q80 20 70 50 Q40 60 20 40 Q30 10 50 10" 
                  fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M40 20 Q60 15 65 35 Q60 55 40 60 Q20 55 15 35 Q20 15 40 20" 
                  fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-16 left-4 w-24 h-24 opacity-20"
          variants={fadeInUp}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-verde-musgo-base">
            <path d="M50 5 Q85 15 75 50 Q40 70 15 45 Q25 5 50 5" 
                  fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M40 15 Q65 10 70 35 Q65 60 40 65 Q15 60 10 35 Q15 10 40 15" 
                  fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-32 right-4 w-18 h-18 opacity-20"
          variants={fadeInUp}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-verde-musgo-base">
            <path d="M50 15 Q75 25 65 50 Q35 65 25 40 Q35 15 50 15" 
                  fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WeddingItinerary;