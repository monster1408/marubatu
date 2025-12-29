const readline = require('readline');
const winlist_set = require('./winlist_set');
// 入出力インターフェースを作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * ユーザーに質問して入力を受け取る関数
 * @param {string} query - 質問文
 * @returns {Promise<string>} - 入力された文字列
 */
function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer.trim());
    });
  });
}

(async () => {
  try {
    const player_num = await askQuestion('1,2,3\n4,5,6\n7,8,9\n');
   
  } catch (err) {
    console.error('エラーが発生しました:', err.message);
  } finally {
    winlist_set.winlist_set(5);
  }
})();

