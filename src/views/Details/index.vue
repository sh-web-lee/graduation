<!--
 * @Author: lee
 * @Date: 2021-01-25 16:19:59
 * @LastEditTime: 2021-03-31 11:29:52
 * @FilePath: \ziru-demo\src\views\Details\index.vue
-->
<template>
  <div class="details">
    <!-- 返回按钮 -->
    <GoBack />
    <!-- swipe -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in swipeLists" :key="index" class="add">
        <img v-lazy="image.swipe" />
      </van-swipe-item>
    </van-swipe>

    <div class="l_intro pd36">
      <!-- 标题 -->
      <div class="l_de_title">
        <p class="l_house_name">{{ this.detail.houseName }}</p>
      </div>
      <!-- 标题及付款 -->
      <div class="l_price-wrapper clear">
        <div class="l_curr-price clear fl">
          <span class="fl l_house-price">￥</span>
          <div class="fl l_price-img-position" v-html="detail.housePrice"></div>
        </div>
        <div class="l_price-unit-position fl">
          <span>(季付价)</span>
        </div>
        <div class="l_pay-type-box fr">

          <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->

          <div class="l_pay-style fr" @click="showPopup">
            付款方式
            <van-icon name="arrow" class="l_pay-style-icon" />
          </div>
          <van-popup v-model="show" position="bottom" :style="{ height: '90%' }" >
            <div class="paystyle">
              <div class="l_paystyle">
                <van-icon class="l_paystyle-closebtn"  size="1.5rem" name="cross" @click="closePay"/>
              </div>
              <!-- this is the paystyle page. -->
              <div class="l_popup-content">
                <p class="l_popup-title">付款方式</p>
                <ul>
                  <li class="l_pay-list">
                    <div class="l_pay-text">
                      <span class="l_pay-type fl">月付</span>
                      <span class="l_pay-rmb fr">400元/月</span>
                    </div>
                    <div class="l_pay-desc">
                      <div class="fl">
                        <span class="fl">押金：￥</span>
                        <div class="l_price-img-wrapper fl">1000元</div>
                      </div>
                      <div class="fl">
                        <span class="fl">服务费：￥</span>
                        <div class="l_price-img-wrapper fl">1000元</div>
                      </div>
                    </div>
                  </li>
                  <li class="l_pay-list">
                    <div class="l_pay-text">
                      <span class="l_pay-type fl">季付</span>
                      <span class="l_pay-rmb fr">800元/月</span>
                    </div>
                    <div class="l_pay-desc">
                      <div class="fl">
                        <span class="fl">押金：￥</span>
                        <div class="l_price-img-wrapper fl">1000元</div>
                      </div>
                      <div class="fl">
                        <span class="fl">服务费：￥</span>
                        <div class="l_price-img-wrapper fl">1000元</div>
                      </div>
                    </div>
                  </li>
                  <li class="l_pay-list">
                    <div class="l_pay-text">
                      <span class="l_pay-type fl">半年付</span>
                      <span class="l_pay-rmb fr">550元/月</span>
                    </div>
                    <div class="l_pay-desc">
                      <div class="fl">
                        <span class="fl">押金：￥</span>
                        <div class="l_price-img-wrapper fl">1000元</div>
                      </div>
                      <div class="fl">
                        <span class="fl">服务费：￥</span>
                        <div class="l_price-img-wrapper fl">1000元</div>
                      </div>
                    </div>
                  </li>
                  <li class="l_pay-list">
                    <div class="l_pay-text">
                      <span class="l_pay-type fl">年付</span>
                      <span class="l_pay-rmb fr">￥850元/月</span>
                    </div>
                    <div class="l_pay-desc">
                      <div class="fl">
                        <span class="fl">押金：￥</span>
                        <div class="l_price-img-wrapper fl">1000元</div>
                      </div>
                      <div class="fl">
                        <span class="fl">服务费：￥</span>
                        <div class="l_price-img-wrapper fl">1000元</div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="l_pay-intro">
                  <div>说明</div>
                  <p>1、解约时，未发生的租金和服务费将按日结算；</p>
                  <p>2、押金及剩余合同金额将于办理解约后3个工作日内（不含退租当天）退还给您，请于【App-我的合同】确认退款金额，于【App-钱包】申请提现，退款将提现至银行账户；若退租方式为“签约3天不满意，无理由换租”，通过微信、支付宝付款的用户，退款将原路退回至支付账户；白条支付、分期支付或银行卡快捷支付的，退款将退还至自如钱包；</p>
                  <p>3、原则上只能将退款提现至签约人银行账户，如要提现至其他账户，需符合自如特殊提现规则，并提供相应证明文件；</p>
                  <p>4、为保障您的利益，请在自如APP内签约和付款，切勿与个人签约付款；</p>
                  <p>5、请参阅合同，详细了解租户的权利和责任。</p>
                </div>
              </div>
          </div>
          </van-popup>
        </div>
      </div>

      <!-- 空气质量 -->
      <div class="l_air-wrapper">
        <a href="#" class="l_air-quality">
          <p class="l_air-title">空气质量</p>
          <div class="l_air-stu">
            已检测
            <van-icon name="arrow" class="l_air-icon" />
          </div>
        </a>
      </div>

      <!-- 房屋标签 -->
      <div class="l_tags">
        <span class="l_room-tags" v-for="(tag, index) in houseTags" :key="index">{{ tag }}</span>
      </div>

      <div class="l_house-tags">
        <span>{{ this.districtName }}</span>
      </div>
    </div>

    <!-- 房源介绍 -->
    <div class="l_housedesc-srapper pd36">
      <p class="l_room-mode">房源介绍</p>
      <div class="l_desc-container">
        <p class="l_house-desc">{{ this.roomDesc }}</p>
      </div>
    </div>

    <!-- 户型配套 -->
    <div class="l_hosuetype-wrapper pd36">
      <p class="l_room-mode">户型配套</p>
      <div class="l_housetype-hx"></div>
    </div>

    <!--  -->
    <div class="l_config-wrapper pd36 border-2px">
        <van-tabs
          v-model="activeName"
          color="#F37335"
          line-width="60px"
          title-active-color="#F37335"
          style="z-index: 999"
          class="l_tabs"
        >
          <van-tab title="01卧" name="a">
            <div class="l_tabviews-title">
              <span>面积·14.3平方米</span>
              <span>朝向·西</span>
            </div>
            <div class="l_config-icons">
              <div class="l_single-icons fl">
                <img src="https://static8.ziroom.com/phoenix/app/images/mattress-3x.png" alt="">
                <p>床垫</p>
              </div>
              <div class="l_single-icons fl">
                <img src="https://static8.ziroom.com/phoenix/app/images/air-condition-3x.png" alt="">
                <p>空调</p>
              </div>
              <div class="l_single-icons fl">
                <img src="https://static8.ziroom.com/phoenix/app/images/smart-lock-3x.png" alt="">
                <p>智能锁</p>
              </div>
              <div class="l_single-icons fl">
                <img src="https://static8.ziroom.com/phoenix/app/images/table-3x.png" alt="">
                <p>桌子</p>
              </div>
              <div class="l_single-icons fl">
                <img src="https://static8.ziroom.com/phoenix/app/images/chest-3x.png" alt="">
                <p>三开门衣柜</p>
              </div>
              <div class="l_single-icons fl">
                <img src="https://static8.ziroom.com/phoenix/app/images/bed-3x.png" alt="">
                <p>1.5米床</p>
              </div>
              <div class="l_single-icons fl">
                <img src="https://static8.ziroom.com/phoenix/app/images/chair-3x.png" alt="">
                <p>椅子</p>
              </div>
            </div>
          </van-tab>
          <van-tab title="公共卫生间" name="b">
            <div class="l_tabviews-title">
              <span>面积·6.3平方米</span>
              <span>朝向·未知</span>
            </div>
          </van-tab>
          <van-tab title="起居室" name="c">
            <div class="l_tabviews-title">
              <span>面积·34.2平方米</span>
              <span>朝向·未知</span>
            </div>
          </van-tab>
          <van-tab title="厨房" name="d">
            <div class="l_tabviews-title">
              <span>面积·13.2平方米</span>
              <span>朝向·未知</span>
            </div>
            <div class="l_config-icons">
              <div class="l_single-icons fl">
                <img src="https://static8.ziroom.com/phoenix/app/images/microwave-3x.png" alt="">
                <p>微波炉</p>
              </div>
              <div class="l_single-icons fl">
                <img src="https://static8.ziroom.com/phoenix/app/images/induction-cooker-3x.png" alt="">
                <p>嵌入式燃气灶</p>
              </div>
              <div class="l_single-icons fl">
                <img src="https://static8.ziroom.com/phoenix/app/images/lampblack-3x.png" alt="">
                <p>油烟机</p>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      <div class="l_tabviews-wrapper"></div>
    </div>

    <!-- 房间信息 -->
    <div class="l_roominfo-wrapper pd36 border-2px">
      <p class="l_room-mode">房间信息</p>
      <ul class="l_zrk-list">
        <li class="border-2px">
          <span>01卧室</span>
          <span>已入住</span>
          <span>女</span>
          <span>魔羯座</span>
        </li>
        <li class="border-2px">
          <span>02卧室</span>
          <span>已入住</span>
          <span>男</span>
          <span>天秤座</span>
        </li>
        <li class="border-2px">
          <span>03卧室</span>
          <span>已入住</span>
          <span>女</span>
          <span>处女座</span>
        </li>
        <li class="border-2px">
          <span>04卧室</span>
          <span>已入住</span>
          <span>男</span>
          <span>水瓶座</span>
        </li>
        <li class="border-2px">
          <span>05卧室</span>
          <span>已入住</span>
          <span>女</span>
          <span>双鱼座</span>
        </li>
      </ul>
    </div>

    <!-- 服务介绍 -->
    <div class="l_serviceinfo-wrapper pd36 border-2px">
      <div class="l_serviceinfo-title">
        <div class="l_room-mode fl">服务介绍</div>
        <div class="l_service-more fr">
          查看全部
          <van-icon name="arrow" class="l_pay-style-icon" />
        </div>
      </div>
      <ul class="l_serviceinfo-list">
        <li>
          <div class="l_serviceinfo-imgs">
            <img src="https://image.ziroom.com/g2m1/M00/69/70/ChAFB1uHVu-ATx1tAAANmh5QdRw501.png" alt="">
          </div>
          <p class="l_service-info">承诺·四大租住承诺，安心有保障</p>
        </li>
        <li>
          <div class="l_serviceinfo-imgs">
            <img src="https://image.ziroom.com/g2m1/M00/6A/9C/ChAFBluHVwyACj28AAAK6PnZTh8586.png" alt="">
          </div>
          <p class="l_service-info">品质·两类品质保障，入住更无忧</p>
        </li>
        <li>
          <div class="l_serviceinfo-imgs">
            <img src="https://image.ziroom.com/g2m1/M00/6A/9C/ChAFBluHVx-ACURvAAAN5HjE8DU728.png" alt="">
          </div>
          <p class="l_service-info">服务·两项日常服务，生活超便捷</p>
        </li>
        <li>
          <div class="l_serviceinfo-imgs">
            <img src="https://image.ziroom.com/g2m1/M00/69/71/ChAFB1uHVy6AAsT5AAAFpn3p7H8133.png" alt="">
          </div>
          <p class="l_service-info">付款·多种付款方式，支付更灵活</p>
        </li>
      </ul>
    </div>

    <!-- 小区介绍 -->
    <div class="l_communityinfo-wrapper pd36 border-2px">
      <div class="l_serviceinfo-title">
        <div class="l_room-mode fl">小区介绍</div>
        <div class="l_service-more fr">
          小区详情
          <van-icon name="arrow" class="l_pay-style-icon" />
        </div>
      </div>
      <div class="l_community-info">
        <ol class="fl">
          <dt></dt>
          <dd>
            <span>建筑年代：</span><span></span>
          </dd>
          <dd>
            <span>绿化率：</span><span></span>
          </dd>
          <dd>
            <span>电梯公寓：</span><span></span>
          </dd>
        </ol>
        <img class="fr" src="" alt="">
      </div>
    </div>

    <!-- 周边交通 -->
    <div class="l_trafficinfo-wrapper border-2px">
      <div class="l_serviceinfo-title pd36">
        <div class="l_room-mode fl">周边及交通</div>
        <div class="l_service-more fr">
          查看详情
          <van-icon name="arrow" class="l_pay-style-icon" />
        </div>
      </div>
    </div>

    <!-- 您的管家 -->
    <div class="l_housekeeper-wrapper pd36 border-2px">
      <p class="l_room-mode">您的管家</p>
      <div class="l_housekeeper-msg">
        <div class="l_housekeeper-img fl">
          <img src="https://pic.ziroom.com/steward_images/60025799.png" alt="">
        </div>
        <span class="l_housekeeper-name fl">lee</span>
        <a href="#" class="l_housekeeper-tel fr">联系管家</a>
      </div>
      <p class="l_housekeeper-desc">
        月亮不睡你不睡，你是租房小宝贝嗨～我是管家喵喵，全成都房源任你挑我就在这，未待春风，只等你来～
      </p>
    </div>

    <!-- 常见问题 -->
    <div class="l_problem-wrapper pd36 border-2px">
      <p class="l_room-mode">常见问题</p>
      <ul class="l_problem-list">
        <li>
          <p>退租怎么办理？哪些情况会扣费？</p>
          <a href="#">查看</a>
        </li>
        <li>
          <p>从哪些方面关注空气质量？</p>
          <a href="#">查看</a>
        </li>
      </ul>
    </div>

    <!-- 为你推荐 -->
    <div class="l_recommend-wrapper pdb48 border-2px">
      <p class="l_room-mode pd36">为您推荐</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload, Icon, Tab, Tabs, Popup } from 'vant'

import GoBack from '../../components/Goback/index'

Vue.use(Icon)
Vue.use(Lazyload)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Popup)

export default {
  name: 'Details',
  components: {
    GoBack
  },
  data () {
    return {
      show: false,
      detail: {},
      swipeLists: [],
      houseTags: [],
      districtName: '',
      roomDesc: '',
      activeName: 'a'
      // communityInfo: {}
    }
  },
  methods: {
    onload (e) {
      const detail = this.$route.query.detail
      this.detail = detail
      this.swipeLists = detail.swipeImgs
      this.houseTags = detail.houseTags
      this.districtName = detail.districtName
      this.roomDesc = detail.roomDesc
    },
    showPopup () {
      this.show = true
    },
    closePay () {
      this.show = false
    }
  },
  created () {
    this.onload()
  }
}
</script>

<style lang="scss" scoped>
  .l_intro {
    border-bottom: 1px solid #eee;
    .l_de_title {
      .l_house_name {
        font-size: 1.6rem;
        margin-bottom: .6rem;
        line-height: 1.5;
        font-weight: 600;
        color: rgba(0,0,0,.85);
        margin-top: 1.4rem;
      }
    }
    .l_price-wrapper {
      .l_curr-price {
        color: #444;
        font-size: 1.4rem;
      }
      .l_price-unit-position {
        padding-top: .5rem;
        font-size: 0.9rem;
      }
      .l_pay-type-box {
        margin-top: .3rem;
        .l_pay-style {
          color: #999;
        }
      }
    }
    .l_air-wrapper {
      display: flex;
      height: 1.853rem;
      margin-top: 1.533rem;
      margin-bottom: 1.533rem;
      a {
        flex: 1;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 .267rem;
        font-size: .8rem;
        line-height: .427rem;
        background-color: rgba(134,186,123,.1);
        color: #86ba7b;
        .l_air-icon {
          width: 1em;
          height: 1.1em;
          vertical-align: middle;
          overflow: hidden;
        }
      }
    }
    .l_tags {
      padding-top: 1.533rem;
      margin-top: 1.533rem;
      border-top: 1px solid #eee;
      .l_room-tags {
        display: inline-block;
        border-radius: 4px;
        font-size: .8rem;
        color: rgba(0,0,0,.6);
        padding: .4rem .5rem;
        margin-right: .213rem;
        margin-bottom: .213rem;
        text-align: center;
        background-color: rgba(0,0,0,.03);
      }
    }
    .l_house-tags {
      display: flex;
      padding: 1rem 0;
      height: 1.467rem;
      // justify-content: center;
      align-items: center;
      color: #444;
    }
    .paystyle {
      .l_paystyle {
        position: fixed;
        width: 100%;
        padding: 1rem;
        z-index: 999;
        background-color: #fff;
      }
      .l_popup-content {
        position: absolute;
        top: 10%;
        width: 100%;
        box-sizing: border-box;
        padding: 0 1.4rem;
        p {
          font-size: 1.64rem;
          color: #444;
          margin: .64rem 0 .853rem;
        }
        ul {
          li {
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid #eee;
            padding: 1.5rem 0 1rem;
            .l_pay-text {
              font-size: 1.2rem;
            }
            .l_pay-desc {
              font-size: .8rem;
              color: #888;
              margin-top: 1rem;
              >div:nth-child(2) {
                margin-left: 2.5rem;
              }
            }
          }

        }
        .l_pay-intro {
          color: #444;
          padding: 1.5rem 0 0;
          // padding-bottom: .427rem;
          >div {
            font-size: 1.427rem;
            margin-bottom: .533rem;
          }
          p {
            font-size: .373rem;
            color: #999;
            margin-bottom: .32rem;
            line-height: 1.5;
          }
        }
      }
  }
  }
  .l_housedesc-srapper {
    padding-bottom: 1.64rem;
    border-bottom: 1px solid #eee;
    .l_house-desc {
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 1.1rem;
      line-height: 1.6rem;
      color: #999;
    }
  }
  .l_housetype-hx {
    width: 100%;
    height: 15.873rem;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #ccc;
    background-image: url(//imgpro.ziroom.com/56912319-8d3a-49f1-8f4b-101b9a1d065a_220.jpg_C_800_600_Q90.jpg);
  }
  .l_config-wrapper {
    color: #999;
    height: 13.8rem;
    .l_tabviews-title {
      font-family: PingFangSC-Light;
      line-height: 1.373rem;
      margin-top: .64rem;
      margin-bottom: .64rem;
      padding-left: .8rem;
      span {
        display: inline-block;
        margin-right: 1.853rem;
      }
    }
    .l_config-icons {
      margin-top: 1.6rem;
      .l_single-icons {
        width: 25%;
        text-align: center;
        margin-bottom: 1.54rem;
        img {
          width: 1.5rem;
          display: table;
          margin: 0 auto .267rem;
        }
        p {
          font-size: .8rem;
        }
      }
    }
  }
  .l_roominfo-wrapper {
    .l_zrk-list {
      li {
        display: flex;
        height: 3.45rem;
        line-height: 3.45rem;
        span {
          text-align: center;
          flex: 1;
          font-size: .9rem;
          color: #444;
        }
      }
    }
  }
  .l_serviceinfo-wrapper {
    .l_serviceinfo-list {
      li {
        position: relative;
        height: 2.673rem;
        // line-height: 1.173rem;
        margin-bottom: 1.9rem;
        .l_serviceinfo-imgs {
          position: absolute;
          width: 4.25rem;
          height: 2.73rem;
          line-height: 2.73rem;
          top: 0;
          left: 0;
          img {
            width: 2.73rem;
          }
        }
        .l_service-info {
          color: #999;
          padding-left: 3.813rem;
          font-size: .9rem;
          line-height: 2.9rem;
        }
      }
    }
  }
  .l_communityinfo-wrapper {
    padding-bottom: 1.2rem;
    .l_community-info {
      position: relative;
      overflow: hidden;
      ol {
        color: #999;
        dt {
          font-size: 1.2rem;
          color: #444;
          line-height: 1.1rem;
          margin-bottom: .573rem;
        }
        dd {
          font-size: .9rem;
          margin-bottom: .573rem;
        }
      }
    }
  }
  .l_trafficinfo-wrapper {
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;
  }
  .l_housekeeper-wrapper {
    .l_housekeeper-msg {
      padding-left: .8rem;
      overflow: hidden;
      line-height: 4.467rem;
      font-size: 1.427rem;
      margin-bottom: .48rem;
      .l_housekeeper-img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        border: 1px solid #eee;
        overflow: hidden;
        img {
          width: 100%;

        }
      }
      .l_housekeeper-name {
        margin-left: .5rem;
        color: #444;
      }
      .l_housekeeper-tel {
        width: 4.933rem;
        height: 1.747rem;
        line-height: 1.747rem;
        border: 1px solid #ff961e;
        border-radius: 4px;
        color: #ff961e;
        text-align: center;
        font-size: 1rem;
        margin-top: 1.347rem;
      }
    }
    .l_housekeeper-desc {
        color: #999;
        line-height: 1.3rem;
        // font-size: .427rem;
        padding-bottom: 1.2rem;
      }
  }
  .l_problem-wrapper {
    .l_problem-list {
        margin-top: -.293rem;
        li {
          height: 3.493rem;
          line-height: 1.747rem;
          border-bottom: 1px solid #eee;
          // padding-right: 1.067rem;
          position: relative;
          display: flex;
          align-items: center;
          a {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            height: 3.493rem;
            line-height: 3.493rem;
            width: 4.067rem;
            color: #ff961e;
            text-align: right;
          }
        }
    }
  }
  .l_room-mode {
    font-size: 1.2rem;
    color: #444;
    margin-top: 1.64rem;
    margin-bottom: 1.853rem;
  }
  .l_pay-style-icon {
    width: 1em;
    height: 1.1em;
    vertical-align: middle;
    overflow: hidden;
  }
  .l_serviceinfo-title {
      overflow: hidden;
      .l_service-more {
        font-size: .8rem;
        color: #999;
        padding-top: 1.627rem;
      }
  }
  .l_Map {
  width: 100%;
  height: 300px;
}
</style>
