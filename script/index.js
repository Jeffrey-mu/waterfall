const fs = require('fs')
const convert = require('webp-batch-convert-p')
const pc = require('picocolors')

// 示例一: 生成 img 目录下的图片文件至 webp 目录
convert.cwebp('../public/images', '../public/webp', { gif: true, replace_suffix: false })
/**
 * @Author WangJiaFeng
 * @Description 读取图片文件列表 写入./src/composables/images.json
 * @email 1115378579@qq.com
 * @Date 2022-09-06 15:29:45 星期二
 * @return
 */
const json = '../src/composables/images.json'
const data = fs.readdirSync('../public/webp', 'utf8')
fs.writeFileSync(json, JSON.stringify(data.filter((el) => {
  return !el.startsWith('.')
})))
if (fs.statSync('../src/composables/images.json')) {
  console.log(
    pc.green(`${pc.italic('write seccess！')}`),
  )
}
