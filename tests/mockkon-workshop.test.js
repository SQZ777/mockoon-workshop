// 引入axios模組
const axios = require('axios');
const https = require('https');

// 要請求的URL
// const url = 'https://a-server.mockoon-workshop.orb.local/sorted-products';
const url = 'http://localhost:8187/sorted-products';


test('check sorted-products', async () => {
    // 使用axios發送GET請求
    await axios({
        method: 'get',
        url: url,
        httpsAgent: new https.Agent({rejectUnauthorized: false}),})
    .then(response => {
      console.log(response.data); // 處理回應的數據
    })
    .catch(error => {
      console.error('There was a problem with the axios request:', error); // 處理任何在請求過程中出現的錯誤
    });
});