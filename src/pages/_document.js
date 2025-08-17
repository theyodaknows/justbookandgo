import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Google Tag Manager */}
                <script dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TXTHSMB2');`
                }} />
                {/* End Google Tag Manager */}
                {/* Favicon */}
                <link rel="icon" type="image/png" href="/favicon.ico" />
                {/* Social Media Preview */}
                <meta property="og:image" content="/sssm_image.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content="/sssm_image.png" />
                            </Head>
            <body className="antialiased bg-body text-body font-body">
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe 
                        src="https://www.googletagmanager.com/ns.html?id=GTM-TXTHSMB2"
                        height="0" 
                        width="0" 
                        style={{display: 'none', visibility: 'hidden'}}
                    />
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                <Main />
                <NextScript />
                            </body>
        </Html>
    )
}
