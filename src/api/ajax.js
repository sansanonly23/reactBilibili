import axios from 'axios';
import {message} from 'antd';

export default function ajax(url,data = {},method = 'GET'){
	return new promise((resolve,reject) => {
		let promise;
		if(method == 'GET'){
			promise =  axios.get(url,{
				params:data
			})
		}else{
			promise =  axios.post(url,data)
		}
		promise.then(response => {
			
		}).catch(error => {
			message.error(error.message);
		})
	})
		
}
