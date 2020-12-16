import React from "react";
import Loadable from "react-loadable";

const Loading = () => <div></div>;
export const Dashboard = Loadable({
  loader: () => import(/* webpackChunkName: "dashboard" */ "./../dashboard"),
  loading: () => <Loading />,
  modules: ["dashboard"],
  webpack: () => [require.resolveWeak("./../dashboard")]
});
export const Session = Loadable({
  loader: () => import(/* webpackChunkName: "session" */ "./../session"),
  loading: () => <Loading />,
  modules: ["session"],
  webpack: () => [require.resolveWeak("./../session")]
});
export const Category = Loadable({
  loader: () => import(/* webpackChunkName: "category" */ "./../category"),
  loading: () => <Loading />,
  modules: ["category"],
  webpack: () => [require.resolveWeak("./../category")]
});
export const Discover = Loadable({
  loader: () => import(/* webpackChunkName: "discover" */ "./../discover"),
  loading: () => <Loading />,
  modules: ["discover"],
  webpack: () => [require.resolveWeak("./../discover")]
});
export const Search = Loadable({
  loader: () => import(/* webpackChunkName: "search" */ "./../search"),
  loading: () => <Loading />,
  modules: ["search"],
  webpack: () => [require.resolveWeak("./../search")]
});
export const Account = Loadable({
  loader: () => import(/* webpackChunkName: "account" */ "./../account"),
  loading: () => <Loading />,
  modules: ["account"],
  webpack: () => [require.resolveWeak("./../account")]
});
export const Setting = Loadable({
  loader: () => import(/* webpackChunkName: "setting" */ "./../setting"),
  loading: () => <Loading />,
  modules: ["setting"],
  webpack: () => [require.resolveWeak("./../setting")]
});
export const Notification = Loadable({
  loader: () => import(/* webpackChunkName: "notification" */ "./../notification"),
  loading: () => <Loading />,
  modules: ["notification"],
  webpack: () => [require.resolveWeak("./../notification")]
});
export const DiscoverCategory = Loadable({
  loader: () => import(/* webpackChunkName: "discover-category" */ "./../discover-category"),
  loading: () => <Loading />,
  modules: ["discover-category"],
  webpack: () => [require.resolveWeak("./../discover-category")]
});
export const Content = Loadable({
  loader: () => import(/* webpackChunkName: "content" */ "./../content"),
  loading: () => <Loading />,
  modules: ["content"],
  webpack: () => [require.resolveWeak("./../content")]
});
export const Contact = Loadable({
  loader: () => import(/* webpackChunkName: "contact" */ "./../contact"),
  loading: () => <Loading />,
  modules: ["contact"],
  webpack: () => [require.resolveWeak("./../contact")]
});
export const TermsCondition = Loadable({
  loader: () => import(/* webpackChunkName: "terms-condition" */ "./../terms-condition"),
  loading: () => <Loading />,
  modules: ["terms-condition"],
  webpack: () => [require.resolveWeak("./../terms-condition")]
});
export const PrivacyPolicy = Loadable({
  loader: () => import(/* webpackChunkName: "privacy-policy" */ "./../privacy-policy"),
  loading: () => <Loading />,
  modules: ["privacy-policy"],
  webpack: () => [require.resolveWeak("./../privacy-policy")]
});
export const ProfileImage = Loadable({
  loader: () => import(/* webpackChunkName: "profile-image" */ "./../profile-image"),
  loading: () => <Loading />,
  modules: ["profile-image"],
  webpack: () => [require.resolveWeak("./../profile-image")]
});
