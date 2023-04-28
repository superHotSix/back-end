const crypto = require("crypto");

module.exports = (password) => {
  const hash = crypto.createHash("sha1"); // sha1알고리즘 사용
  hash.update(password); // 매개변수 password를 넣어줌
  return hash.digest("hex"); // 16진수 문자열로 출력(return)
};
