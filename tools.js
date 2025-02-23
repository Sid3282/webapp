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
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = 'converted-image.png';
                            a.click();
                            URL.revokeObjectURL(url);

                            // Show thank you message
                            downloadMessage.textContent = 'Download complete!';
                            setTimeout(() => {
                                downloadMessage.style.display = 'none';

                                const thankYouMessage = document.getElementById('thankYouMessage');
                                thankYouMessage.style.display = 'block';
                                setTimeout(() => {
                                    thankYouMessage.style.display = 'none';
                                }, 5000); // Hide thank you message after 5 seconds
                            }, 1000); // Simulate download completion
                        }, 'image/png');
                    });
                });
            });
        });
    };

    reader.readAsArrayBuffer(file);
});

// Image to PDF Converter
document.getElementById('convertImageToPdf').addEventListener('click', async function () {
    const imageInput = document.getElementById('imageInput');
    const resultDiv = document.getElementById('imageToPdfResult');
    const downloadBtn = document.getElementById('downloadImageToPdf');
    const downloadMessage = document.getElementById('imageToPdfDownloadMessage');

    if (imageInput.files.length === 0) {
        alert('Please select one or more images.');
        return;
    }

    const files = imageInput.files;
    const pdfDoc = await PDFLib.PDFDocument.create();

    for (const file of files) {
        const reader = new FileReader();
        reader.onload = async function (e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = async function () {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const context = canvas.getContext('2d');
                context.drawImage(img, 0, 0);

                const imageData = canvas.toDataURL('image/jpeg');
                const image = await pdfDoc.embedJpg(imageData);
                const page = pdfDoc.addPage([image.width, image.height]);
                page.drawImage(image, {
                    x: 0,
                    y: 0,
                    width: image.width,
                    height: image.height,
                });
            };
        };
        reader.readAsDataURL(file);
    }

    // Show result and download button
    resultDiv.innerHTML = `<p>Images are ready to be converted to a PDF!</p>`;
    downloadBtn.style.display = 'block';

    // Download button click event
    downloadBtn.addEventListener('click', async function () {
        downloadMessage.textContent = 'Downloading...';
        downloadMessage.style.display = 'block';

        // Save the PDF
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'converted-pdf.pdf';
        a.click();
        URL.revokeObjectURL(url);

        // Show thank you message
        downloadMessage.textContent = 'Download complete!';
        setTimeout(() => {
            downloadMessage.style.display = 'none';

            const thankYouMessage = document.getElementById('thankYouMessage');
            thankYouMessage.style.display = 'block';
            setTimeout(() => {
                thankYouMessage.style.display = 'none';
            }, 5000); // Hide thank you message after 5 seconds
        }, 1000); // Simulate download completion
    });
});
