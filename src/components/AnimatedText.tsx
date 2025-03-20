// src/components/AnimatedText.tsx
import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

/**
 * Custom hook to generate transformed colors for each character.
 */
const useCharacterColors = (text: string, scrollYProgress: MotionValue<number>) => {
    const words = text.split(" ");
    const totalCharCount = text.length;

    return words.flatMap((word, wordIndex) =>
        word.split("").map((_, charIndex) => {
            const allWordsBeforeLength = words.slice(0, wordIndex).reduce((sum, w) => sum + w.length, 0);
            const spacesCount = wordIndex;
            const totalIndex = allWordsBeforeLength + spacesCount + charIndex;
            const charThreshold = (totalIndex / totalCharCount) * 0.6;

            return useTransform(
                scrollYProgress,
                [charThreshold, charThreshold + 0.02],
                ["#4B5563", "#FFFFFF"]
            );
        })
    );
};

interface AnimatedTextProps {
    text: string;
    scrollYProgress: MotionValue<number>;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, scrollYProgress }) => {
    const colorTransforms = useCharacterColors(text, scrollYProgress);
    let colorIndex = 0;

    return (
        <p className="indent-8 md:indent-18 text-left">
            {text.split(" ").map((word, wordIndex) => (
                <React.Fragment key={`word-${wordIndex}`}>
                    {word.split("").map((char, charIndex) => {
                        const color = colorTransforms[colorIndex++];
                        return (
                            <motion.span key={`char-${wordIndex}-${charIndex}`} style={{ color }} className="inline">
                                {char}
                            </motion.span>
                        );
                    })}
                    {wordIndex < text.split(" ").length - 1 && " "}
                </React.Fragment>
            ))}
        </p>
    );
};

export default AnimatedText;
