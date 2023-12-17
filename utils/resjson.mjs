
function resJSON(req,res,next){
    next()
    
    res.json({
        code: 100,
        data: res.data || {},
        msg: res.err || ''
    })
}
// 输出接口
export default resJSON