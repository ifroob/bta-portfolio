// src/components/Resume.js
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useSpring, animated } from '@react-spring/web';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './Resume.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// PDF.js worker from CDN
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

  const Resume = () => {
    const fadeIn = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      config: { duration: 1000 }
    });
  
    return (
      <animated.div style={fadeIn} className="resume">
        <h1>Brian Ta's Resume</h1>
        <div className="pdf-container">
          <Document
            file="/resume.pdf"
            onLoadError={console.error}
            className="pdf-viewer"
          >
            <Page pageNumber={1} />
          </Document>
        </div>
        <a href="/resume.pdf" download className="download-link">Download PDF</a>
      </animated.div>
    );
  };
  
  export default Resume;