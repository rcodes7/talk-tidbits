import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>TalkTidbits</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
      />
    </>
  );
}
