<template>
  <div>
    <div class="items">
      <header>原始形态：</header>
      <g-row>
        <g-col>12</g-col>
        <g-col>12</g-col>
        <g-col>12</g-col>
      </g-row>
      <pre>
    <code>{{content}}</code>
  </pre>
      <p>默认状态下，col组件占据12等分，也就是row的一半，多出的部分平移到下一行</p>
    </div>

    <div class="items">
      <header>span决定比例：</header>
      <g-row>
        <g-col span="1">1</g-col>
        <g-col span="23">23</g-col>
      </g-row>
      <pre>
    <code>{{content1}}</code>
  </pre>
      <p>span的值是<strong>1-24</strong>的整数，如果不在这个范围内，默认为12，也就是row的一半</p>
    </div>

    <div class="items">
      <header>offset决定偏移量：</header>
      <g-row>
        <g-col span="1" offset="1">1</g-col>
        <g-col span="10" offset="10">10</g-col>
      </g-row>
      <pre>
    <code>{{content2}}</code>
  </pre>
      <p>offset的值是<strong>1-24</strong>的整数，如果不在这个范围内，默认为0。另外如果本行总长度超出24，那么会另起一行，offset不会自适应，而是压缩span的长度</p>
    </div>

    <div class="items">
      <header>row标签justify-content样式传参align：</header>
      <g-row align="center">
        <g-col  span="7">col在中间</g-col>
        <g-col  span="7">col在中间</g-col>
        <g-col  span="7">col在中间</g-col>
      </g-row>
      <g-row align="left">
        <g-col  span="7">col在左边</g-col>
        <g-col  span="7">col在左边</g-col>
        <g-col  span="7">col在左边</g-col>
      </g-row>
      <g-row align="right">
        <g-col  span="7">col在右边</g-col>
        <g-col  span="7">col在右边</g-col>
        <g-col  span="7">col在右边</g-col>
      </g-row>
      <pre>
    <code>{{content3}}</code>
  </pre>
      <p>align的值是<strong>left、center、right</strong>如果不在这个范围内，默认为left。</p>
    </div>

    <div class="items">
      <header>gutter参数：</header>
      <g-row>
        <g-col  span="7"></g-col>
        <g-col  span="7"></g-col>
        <g-col  span="7"></g-col>
      </g-row>
      <br>
      <g-row gutter="20">
        <g-col  span="7"></g-col>
        <g-col  span="7"></g-col>
        <g-col  span="7"></g-col>
      </g-row>
      <pre>
    <code>{{content4}}</code>
  </pre>
      <p>有时候row需要根据具体情况使用margin向两边伸展，具体情况由开发者判断</p>
    </div>

    <div class="items">
      <header>不同屏幕的样式展示：</header>
      <g-row>
        <g-col span="1" i-pad='{"span":"2","offset":"1"}' narrow-p-c='{"span":"3","offset":"1"}' pc='{"span":"4","offset":"1"}' wide-p-c='{"span":"5","offset":"1"}'>媒体查询</g-col>
      </g-row>
      <pre>
    <code>{{content5}}</code>
  </pre>
      <table>
        <tr>
          <th>属性</th>
          <th>适用屏幕宽度</th>
          <th>type</th>
        </tr>
        <tr>
          <td>i-pad</td>
          <td>width: [576px,768px)</td>
          <td>object | json格式的字符串</td>
        </tr>
        <tr>
          <td>narrow-p-c</td>
          <td>width: [768px,992px)</td>
          <td>object | json格式的字符串</td>
        </tr>
        <tr>
          <td>pc</td>
          <td>width: [992px,1200px)</td>
          <td>object | json格式的字符串</td>
        </tr>
        <tr>
          <td>wide-p-c</td>
          <td>width: [1200px,∞)</td>
          <td>object | json格式的字符串</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import Col from '../../../src/col'
  import Row from '../../../src/row'

  export default {
    name: "grid-demos",
    components: {
      'g-col': Col,
      'g-row': Row
    },
    data() {
      return {
        content: `<g-row>
      <g-col></g-col>
      <g-col></g-col>
      <g-col></g-col>
    </g-row>`,
        content1:`<g-row>
        <g-col span="1"></g-col>
        <g-col span="23"></g-col>
      </g-row>`,
        content2:`<g-row>
        <g-col span="1" offset="1">1</g-col>
        <g-col span="10" offset="10">10</g-col>
      </g-row>`,
        content3: `<g-row>
        <g-col align="left" span="8">在左边</g-col>
        <g-col align="center" span="8">在中间</g-col>
        <g-col align="right" span="8">在右边</g-col>
      </g-row>
        `,
        content4:`
        <g-row gutter="20">
        <g-col  span="7"></g-col>
        <g-col  span="7"></g-col>
        <g-col  span="7"></g-col>
      </g-row>`,
      content5:`<g-col span="1" i-pad='{"span":"2","offset":"1"}' narrow-p-c='{"span":"3","offset":"1"}' pc='{"span":"4","offset":"1"}' wide-p-c='{"span":"5","offset":"1"}'>`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    border: 1px solid #ddd;

    .col {
      background: #8959a8;
    }

    .col:first-child {
      background: #42b983;
    }

    .col:last-child {
      background: #20c1c8;
    }
  }

  .items {
    margin-top: 10px;
  }

  header {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  strong {
    color: #d63200;
  }

  .demoDiv{
    background: red;
    width: 50%;
    height: 50%;
  }
</style>
