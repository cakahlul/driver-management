import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Shipper | Driver Management</title>
      </Head>
      <main className="bg-gray-100">{children}</main>
    </>
  );
}
