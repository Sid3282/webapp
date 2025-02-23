// PDF to Image Converter
document.getElementById('convertPdfToImage').addEventListener('click', function () {
    const pdfInput = document.getElementById('pdfInput');
    const resultDiv = document.getElementById('pdfToImageResult');
    const downloadBtn = document.getElementById('downloadPdfToImage');
    const downloadMessage = document.getElementById('pdfToImageDownloadMessage');

    if (pdfInput.files.length === 0) {
        alert('Please select a PDF file.');
        return;
    }

    const file = pdfInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const pdfData = e.target.result;

        // Load the PDF using pdf.js
        pdfjsLib.getDocument({ data: pdfData }).promise.then(function (pdfDoc) {
            // Get the first page
            pdfDoc.getPage(1).then(function (page) {
                const viewport = page.getViewport({ scale: 1.5 });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Render the page on the canvas
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                };
                page.render(renderContext).promise.then(function () {
                    // Show result and download button
                    resultDiv.innerHTML = `<p>PDF is ready to be converted to an image!</p>`;
                    downloadBtn.style.display = 'block';

                    // Download button click event
                    downloadBtn.addEventListener('click', function () {
                        downloadMessage.textContent = 'Downloading...';
                        downloadMessage.style.display = 'block';

                        // Convert canvas to image and download
                        canvas.toBlob(function (blob) {
                            const url = URL.createObjectURL(blob);
                            const a =
