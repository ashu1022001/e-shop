import React, { ReactText, useCallback, useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";
import { useAuth } from "../../hooks/useAuth";
import Modal from "../../molecules/modal/Modal";
import "./SignupModal.scss";

interface ISignupModal {
  isOpen: boolean;
  closeFn: () => void;
}

const SignupModal: React.FC<React.PropsWithChildren<ISignupModal>> = ({
  closeFn,
  isOpen = false,
}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const hasConfirmPasswordError = useMemo(() => {
    return !!(password && confirmPassword) && password.trim() !== confirmPassword.trim();
  }, [password, confirmPassword]);

  const { signUp } = useAuth();

  const signupFn = useCallback(
    async (e: any) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const email = (formData.get("email") as string)?.trim();
      const displayName = (formData.get("name") as string)?.trim();
      const password = (formData.get("password") as string).trim();
      await signUp(email, password, displayName);
      closeFn();
    },
    [closeFn]
  );

  useEffect(() => {
    return () => {
      setConfirmPassword("");
      setPassword("");
    }
  }, []);

  return (
    <Modal closeFn={closeFn} isOpen={isOpen}>
      <form onSubmit={signupFn} className="signup-form">
        <Input placeholder="Name" name="name" type="text" />
        <Input
          placeholder="Email"
          name="email"
          type="email"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirm Password"
          name="confirm-password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        { hasConfirmPasswordError && (
          <div className="password-match-error">
            Password and Confirm password does not match!!
          </div>
        )}
        <Button disabled={hasConfirmPasswordError} variation="primary"> Signup</Button>
      </form>
    </Modal>
  );
};

export default SignupModal;
