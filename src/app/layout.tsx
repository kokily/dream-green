import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/common/header/Header';
import { Footer } from '@/components/common/footer/Footer';
import Script from 'next/script';
import SessionWrapper from '@/helpers/wrapper/SessionWrapper';
import QueryWrapper from '@/helpers/wrapper/QueryWrapper';
import ToastWrapper from '@/helpers/wrapper/ToastWrapper';
import 'react-toastify/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

// Meta
const title = '(주)꿈에그린환경';
const description = '꿈에그린환경, 폐기물 수거, 폐기물 관리, 폐기물 업체';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  verification: {
    google: 'yVOVC-S-EnVnkHZqhIpEWD9anZInMr1Xin80XZgqMuM',
    other: {
      'naver-site-verification': '72d9cbe0dd26f63949a8c7250d4e912a20c1da1f',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
          rel="stylesheet"
        />
        <link href="/assets/css/ico-moon.css" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/css/ionicons.min.css" />
        <link rel="stylesheet" href="/assets/css/themify-icons.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link
          rel="stylesheet"
          href="/assets/owlcarousel/css/owl.carousel.min.css"
        />
        <link rel="stylesheet" href="/assets/owlcarousel/css/owl.theme.css" />
        <link
          rel="stylesheet"
          href="/assets/owlcarousel/css/owl.theme.default.min.css"
        />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/css/demo-spa.css" />
        <link
          rel="stylesheet"
          id="layoutstyle"
          href="/assets/color/theme.css"
        />
      </head>
      <body className={inter.className}>
        <SessionWrapper>
          <QueryWrapper>
            <Header />
            {children}
            <Footer />
            <ToastWrapper />
          </QueryWrapper>
        </SessionWrapper>

        <Script src="assets/js/jquery-1.12.4.min.js" />
        <Script src="assets/js/jquery-ui.js" />
        <Script src="assets/js/popper.min.js" />
        <Script src="assets/bootstrap/js/bootstrap.min.js" />
        <Script src="assets/owlcarousel/js/owl.carousel.min.js" />
        <Script src="assets/js/magnific-popup.min.js" />
        <Script src="assets/js/waypoints.min.js" />
        <Script src="assets/js/parallax.js" />
        <Script src="assets/js/jquery.countdown.min.js" />
        <Script src="assets/js/jquery.fitvids.js" />
        <Script src="assets/js/jquery.counterup.min.js" />
        <Script src="assets/js/isotope.min.js" />
        <Script src="assets/js/jquery.elevatezoom.js" />
        <Script src="assets/js/Hoverparallax.min.js" />
        <Script src="assets/js/scripts.js" />
      </body>
    </html>
  );
}
