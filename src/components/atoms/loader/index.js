import React from "react";

import styles from "./style.module.scss";

/**
  Loader component to render a loading indicator.
  @returns {ReactElement} The rendered Loader component.
*/

export default function Loader() {
  return (
    <div className="flex items-center justify-center">
      <div className={styles.loader}></div>
    </div>
  );
}
