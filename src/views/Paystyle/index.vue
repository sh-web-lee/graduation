<!--
 * @Author: lee
 * @Date: 2021-03-25 10:39:09
 * @LastEditTime: 2021-03-25 16:44:30
 * @FilePath: \ziru-demo\src\views\Paystyle\index.vue
-->
<template>
  <div class="paystyle">
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
</template>

<script>

export default {
  name: 'PayStyle'
}
</script>

<style lang="scss" scoped>
  .paystyle {
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
</style>
