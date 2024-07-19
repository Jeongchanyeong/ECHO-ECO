import Swal, { SweetAlertIcon } from 'sweetalert2';

// 토스트 알림 css 옵션
export const Toast = Swal.mixin({
  toast: true,
  position: 'center',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: false,
  padding: '10px',
  color: '#959595',
  didOpen: toast => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

// 토스트 알림 함수 - showToast
export const showToast = (icon: SweetAlertIcon, title: string) => {
  Toast.fire({ icon, title });
};

// 일반 알림 함수 - alertSweet
export const alertSweet = (icon: SweetAlertIcon, text: string, title: string) => {
  Swal.fire({
    icon,
    text,
    title,
  });
};
