// Elements
const modal = document.getElementById('reservationModal');
const closeButton = document.querySelector('.close-button');
const tableElements = document.querySelectorAll('.table');
const modalTableId = document.getElementById('modalTableId');
const confirmBtn = document.getElementById('confirmReserve');
const reservationForm = document.getElementById('reservationForm');
const confirmationBox = document.getElementById('confirmation');
const confirmationText = document.getElementById('confirmText');
const qrCodeContainer = document.getElementById('qrcode');

// Open modal on table click
tableElements.forEach(table => {
    table.addEventListener('click', () => {
        const tableId = table.textContent;
        modal.style.display = 'block';
        modalTableId.textContent = tableId;
        confirmationBox.style.display = 'none';
        qrCodeContainer.innerHTML = '';
        reservationForm.reset();
    });
});

// Close modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    reservationForm.reset();
    qrCodeContainer.innerHTML = '';
    confirmationBox.style.display = 'none';
});

// Confirm reservation
confirmBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const name = document.getElementById('resName').value.trim();
    const phone = document.getElementById('resPhone').value.trim();
    const time = document.getElementById('resTime').value.trim();
    const method = document.getElementById('method').value;
    const table = modalTableId.textContent;

    if (!name || !phone || !time || !method) {
        alert('Please fill in all fields to proceed with reservation.');
        return;
    }

    const text = `✅ Piccante Table Reservation\nTable: ${table}\nName: ${name}\nPhone: ${phone}\nTime: ${time}\nMethod: ${method}`;
    confirmationText.textContent = text;

    // Generate QR Code
    const qr = qrcode(0, 'L');
    qr.addData(text);
    qr.make();
    qrCodeContainer.innerHTML = qr.createImgTag(4);

    // Hide form, show confirmation
    reservationForm.style.display = 'none';
    confirmationBox.style.display = 'block';
});