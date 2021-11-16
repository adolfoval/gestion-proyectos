import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import Script from "next/script"

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <Script src = "https://kit.fontawesome.com/d4cd33a1a3.js" crossOrigin ="anonymous"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument