import styled from 'styled-components'

export const HomeWrapper = styled.div`
  &::before,&::after {
    content: ' ';
    display: table;
  }
  &::after {
    clear:both;
  }
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner {
    display: block;
    width: 625px;
    height: 270px;
    margin-bottom: 35px;
    border-radius: 6px;
    background: url("//upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540") 0 0 / 625px 270px 
  }
  .line {
    margin: -5px 0 15px;
    border-top: 1px solid #f0f0f0;
  }
`

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`

export const ListItem = styled.div`
  &::before,&::after {
    content: ' ';
    display: table;
  }
  &::after {
    clear:both;
  }
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  .imgContainer {
    float: right;
  }
  .img {
    display: block;
    width: 150px;
    height: 100px;
    border-radius: 4px;
  }
`

export const ListContent = styled.div`
  float: left;
  width: 450px;
  .title {
    display: block;
    margin: -7px 0 4px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: inherit
    }
  }
  .abstract {
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
  .meta {
    font-size: 12px;
    .jsd-meta {
      color: #ea6f5a;
      margin-right: 10px;
      .iconfont {
        color: #ea6f5a;
        font-size: inherit;
        padding-right: 5px;
      }
    }
  }
  .nickname {
    margin-right: 10px;
    color: #b4b4b4;
    &:hover {
      color: #787878;
    }
  }
  .comments {
    margin-right: 10px;
    color: #b4b4b4;
    font-size: 12px;
    .iconfont {
      font-size: inherit;
    }
    &:hover {
      color: #787878;
    }
  }
  .like {
    margin-right: 10px;
    color: #b4b4b4;
    font-size: 12px;
    .iconfont {
      font-size: inherit;
    }
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
  div:first-child {
    margin-top: -4px;
  }
  .download {
    display: block;
    margin: 10px 0 30px;
    padding: 10px 22px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    width: 100%;
    .qrcode {
      display: inline-block;
      width: 60px;
      height: 60px;
      vertical-align: middle;
      opacity: .85;
    }
    .info {
      display: inline-block;
      width: 143px;
      height: 43px;
      vertical-align: middle;
      margin-left: 11px;
      .title {
        margin-top: 0;
        font-size: 15px;
        color: #333;
        .iconfont {
          font-size: inherit;
          margin-left: 5px;
        }
      }
      .description {
        margin-top: 6px;
        font-size: 13px;
        color: #999
      }
    }
  }
  .youdao-img-ad {
    display: block;
    position: relative;
    width: 280px;
    height: 160px;
    background: url("https://oimagea7.ydstatic.com/image?id=8579165724892171360&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60");
    background-size: 280px 160px;
    .ad-badge {
      position: absolute;
      bottom: 0;
      right: 0;
      color: #fff;
      background-color: #000;
      padding: 0 5px;
      font-size: 12px;
      line-height: 20px;
      opacity: 0.7;
    }
  }
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;

`

export const LoadMore = styled.div`
  width: 100%;
  margin: 30px auto 60px;
  padding: 10px 15px;
  color: #fff;
  background-color: #9b9b9b;
  border-radius: 20px;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
`

export const BackTop = styled.div`
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 1000;
    text-align: center;
    border: 1px solid #dcdcdc;
    cursor: pointer;
    i {
      display: block;
      padding-top: 9px;
      font-size: 30px;
    }
`

export const WriterContainer = styled.div`
   .title {
      &::before,&::after {
        content: ' ';
        display: table;
      }
      &::after {
        clear:both;
      }
      margin-bottom: 20px;
      span {
        float: left;
        font-size: 14px;
        color: #969696;
      }
      .page-change {
        float: right;
        display: inline-block;
        font-size: 14px;
        color: #969696;
        .iconfont {
          font-size: 14px;
        }
      }
    } 
`

export const WriterWrapper = styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
    .content {
      text-align: left;
      &::before,&::after {
        content: ' ';
        display: table;
      }
      &::after {
        clear:both;
      }
      a {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
          border: 1px solid #ddd;
          border-radius: 50%;
          
        }
      }
      .authorName {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        cursor: pointer;
      }
      .describe {
        margin-top: 10px;
        font-size: 12px;
        color: #969696;
      }
      .subscribe {
        float: right;
        color: #42c02e;
        margin-top: 5px;
        cursor: pointer;
        i {
          font-size: 14px;
        }
      }
    }
    
`