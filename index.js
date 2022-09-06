/**
 * @Author WangJiaFeng
 * @Description 读取图片文件列表 写入./src/composables/images.json
 * @email 1115378579@qq.com
 * @Date 2022-09-06 15:29:45 星期二
 * @return
 */
const json = './src/composables/images.json'
const fs = require('fs')
const data = fs.readdirSync('./public/images', 'utf8')
fs.writeFileSync(json, JSON.stringify(data.filter((el) => {
  return !el.startsWith('.')
})))
