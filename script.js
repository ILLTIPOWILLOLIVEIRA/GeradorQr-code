const inputValue = document.querySelector('#inputValue');
const btnValue = document.querySelector('#btnValue');
const imgQrCode = document.querySelector('#imgQrCode');
const wrapper = document.querySelector('.pai');
let valueDefault;


btnValue.addEventListener('click', () => {
    let qrcodeValue = inputValue.value.trim();  
    if(!qrcodeValue || qrcodeValue === valueDefault) return;
    
    valueDefault = qrcodeValue;
    btnValue.innerText = 'Gerando QR Code...'
    imgQrCode.src = `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${valueDefault}`
    imgQrCode.addEventListener('load', () => {
        wrapper.classList.add('active');
        btnValue.innerText = 'Gerar QRCode'
    })
})