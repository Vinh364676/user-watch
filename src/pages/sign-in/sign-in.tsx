import { Button, Checkbox, Form, Input } from 'antd'
import React from "react"
import { useTranslation } from "react-i18next"
import { RouteChildrenProps } from "react-router"
import { Link } from "react-router-dom"
import "./sign-in.scss"
type Props={}

export default function SignIn(props: Props) {

	const { t } = useTranslation();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	
	}

	return (
		<div className="sign-in-form">
			<Form
				name='basic'
				layout="vertical"
				onFinish={handleSubmit}
			>
				<Form.Item
					label={t('Login.email')}
					name='userName'
					rules={[{ required: true, message: t('Login.emailRequired') }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label={t('Login.password')}
					name='password'
					rules={[{ required: true, message: t('Login.passwordRequired') }]}
				>
					<Link to='' className='forgot'>
						{t('Login.forgotYourPassword')}
					</Link>
					<Input.Password
						placeholder="input password"
						iconRender={visible => (visible ? 'hide' : 'show')}
					/>
				</Form.Item>

				<Form.Item name='isRemember' valuePropName='checked'>
					<Checkbox>{t('Login.rememberMe')}</Checkbox>
				</Form.Item>

				<Form.Item >
					<Button htmlType='submit' type="primary" shape="round">
						{t('Login.continue')}
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}
