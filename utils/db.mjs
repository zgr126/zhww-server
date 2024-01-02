import {MongoClient} from 'mongodb'
const url = 'mongodb://root:aw3se4AW%23SE%24@101.43.2.137:27017/'
const dbName = 'zhww'

let err, client = await MongoClient.connect(url)
if (err){
    console.log(err)
}
console.log('连接成功')
export default client.db(dbName)
