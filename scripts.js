const targetTime = "2025-01-08 14:39:15";
const p_id_1 = "248F39FCD1DAD850E063CB0412AC1C6D"; // 高等数值分析
const p_id_2 = "248F39FCD30DD850E063CB0412AC1C6D"; // 计算方法
function executeFetch(p_id) {
  fetch("https://tis.sustech.edu.cn/Xsxk/addGouwuche", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en,zh-CN;q=0.9,zh;q=0.8",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "priority": "u=1, i",
      "rolecode": "02",
      "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "_ga=GA1.1.2082405932.1733987069; _ga_0KD226TRZ5=GS1.1.1735107628.4.1.1735107658.0.0.0; JSESSIONID=07C8D39F2911836E02756314E7CB48FE; route=ab361953033dd05d15248be2fc69c7e1",
      "Referer": "https://tis.sustech.edu.cn/Xsxk/query/2",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": `cxsfmt=0&p_pylx=2&mxpylx=2&p_sfgldjr=0&p_sfredis=0&p_sfsyxkgwc=0&p_xktjz=rwtjzyx&p_chaxunxh=&p_gjz=&p_skjs=&p_xn=2024-2025&p_xq=2&p_xnxq=2024-20252&p_dqxn=2024-2025&p_dqxq=1&p_dqxnxq=2024-20251&p_xkfsdm=jhnxk&p_xiaoqu=&p_kkyx=&p_kclb=&p_xkxs=&p_dyc=&p_kkxnxq=&p_id=${p_id}&p_sfhlctkc=0&p_sfhllrlkc=0&p_kxsj_xqj=&p_kxsj_ksjc=&p_kxsj_jsjc=&p_kcdm_js=&p_kcdm_cxrw=&p_kc_gjz=&p_xzcxtjz_nj=&p_xzcxtjz_yx=&p_xzcxtjz_zy=&p_xzcxtjz_zyfx=&p_xzcxtjz_bj=&p_sfxsgwckb=1&p_skyy=&p_chaxunxkfsdm=&pageNum=1&pageSize=18`,
    "method": "POST"
  }).then(response => 
    response.json()
  ).then(data => {
    console.log("Request succeeded: ");
    console.log(data.message);
  }).catch(error => {
    console.error("Request failed:", error);
  });
}

function sleepSync(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // 什么都不做，纯粹占用 CPU
  }
}

// Calculate the delay time in milliseconds
const now_time = new Date();
const targetDate = new Date(targetTime);
const delay = targetDate - now_time;


console.log(`Script will run at: ${targetDate}`);
setTimeout(executeFetch, delay, p_id_1);
sleepSync(1500);
setTimeout(executeFetch, delay, p_id_2);

