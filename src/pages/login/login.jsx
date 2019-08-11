import React, {
	Component
} from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './style.less'

export default class Login extends Component {
	handleSubmit = (event) => {
		
	}
	
	render() {
		return(
			<div className = "login">
				<header className = "login-header">
					header
				</header>
				<section className = "login-content">
					<p className = "title">登录</p>
					<Form onSubmit={this.handleSubmit} className="login-form">
					    <Form.Item>
					      <Input
					          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
					          placeholder="账号"
					        />
					    </Form.Item>
					    <Form.Item>
					      <Input
					          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
					          type="password"
					          placeholder="密码"
					        />
					    </Form.Item>
					    <Form.Item>
					      <Button type="primary" htmlType="submit" className="login-form-button">
					        登录
					      </Button>
					    </Form.Item>
					  </Form>
				</section>
			</div>
		)
	}
}