import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BiDollar, BiShuffle, BiPlus, BiListUl } from "react-icons/bi";
import { Layout } from "../components/Layout";
import { useHistory } from "react-router-dom";
import { logout } from "../store/user";
import { useDispatch, useSelector } from "react-redux";
import { HomeRowItem } from "../components/HomeRowItem";

export const Home = () => {
  const history = useHistory();

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Layout showBack={false} title="HOME">
      {/* if the user is logged in show them the logout button, otherwise show the signup/login button */}
      {user ? (
        <HomeRowItem
          backgroundColor="#c6f5f4"
          onClick={() => dispatch(logout())}
          icon={<FaUserAlt size={50} style={{ color: "white" }} />}
          heading={user.phoneNumber}
          subheading="LOGOUT"
        />
      ) : (
        <HomeRowItem
          backgroundColor="#c6f5f4"
          onClick={() => history.push("/signup")}
          icon={<FaUserAlt size={50} style={{ color: "white" }} />}
          heading="ACCOUNT"
          subheading="LOGIN / SIGNUP"
        />
      )}
      {user && (
        <>
          <HomeRowItem
            backgroundColor="#00bab9"
            onClick={() => history.push("/usd")}
            icon={<BiDollar size={50} style={{ color: "white" }} />}
            heading="USD BALANCE"
            subheading="DEPOSITS / WITHDRAWALS"
          />
          <HomeRowItem
            backgroundColor="#00a6ba"
            onClick={() => history.push("/transactions")}
            icon={<BiListUl size={50} style={{ color: "white" }} />}
            heading="USD TRANSACTIONS"
            subheading="TRANSACTION HISTORY"
          />
          <HomeRowItem
            backgroundColor="#F4EDEA"
            onClick={() => history.push("/bitcoin")}
            icon={<BiShuffle size={50} style={{ color: "white" }} />}
            heading="BITCOIN"
            subheading="BUY / SELL"
          />

          {/* TODO: this item is disabled, unsure what this button is meant to link to */}
          <HomeRowItem
            backgroundColor="#f4d8ca"
            onClick={() => console.log("services not implemented")}
            icon={<BiPlus size={50} style={{ color: "white" }} />}
            heading="SERVICES"
            subheading="BANKING, CUSTODY & MORE"
            disabled
          />
        </>
      )}
    </Layout>
  );
};
