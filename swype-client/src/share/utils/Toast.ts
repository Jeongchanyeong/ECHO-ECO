import Swal, { SweetAlertIcon } from 'sweetalert2';
import styled from 'styled-components';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

const StyledToast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #959595;
  line-height: 30px;
`;

const toastHtml = (firstLine: string, secondLine: string) => {
  return ReactDOMServer.renderToString(
    React.createElement(
      StyledToast,
      null,
      React.createElement('span', null, firstLine),
      React.createElement('span', null, secondLine)
    )
  );
};

// SweetAlert2 토스트 알림 옵션
export const Toast = Swal.mixin({
  toast: true,
  position: 'center',
  showConfirmButton: false,
  timer: 1200,
  timerProgressBar: false,
  didOpen: toast => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

// 커스텀 토스트 알림 함수 - showToast
export const showToast = (icon: SweetAlertIcon, firstLine: string, secondLine: string) => {
  Toast.fire({
    icon,
    html: toastHtml(firstLine, secondLine),
  });
};

// 일반 알림 함수 - alertSweet
export const alertSweet = (icon: SweetAlertIcon, text: string) => {
  Swal.fire({
    icon,
    text,
  });
};
