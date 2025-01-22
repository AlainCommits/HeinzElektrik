//Users/alonondanse/elektriker-notdienst/lib/analytics.ts
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google'
import { Hotjar } from '@hotjar/browser';

export function AnalyticsProviders() {
  return (
    <>
      {/* Vercel Analytics - DSGVO-konform */}
      <Analytics />
      
      {/* Google Analytics 4 */}
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      
      {/* Hotjar Tracking Code */}
      <script>
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:YOURHJID,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </script>
    </>
  );
}