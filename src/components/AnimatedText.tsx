// src/components/AnimatedText.tsx
import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface AnimatedTextProps {
    text: string;
    scrollYProgress: MotionValue<number>;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, scrollYProgress }) => {
    // Split the text by words first
    const words = text.split(' ');
    
    return (
        <p className='indent-8 md:indent-18 text-left'>
            {words.map((word, wordIndex) => (
                <React.Fragment key={`word-${wordIndex}`}>
                    {/* Add each letter of the word as a separate motion.span */}
                    {word.split('').map((char, charIndex) => {
                        // Calculate overall character index for the entire text
                        // This helps spread the animation across the whole text
                        const allWordsBeforeLength = words
                            .slice(0, wordIndex)
                            .reduce((sum, w) => sum + w.length, 0);
                        
                        // Add spaces to the count
                        const spacesCount = wordIndex;
                        
                        // Calculate total character index including spaces
                        const totalIndex = allWordsBeforeLength + spacesCount + charIndex;
                        
                        // Calculate total character count including spaces
                        const totalCharCount = text.length;
                        
                        // Calculate the progress threshold for this character
                        const charThreshold = totalIndex / totalCharCount * 0.6; // Only use 80% of scroll for animation
                        
                        // Transform this character's color based on scroll progress
                        const color = useTransform(
                            scrollYProgress,
                            [charThreshold, charThreshold + 0.02], // Faster transition per character
                            ["#4B5563", "#FFFFFF"] // From dark gray to white
                        );
                        
                        return (
                            <motion.span 
                                key={`char-${wordIndex}-${charIndex}`} 
                                style={{ color }}
                                className="inline"
                            >
                                {char}
                            </motion.span>
                        );
                    })}
                    {/* Add a space after each word except the last one */}
                    {wordIndex < words.length - 1 && ' '}
                </React.Fragment>
            ))}
        </p>
    );
};

export default AnimatedText;