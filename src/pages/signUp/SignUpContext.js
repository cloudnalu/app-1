import React, { createContext, useState, useCallback } from "react";
import { useToast } from "@chakra-ui/core";
import { login } from "../../store/user";
import { useDispatch } from "react-redux";

const SignUpContext = createContext({});
export default SignUpContext;

export const SignUpContextProvider = ({ children }) => {
  const toast = useToast();

  const [signUpData, setSignUpData] = useState({});
  const [verified, setVerified] = useState(null);

  const dispatch = useDispatch();

  const submitForVerification = useCallback(async () => {
    try {
      // TODO: do something with the sign up data which resolves this promise with true for verified and false for failed verification
      const result = await new Promise((resolve, reject) => {
        // set timeout to simulate the verification process
        setTimeout(() => {
          resolve(true);
        }, 3000);
      });

      setVerified(result);
      if (result) {
        // if the account was verified and created successfully, log the user in
        dispatch(login({ phoneNumber: signUpData.phoneNumber }));
        toast({
          title: "Account verified.",
          description: "You may now use our services.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "bottom-right",
        });
      } else {
        toast({
          title: "Verification failed.",
          description: "Your account failed to be verified.",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "bottom-right",
        });
      }
    } catch (error) {
      // toast and set failed verification
      toast({
        title: "Verification failed.",
        description: "Your account failed to be verified.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  }, [dispatch, signUpData.phoneNumber, toast]);

  return (
    <SignUpContext.Provider
      value={{ signUpData, setSignUpData, submitForVerification, verified }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
