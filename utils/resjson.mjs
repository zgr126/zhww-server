function resJSON(req, res, next) {
  res.push = data=>{
    let code = 100;
    if (res.err) code = 200;
    res.json({
      code: code,
      data: data || {},
      msg: res.err || "",
    });
  }
  next();
}
// 输出接口
export default resJSON;
