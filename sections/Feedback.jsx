'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion'

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] relative border-[#6a6a6a]"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:loading-[40px] loading-[36px] text-white">
            Yash sharma
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
            Founder | Metaworld
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[16px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
          "With's the development of today's technology , metaworld is very useful for today's work, or can be called web 3.0. by using metaworld you can use it as anything"
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
