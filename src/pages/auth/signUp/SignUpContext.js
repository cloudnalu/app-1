import React, { createContext, useState, useCallback } from "react";
import { useToast } from "@chakra-ui/core";
import { login } from "../../../store/user";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";

const SignUpContext = createContext({});
export default SignUpContext;

export const SignUpContextProvider = ({ children }) => {
  const toast = useToast();
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const [signUpData, setSignUpData] = useState({});
  const [verified, setVerified] = useState(null);
  const [error, setError] = useState(false);

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

      // alert the user depending on the result, and where they are in the app
      if (result) {
        // if the account was verified and created successfully, log the user in
        dispatch(login({ phoneNumber: signUpData.phoneNumber }));

        // if the user is not on the verification page anymore, throw a toast alert up to let them know they have been verified
        if (location.pathname !== "/signup/verification") {
          toast({
            title: "Account verified.",
            description: "You may now use our services.",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "bottom-right",
          });
        }
      } else {
        toast({
          title: "Verification failed.",
          description: "Your account failed to be verified.",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "bottom-right",
        });

        // redirect the user to verification to see the failure
        history.push("/signup/verification");
      }
    } catch (error) {
      // toast and set failed verification
      toast({
        title: "Verification failed.",
        description:
          "An error occurred while verifying your account, please try again later",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "bottom-right",
      });
      setError(
        "An error occurred while verifying your account, please try again later"
      );

      // redirect the user to verification to see the error
      history.push("/signup/verification");
    }
  }, [dispatch, history, location.pathname, signUpData.phoneNumber, toast]);

  return (
    <SignUpContext.Provider
      value={{
        signUpData,
        setSignUpData,
        submitForVerification,
        verified,
        error,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
