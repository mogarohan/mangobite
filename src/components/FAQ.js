"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './FAQ.module.css';

export default function FAQ({ faqData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      {faqData.map((faq, index) => (
        <div 
          key={index} 
          className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
        >
          <button 
            className={styles.question} 
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp size={20} className={styles.icon} />
            ) : (
              <ChevronDown size={20} className={styles.icon} />
            )}
          </button>
          <div className={styles.answer}>
            <div className={styles.answerContent}>
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
