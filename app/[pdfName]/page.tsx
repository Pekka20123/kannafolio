import { useRouter } from 'next/router'
import { useState } from 'react'
import { Document, Page } from 'react-pdf'

export default function PdfViewer() {
    const router = useRouter()
    const { pdfName } = router.query
    const [numPages, setNumPages] = useState<number | null>(null)

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages)
    }

    return (
        <div>
            <Document
                file={`/pdfs/${pdfName}.pdf`}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {numPages && Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
        </div>
    )
}