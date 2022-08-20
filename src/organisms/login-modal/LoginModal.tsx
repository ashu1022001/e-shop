import React, { ReactText, useCallback, useState } from "react";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";
import { useAuth } from "../../hooks/useAuth";
import Modal from "../../molecules/modal/Modal";
import "./LoginModal.scss";

interface ILoginModal {
  isOpen: boolean;
  closeFn: () => void;
}

const LoginModal: React.FC<React.PropsWithChildren<ILoginModal>> = ({
  closeFn,
  isOpen = false
}) => {
  const { login } = useAuth();

  const loginFn = useCallback(async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await login(email, password);
    closeFn();
  }, [closeFn]);

  return (
    <Modal closeFn={closeFn} isOpen={isOpen}>
      <form onSubmit={loginFn} className="login-form">
        <Input placeholder="Email" name="email" type="email" required/>
        <Input placeholder="Password" name="password" type="password" required/>
        <Button variation="primary"> Login</Button>
      </form>
    </Modal>
  );
};

export default LoginModal;
