import * as React from "react";
import { Link } from 'gatsby';
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <main>
      <h1>Bumavit</h1>
      <Layout pageTitle="Home Page">
        <p>Teste Layout</p>
      </Layout>
    </main>
  )
}

export const Head = () => <title>Bumavit</title>

export default IndexPage