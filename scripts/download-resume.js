const downloadPdfButton = document.querySelector('#downloadPdfButton');

downloadPdfButton.addEventListener('click', function () {
    const a = document.createElement('a');
    a.download = 'Parkavi Muthaiyan Resume';
    a.href = 'assets/pdf/parkavi-muthaiyan-resume.pdf';
    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
});