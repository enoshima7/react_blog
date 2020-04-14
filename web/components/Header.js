import '../static/style/components/Header.css'
import { Row, Col, Menu } from 'antd'
import { HomeFilled, VideoCameraFilled, SmileFilled } from '@ant-design/icons'
const Header = () => {
  return (
    <div className='header'>
      <Row type='flex' justify='center'>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <span className='header_logo'>Will Duan</span>
          <span className='header_txt'>前端开发工程师</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode='horizontal'>
            <Menu.Item key='home'>
              <HomeFilled />
              首页
            </Menu.Item>
            <Menu.Item key='video'>
              <VideoCameraFilled />
              视频
            </Menu.Item>
            <Menu.Item key='life'>
              <SmileFilled />
              生活
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}
export default Header
