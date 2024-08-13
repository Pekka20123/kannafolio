import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function PdfViewer({ params }: { params: { pdfName: string } }) {
  const [pdfSrc, setPdfSrc] = useState<string | null>(null);

  useEffect(() => {
    if (params.pdfName) {
      setPdfSrc(`/pdfs/${params.pdfName}.pdf`);
    }
  }, [params.pdfName]);

  if (!pdfSrc) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <embed src={pdfSrc} type="application/pdf" width="100%" height="100%" />
    </div>
  );
}
