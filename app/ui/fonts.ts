

import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Lusitana } from 'next/font/google';

export const avenir = localFont({ 
    
    src: '../../public/fonts/Avenir/AVENIR-Book-woff-5.ttf',
    
    weight: '400',
    style: 'normal',
    display: 'swap',
    
 });

 export const inter = Inter({ 
    subsets: ['latin'], 
    variable: '--font-inter', 
    display: 'swap',
 });

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal'],
    variable: '--font-lusitana',
    display: 'swap',
 });
