import React from "react";
import "./loading.css";
import SectionHeading from "../section-heading/section-heading";

export default function Loading({heading}) {
  const Lloading = () => (
    <div class="category-wrapper">
      <SectionHeading heading={heading} />
      <div className="loadingWrapper">
        <div className="verticalPostLoading">
          <div className="imgWrapperLoading"></div>
          <div className="postInfoLoading">
            <div className="categoryLoading"></div>
            <div className="titleLoading"></div>
            <div className="titleLoading2"></div>
          </div>
        </div>
        <div className="verticalPostLoading">
          <div className="imgWrapperLoading"></div>
          <div className="postInfoLoading">
            <div className="categoryLoading"></div>
            <div className="titleLoading"></div>
            <div className="titleLoading2"></div>
          </div>
        </div>
        <div className="verticalPostLoading">
          <div className="imgWrapperLoading"></div>
          <div className="postInfoLoading">
            <div className="categoryLoading"></div>
            <div className="titleLoading"></div>
            <div className="titleLoading2"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return <Lloading />;
}
