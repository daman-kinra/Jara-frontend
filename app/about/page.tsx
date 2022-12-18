import React from "react";
import ClientComponent from "../(components)/client-component";
import ServerComponent from "../(components)/server-component";

function page() {
  return (
    <div>
      <ClientComponent />
      {/* @ts-ignore */}

      <ServerComponent />
    </div>
  );
}

export default page;
