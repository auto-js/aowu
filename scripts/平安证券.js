const maid = getMaid('com.hundsun.winner.pazq')

function task() {
  maid.launch()
  waitForActivity('com.hundsun.winner.pazq.ui.web.WebViewActivity')
  sleep(2000)
  let upBtn = textMatches(/^签到.*/)
    .clickable(true)
    .findOnce()
  if (upBtn) {
    upBtn.click()
    if (text('恭喜您获得').findOnce()) {
      log('平安证券 - 签到成功')
      return
    }
  }
  maid.close()
}

module.exports = task
