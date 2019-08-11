import ajax from './ajax';

const BASE = '';

export const reqLogin = (account,pwd) => ajax('/login',{account,pwd},'POST');
