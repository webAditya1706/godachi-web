import { useEffect } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";


import dynamic from "next/dynamic";

const Head = dynamic(() => import("../../app/core/Head"));
const BreadCrumb = dynamic(() => import("../../app/components/BreadCrumb"));
const Wallet = dynamic(() => import("../../app/components/MyAccount/Wallet"));
const ProfileLeftMenu = dynamic(() => import("../../app/components/MyAccount/LeftMenu"));


const Default = () => {
   const { isAuthenticated } = useSelector((state) => state.login);

   useEffect(() => {
      if (!isAuthenticated) {
         Router.push("/");
      }
   }, []);

   return (
      <>
        <Head title="Profile" />
        <BreadCrumb />
        <div className="my-account-wrapper section-padding">
            <div className="container">
            <div className="section-bg-color">
                <div className="row">
                <div className="col-lg-12">
                    <div className="myaccount-page-wrapper">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <ProfileLeftMenu activeTabName="wallet" />
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="tab-content" id="myaccountContent">
                                <Wallet />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      </>
   );
};

export default Default;
