import './App.scss'
import { Routes, Route } from "react-router-dom";
import Header from './components/header/header';
import Draw from './components/draw/draw';
import Type from './components/type/type';
import { useRef, useEffect } from 'react';
import FontsData from './components/data/fonts.data';
import SignPdf from './components/sign-pdf/sign.pdf';

function App() {

  const isMounted = useRef(false);
  useEffect(() => {

    const loadFonts = async () => {
      if (!isMounted.current) {

        try {
          const fontPromises = FontsData.map((font) => {
            const newFont = new FontFace(font.name, `url(${font.ttf})`);
            return newFont.load().then(() => {
              document.fonts.add(newFont);
            });
          })

          await Promise.all(fontPromises);

        } catch (err) {
          console.error(err);
        }

        isMounted.current = true;
      }
    }

    loadFonts();

  }, [])

  return (<>
    <Header />
    <Routes>
      <Route path="/" element={<Draw />} />
      <Route path="/type" element={<Type />} />
      <Route path="/sign-pdf" element={<SignPdf />} />
    </Routes>
  </>
  )
}

export default App
