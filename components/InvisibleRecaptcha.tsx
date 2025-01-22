///components/InvisibleRecaptcha.tsx
'use client';
import { useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Execute recaptcha
    const token = await recaptchaRef.current?.execute();
    
    if (token) {
      // Verify token on server
      const response = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      
      if (response.ok) {
        // Process form submission
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields */}
      
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      />
      
      <button type="submit">
        Absenden
      </button>
    </form>
  );
}