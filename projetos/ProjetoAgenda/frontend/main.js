import 'core-js/stable';
import 'regenerator-runtime/runtime'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

import Login from './modules/login';    

const formlogin = new Login('.form-login');
const formcadastro = new Login('.form-cadastro');
formlogin.init();
formcadastro.init();