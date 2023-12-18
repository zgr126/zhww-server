function resJSON(req, res, next) {
  next();
  let code = 100;
  if (res.err) code = 200;
  console.log(res);
  res.json({
    code: code,
    data: res.data || {},
    msg: res.err || "",
  });
}
// 输出接口
export default resJSON;
