import React from "react";
import Layout from "../../componets/Layout";
import Section1 from "./Section1";

export default function Home(){
    return(
        <Layout>
            <div className="Home">
                <Section1/>
            </div>
        </Layout>
    )
}