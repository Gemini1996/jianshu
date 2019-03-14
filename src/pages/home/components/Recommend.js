import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper,  RecommendItem} from '../style'

class Recommend extends PureComponent {
  render() {
    const { list } = this.props
    return (
      <RecommendWrapper>
        {
          list.map((item) => {
            return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
          })
        }
        <a className="download"  href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click">
          <img className="qrcode" alt="" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"></img>
          <div className="info">
            <div className="title">下载简书手机App<i className="iconfont">&#xe667;</i></div>
            <div className="description">随时随地发现和创作内容</div>
          </div>
        </a>
        <a href="https://dsp-click.youdao.com/clk/request.s?slot=5dc7c0eb459a12bc99cb30cf2d7fc358&amp;k=fM9lDMQX9orAfSfudJhTkb%2FDK2V5tjWi0hQIdQ8tdjTXxo%2BoRxcJpjjAgKuViCqvIxCHqA9N%2F2c%2F9Be%2FcwcSr3tFCG%2BMp11B94ldtFLBth%2BHKyTE2TKG3wD8CUf4PCIBzq6oIpD3zp%2FCt8tWUqwTSuviEZ3iZhrm4TEjkivHmFhv0yDKGUJ9hEviGVibSX2HEA7md3Hq7BOhGrSke341nm7b%2BqeeBlRwexkn7J2Vai6QuiOUBlGgRTRKtq%2F26jQ91c8pXV%2FQW8NqSgZKf2f2FMBc8hTRkDkpUdNHMN2yVKT%2BEc%2Bd1jbbq9hGJq0XLIGZMHMNk0HBE7d6E4vICqnJAl16Cg%2BsHjwne1fg0d0rY8HhDpY6VQQhNofsrjeEHMu6Kl1caiQ3iif%2FnrrxejwmRp8haxoPc1L4NxroS54QbKG0ckvkITsO1u5zUtRET2JoCUIY1nS%2BU%2BiXpN%2B1mBywm%2BJCvUUbD7ARLgrbV6V7v0Ap3DXt0HuGReB8cXG4v14BvDLGB0rlms2t2kmjw3g3g3tQW%2FRVuaYRauWej6r2RkfFPQxgvCMp4t8sYQNqIYTuUEi9%2FYBDNRBtKuth5JsOiQb1iB5I97U7mYEFbEGDbR2HPrNuwUz7UZLEqXvgeWVUM5x63sKEu1XU3FWGKGmdUzVz97NVcgcJYqfFtZWCTimZxQM0uMYrc%2FiJ7owYJL7bS7OFGvF8hJLhQuLhRpA%2F4lnBdUrebzE22Mg%2BV3Dd6%2B2aOvV1kEP4hqYEYYtnSlq9VbQDpPkcQcretGO7UJIt6OrmUL8OavJaH2kM%2FPqStXXkN8iKayYLt8l5UrDa4dNxFkJzxT5Cb2QwI1BeEyq%2FDBZFUuw8NFH5E4Z9iRJclub6O76Vc7BKQVFA3s2muv%2Fh4TuKQGUl%2BMgfsATfHgxvSUYag697OvSxRG3gj7pnjBWpZfdrzZ2%2BhRiqRYKAdh9hX2rxDp9XQ7XGWBKYiCX6WBSZXu8uKzLcoqFh1IMpWTLo2cMBq%2FJqClROt6h2s0iA4Ae4BAsiUQ4Z8IDVOyNWtCYdwQDKLDhU7F6R6Lk%2FZvUJFicI%2FCamGEdL1yk4xXrMIQjBXZzC7wmOzS6QBQso0ZOtLdrmPbpfLyUV5T4L9qTjICGVyCiesW54GIdDnvrNSeacI82CC7%2FIq%2B9Yhn3lxtfGj6hHFwmmOMCAq5WIKq%2FXxo%2BoRxcJpjjAgKuViCqvAmhpi%2BLR8fmlsfA3gjutjbL%2BgchVEWB5AdS1TNreugA%3D&amp;youdao_bid=779b3292-20ec-4254-98d7-9cdcaefca55a&amp;iid=%7B%228579165724892171360%22%3A4%7D&amp;sid=17170" className="youdao-img-ad">
          <span className="ad-badge">广告</span>
        </a>
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','recommendList'])
})

export default connect(mapState, null)(Recommend)