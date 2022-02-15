const axios=require('axios');
const Swal=require('sweetalert2');


export const apiHelper = axios.create({
  baseURL: "http://192.168.31.244:3000/api",
});

export const Toast=Swal.mixin({
    toast:true,
    timer:3000,
    position:'top-end',
    showConfirmButton:true,

})